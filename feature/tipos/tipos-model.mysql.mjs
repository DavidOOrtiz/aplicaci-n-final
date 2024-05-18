import mysql from 'mysql';

export default class TiposModel {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "clinica",
    });
  }

  connect() {
    this.connection.connect();
  }

  closeConnection() {
    this.connection.end();
  }

  async getAllTipos() {
    const query = 'SELECT id, TipoCita FROM clinicas';
    try {
      const results = await new Promise((resolve, reject) => {
        this.connection.query(query, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getAllHoras() {
    const query = 'SELECT id, Hora FROM clinicas';
    try {
      const results = await new Promise((resolve, reject) => {
        this.connection.query(query, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      return results;
    } catch (error) {
      throw error;
    }
  }
}