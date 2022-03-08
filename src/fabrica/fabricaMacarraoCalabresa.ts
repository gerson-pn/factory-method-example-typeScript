import receita from "../interface/receita";
import ReceitaCulinaria from "../modelo/receitaCulinaria";
import Fabrica from "./fabrica";

export default class FabricaMacarraoCalabresa extends Fabrica {
    obterReceita(): receita {
        let ingredientes = [
            '1 pacote de macarrão penne, parafuso, ou gravatinha',
            '1 caixinha de extrato/polpa/molho de tomate',
            '2 caixinha (a mesma medida da caixinha do molho) de água',
            '1 lata de creme de leite',
            '1 cebola média picada',
            '3 gomos de calabresa picados em rodelas finas',
            'Sal a gosto',
            'Óleo ou azeite para refogar a cebola e a calabresa'
        ]
        let descricaoPreparo =
        `Em uma panela de pressão, doure a cebola e a calabresa.
        Após dourar, adicione o sal, o molho, as 2 medidas de água, o macarrão e o creme de leite.
        Se o macarrão não tiver completamente coberto, coloque mais água.
        Misturar bem, adicionar o sal e fechar a panela.
        Contar 5 minutos a partir do momento em que a panela fizer pressão.
        Polvilhe queijo ralado e bom apetite.`
        let macarraoCalabresa = new ReceitaCulinaria(ingredientes, descricaoPreparo)
        return macarraoCalabresa;
    }
}