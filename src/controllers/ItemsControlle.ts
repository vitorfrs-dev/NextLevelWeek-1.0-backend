import { Request,Response } from "express";
import knex from '../database/connection';

class ItemsController {
  async index(req: Request, res: Response){
    const items = await knex('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        title: item.title,
        image_url:  `http://localhost:3003/uploads/${item.image}`
      }
    })
  
    return res.json(serializedItems);
  }
}

export default ItemsController;