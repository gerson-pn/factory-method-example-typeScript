import Receita from "../interface/receita"

export default class ReceitaCulinaria implements Receita {
    private ingredientes: string[]
    private preparo: string
    constructor(ingredientes: string[], preparo: string) {
        this.ingredientes = ingredientes
        this.preparo = preparo
    }
    obterInsumos(): string[] {
        return this.ingredientes
    }
    descricaoPreparoUso(): string {
        return this.preparo
    }
}