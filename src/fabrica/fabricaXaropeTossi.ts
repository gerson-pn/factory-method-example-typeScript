import receita from "../interface/receita";
import ReceitaCulinaria from "../modelo/receitaCulinaria";
import MacarraoQueijo from "../modelo/receitaCulinaria";
import ReceitaMedica from "../modelo/receitaMedica";
import Fabrica from "./fabrica";

export default class FabricaXaropeTossi extends Fabrica {
    obterReceita(): receita {
        let ingredientes = [
            'Cloridrato de bromexina'
        ]
        let descricaoUso = `Tomar uma dose a cada 6 horas.`
        let efeitosColaterais = `Pode procar dor de cabeça.
        Pode provocar azia.`
        let xaropiTossi = new ReceitaMedica(ingredientes, descricaoUso, efeitosColaterais)
        return xaropiTossi;
    }
}