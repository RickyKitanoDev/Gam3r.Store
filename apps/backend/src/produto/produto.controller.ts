import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProdutoPrisma } from './produto.prisma';
import { Produto } from '@gstore/core';

@Controller('produtos')
export class ProdutoController {
  constructor(readonly repo: ProdutoPrisma) {}

  @Post()
  async salvarProduto(@Body() produto: Produto): Promise<void> {
    return this.repo.salvar(produto);
  }

  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return this.repo.obter();
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {
    return this.repo.obterPorId(+id);
  }

  @Delete(':id')
  async excluirProduto(@Param('id') id: string): Promise<void> {
    return this.repo.excluir(+id);
  }
}
