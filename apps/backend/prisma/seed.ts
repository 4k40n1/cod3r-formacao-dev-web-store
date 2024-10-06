import { Goods, PrismaClient } from '@prisma/client';
import { goodsList, GoodsType } from '@webstore/core';

const prisma = new PrismaClient();

async function seed() {
  goodsList.forEach(async (goods: Partial<GoodsType>) => {
    const data: Goods = {
      id: undefined,
      publicId: undefined,
      name: goods.name,
      brand: goods.brand,
      model: goods.model,
      description: goods.description,
      picture: goods.picture,
      videoReview: goods.videoReview,
      rate: goods.rate,
      price: goods.price,
    };
    await prisma.goods
      .create({ data: { ...data } })
      .then(async (_goods: Goods) => {
        if (goods.tags.length > 0)
          await prisma.tag.createMany({
            data: goods.tags.map((tagName: string) => {
              return { goodsId: _goods.id, name: tagName };
            }),
          });
      });
  });
}

seed();
