import express from "express";
import TiposModelPrisma from "../../tipos-model.prisma.mjs";

const { Router } = express;

export default class TiposController {
  #router = Router();
  #tiposModel = null;
  
  constructor() {
    this.#tiposModel = new TiposModelPrisma();
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/tipos`, async (req, res) => await this.getAllTipos(req, res));
    routerV1.post(`/tipos`, async (req, res) => await this.createTipo(req, res));
    routerV1.get(`/horas`, async (req, res) => await this.getAllHoras(req, res));
    routerV1.post(`/horas`, async (req, res) => await this.createHora(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getAllTipos(req, res) {
    try {
      const tipos = await this.#tiposModel.getAllTipos();
      res.json(tipos);
    } catch (error) {
      console.error(`error: ${error}`);
      
    }
  }

  async createTipo(req, res) {
    try {
      const tipo = req.body;
      console.info({tipo});
      this.#tiposModel.addTipo(tipo);
      res.send('tipo creado');
    } catch (error) {
      console.error(`error: ${error}`);
      
    }
  }

  async getAllHoras(req, res) {
    try {
      const horas = await this.#tiposModel.getAllHoras();
      res.json(horas);
    } catch (error) {
      console.error(`error: ${error}`);
      
    }
  }

  async createHora(req, res) {
    try {
      const hora = req.body;
      console.info({hora});
      this.#tiposModel.addHora(hora);
      res.send('hora creada');
    } catch (error) {
      console.error(`error: ${error}`);
      
    }
  }
}