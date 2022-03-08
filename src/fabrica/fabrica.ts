import Receita from "../interface/receita";

export default abstract class Fabrica {
    abstract obterReceita(): Receita
}