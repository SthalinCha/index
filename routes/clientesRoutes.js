// routes/clientesRoutes.js
import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController.js";

export const rutasCliente = (modelo) => {
  const clienteRouter = Router();
  const clienteController = new ClienteController(modelo);

  clienteRouter.get('/', clienteController.getAll);
  clienteRouter.get('/:id', clienteController.getOneByID);
  clienteRouter.delete('/:id', clienteController.delete);
  clienteRouter.post('/', clienteController.create);
  clienteRouter.put('/:id', clienteController.update);

  return clienteRouter;
};
