import { Controller, Delete, Get, Param } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsType } from '@webstore/core';

@Controller('goods')
export class GoodsController {
  constructor(private readonly repo: GoodsService) {}

  @Get()
  getGoods(): Promise<Partial<GoodsType>[]> {
    return this.repo.get();
  }

  @Get(':id')
  getGoodsById(@Param('id') id: string): Promise<GoodsType> {
    return this.repo.getById(id);
  }

  @Delete(':id')
  deleteGoods(@Param('id') id: string): Promise<void> {
    return this.repo.delete(id);
  }
}
