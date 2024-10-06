import { Injectable } from '@nestjs/common';
import { Goods } from '@prisma/client';
import { GoodsType } from '@webstore/core';
import { DbService } from 'src/db/db.service';

@Injectable()
export class GoodsService {
  constructor(readonly prisma: DbService) {}

  private async pushTags(
    goods: Partial<GoodsType> | Goods,
  ): Promise<GoodsType> {
    return { ...goods, tags: await this.getTags(goods.id) } as GoodsType;
  }

  private async getTags(id: number): Promise<string[]> {
    const tags = await this.prisma.tag
      .findMany({
        select: { name: true },
        where: { goodsId: id },
      })
      .then(
        (tags: { name: string }[]): string[] => {
          return tags.map((value: { name: string }): string => value.name);
        },
        (): string[] => [],
      );
    return tags;
  }

  async save(goods: GoodsType): Promise<void> {
    await this.prisma.goods.upsert({
      where: { publicId: goods.publicId },
      update: goods,
      create: goods,
    });
  }

  async create(goods: Partial<GoodsType>): Promise<void> {
    await this.prisma.goods.create({ data: goods as Goods }).then(
      async (value: Goods) => {
        await this.prisma.tag.createMany({
          data: goods.tags.map((name: string) => {
            return { goodsId: value.id, name };
          }),
        });
      },
      (): void => console.log('Goods not inserted!'),
    );
  }

  async getById(id: string): Promise<GoodsType | null> {
    console.log('get by id');
    const goods: GoodsType | null = await this.prisma.goods
      .findUnique({
        where: { publicId: id },
      })
      .then(async (_goods: Goods): Promise<GoodsType> => {
        return await this.pushTags(_goods);
      });
    return goods;
  }

  async get(): Promise<Partial<GoodsType>[]> {
    const goodsList = await this.prisma.goods.findMany();
    return goodsList as Partial<GoodsType>[];
  }

  async delete(id: string): Promise<void> {
    await this.prisma.goods.delete({ where: { publicId: id } });
  }
}
