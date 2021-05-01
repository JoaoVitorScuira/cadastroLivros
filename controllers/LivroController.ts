import { Request, Response } from 'express';
import { handleUnknownError } from '../helpers/errorHandler';
import LivroModel, { Livro } from "../models/livro";

class LivroController {
    async cadastrar(request: Request, response: Response) {
        const livro = request.body;
        await LivroModel.findOne({ isbn : livro.isbn }, function (err: any, livro: Livro){
            console.log(err, livro)
            if (err) handleUnknownError(err, response)
            if (livro)
                response.status(400).json({ erro: "Já existe um livro cadastrado com esse ISBN" })
        })

        const livroCriado = await LivroModel.create(livro);
        response.status(200).json(livroCriado);
    }

    async buscar(request: Request, response: Response) {
        const isbn = request.params.isbn;
        const livro = await LivroModel.findOne({ isbn: isbn }, function (err: any, livro: Livro) {
            if (err) handleUnknownError(err, response)
            if (livro)
                response.status(200).json(livro);
        })
    }

    async listar(request: Request, response: Response){
        const livros = await LivroModel.find();
        response.status(200).json(livros)
    }

    async alterar(request: Request, response: Response) {
        const livro = request.body;
        const updatedLivro = await LivroModel.findOneAndUpdate({ isbn: livro.isbn }, livro);
        response.status(200).json(updatedLivro);
    }

    async remover(request: Request, response: Response) {
        const isbn = request.params.isbn;
        await LivroModel.findOneAndRemove({isbn:isbn})
        response.status(200)
    }
}

export default LivroController;