import zod from 'zod';

const clienteSchema = zod.object({
    id: zod.string(),
  nombre: zod.string(),
  articulo: zod.string(),
  cantidad: zod.int(),
  precio: zod.int()
});

export const validarCliente = (cliente) => clienteSchema.safeParse(cliente);
