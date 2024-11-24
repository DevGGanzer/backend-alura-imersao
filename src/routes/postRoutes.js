import express from "express";
import multer from "multer";
import cors from "cors";
import {
  atualizarNovoPost,
  listarPost,
  postarNovoPost,
  uploadImagem,
} from "../controllers/postController.js";
const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, "uploads/"); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  },
});

const upload = multer({ dest: "./uploads", storage });
const routes = (app) => {
  // Middleware para analisar corpos de requisições JSON
  app.use(express.json());
  app.use(cors(corsOptions));
  // Rota para pegar os Post
  app.get("/posts", listarPost);

  // Rota para criar Post
  app.post("/posts", postarNovoPost);
  // Rota para Upload Post
  app.post("/upload", upload.single("imagem"), uploadImagem);
  // Rota para Atualizar Post
  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
