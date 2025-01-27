import express from 'express';
import { rutasCliente } from './routes/clientesRoutes.js';
import { Cliente } from './models/Cliente.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());


app.use('/clientes', rutasCliente(Cliente));

app.get('/', (req, res) => {
  res.json({ message: 'Servidor en funcionamiento' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
