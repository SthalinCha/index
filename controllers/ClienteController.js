// controllers/ClienteController.js

export class ClienteController {
  constructor(modelo) {
    this.Cliente = modelo;
  }

  getAll = async (req, res) => {
    console.log("Obteniendo todos los clientes...");
    res.json(await this.Cliente.getAll());
  }

  getOneByID = async (req, res) => {
    console.log("Obteniendo cliente por ID...");
    const id = Number(req.params.id);
    const cliente = await this.Cliente.getOneByID(id);
    if (cliente) {
      res.json(cliente);
    } else {
      console.log("Cliente no encontrado.");
      res.status(400).end();
    }
  }

  delete = async (req, res) => {
    console.log("Eliminando cliente...");
    const id = Number(req.params.id);
    const clienteDevolver = await this.Cliente.delete(id);
    if (clienteDevolver) {
      res.json(clienteDevolver);
    } else {
      console.log("No se pudo eliminar el cliente.");
      res.status(400).end();
    }
  }

  create = async (req, res) => {
    console.log("Creando nuevo cliente...");
    const cliente = validarCliente(req.body);

    if (cliente.error) {
      console.log("Validación fallida.");
      return res.status(400).json('Validación de datos es incorrecta');
    }

    const nuevoCliente = await this.Cliente.create(cliente);
    res.json(nuevoCliente);
  }

  update = async (req, res) => {
    console.log("Actualizando cliente...");
    const id = Number(req.params.id);
    const clienteValidado = validarParcial(req.body);
    const nuevoCliente = await this.Cliente.update(id, clienteValidado);
    res.json(nuevoCliente);
  }
}
