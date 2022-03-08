import Receita from "../interface/receita"

export default class ReceitaMedica implements Receita {
    private ingredientes: string[]
    private uso: string
    private efeitosColaterais: string
    constructor(ingredientes: string[], uso: string, efeitosColaterais: string) {
        this.ingredientes = ingredientes
        this.uso = uso
        this.efeitosColaterais = efeitosColaterais
    }
    obterInsumos(): string[] {
        return this.ingredientes
    }
    descricaoPreparoUso(): string {
        return `${this.uso}\n${this.efeitosColaterais}`
    }
}