import { clientes } from '../datos/clientes.js';
let clientesDevolver = clientes;

export class Cliente {
  static getAll() {
    return clientesDevolver;
  }

  static getOneByID(id) {
    return clientesDevolver.find(cliente => cliente.id === id);
  }

  static delete(id) {
    clientesDevolver = clientesDevolver.filter(cliente => cliente.id !== id);
    return clientesDevolver;
  }

  static create(cliente) {
    if (!cliente || !cliente.nombre || !cliente.articulo) {
      return { error: "Datos incompletos para crear el cliente" };
    }

    const nuevoCliente = { ...cliente, id: clientesDevolver.length + 1 };
    clientesDevolver.push(nuevoCliente);
    return nuevoCliente;
  }

  static update(id, cliente) {
    if (!cliente || !cliente.nombre || !cliente.articulo) {
      return { error: "Datos incompletos para actualizar el cliente" };
    }

    const clienteIndice = clientesDevolver.findIndex(cliente => cliente.id === id);
    if (clienteIndice === -1) {
      return { error: "Cliente no encontrado" };
    }

    const actualizado = { ...clientesDevolver[clienteIndice], ...cliente };
    clientesDevolver[clienteIndice] = actualizado;
    return actualizado;
  }
}
