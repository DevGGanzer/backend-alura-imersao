// Importar o framework Express.js
import express from "express";
import routes from "./src/routes/postRoutes.js";

// Criar uma aplicação Express.js
const app = express();
app.use(express.static("uploads"));
routes(app);
// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor está rodando!");
});
