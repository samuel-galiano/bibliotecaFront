import { Livro } from "./Livro";

export class Transacao{
  public id: Number | undefined;
  public data: String | undefined;
  public tipo: String | undefined;
  public livro: Livro | undefined;
}
