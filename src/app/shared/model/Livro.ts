import { Autor } from "./Autor";
import { Editora } from "./Editora";
import { Genero } from "./Genero";
import { Pessoa } from "./Pessoa";

export class Livro{
    public id: Number | undefined;
    public nome: String | undefined;
    public editora: Editora | undefined;
    public genero: Genero | undefined;
    public autor: Autor | undefined;
    public pessoaEmprestado: Pessoa | undefined;
    public quantidadeEmprestada: Number | undefined;
    public dataDoUltimoEmprestimo: String | undefined;
    public disponivel: String | undefined;
}