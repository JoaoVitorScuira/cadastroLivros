import {model,Schema} from "mongoose";
interface Livro {
    nome: String,
    isbn: String,
    preco: String,
    criadoEm: Date}
const LivroSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "Coloque um nome para o livro a ser cadastrado!"]
        },
        isbn: {
            type: String,
            required: [true, "É necessário ter um ISBN para o livro!"],
        },
        preco: {
            type: Number,
            required: [true, "É necessário ter um preço par ao livro!"]
        },
        criadoEm: {
            type: Date,
            default: Date.now
        },
    }
);

export default model("Livro", LivroSchema)
export {Livro}