import express from "express";
import TiposModel from "../../tipos-model.mjs";


const { Router } = express;

export default class TiposController {
  #router = Router();
  #tiposModel = nulll;
  
  constructor() {
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/tipos`, async (req, res) => this.getAllTipos(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getAllTipos(req, res) {
    try {
      this.#tiposModel=new TiposModel();
      this.#tiposModel.connect();
      const tipos=await this.#tiposModel.getAllTipos();
      res.json(tipos);

      
    } catch (error) {
      console.error(`error: ${error}`);
      
    }finally{
      this.#tiposModel.closeConnection();
    }
  }
}