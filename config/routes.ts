import { Router } from "express";
import LivroController from "../controllers/livroController";

const router = Router();

const livroController = new LivroController();

router.post("/livro/cadastrar", livroController.cadastrar);
router.get("/livro/buscar/:cpf", livroController.buscar);
router.get("/livro/listar", livroController.listar);
export { router };