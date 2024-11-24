// Importar a função para conectar ao banco de dados
import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Estabelecer a conexão com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
  // Conectar ao banco de dados 'instabytes'
  const db = conexao.db("instabytes");
  // Selecionar a coleção 'posts'
  const colecao = db.collection("posts");
  // Encontrar todos os posts e retornar como um array
  return colecao.find().toArray();
}
export async function criarPost(novoPost) {
  const db = conexao.db("instabytes");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}
export async function atualizarPost(id, novoPost) {
  const db = conexao.db("instabytes");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost });
}
