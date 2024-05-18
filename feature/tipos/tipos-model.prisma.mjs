import { PrismaClient } from '@prisma/client';

export default class TiposModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addTipo(tipo){
    const respuesta = await this.#prismaClient.tipo.create({data: tipo});
  }

  async getAllTipos() {
    return await this.#prismaClient.tipo.findMany();
  }

  async addHora(hora){
    const respuesta2 = await this.#prismaClient.hora.create({data: hora});
  }

  async getAllHoras() {
    return await this.#prismaClient.hora.findMany();
  }
}