import receita from "../interface/receita";
import ReceitaCulinaria from "../modelo/receitaCulinaria";
import Fabrica from "./fabrica";

export default class FabricaMacarraoQueijo extends Fabrica {
    obterReceita(): receita {
        let ingredientes = [
            '500 g de penne cozido ao dente',
            '2 colheres (sopa) de azeite',
            '1 lata de molho de tomate',
            '200 g de requeijão de sua preferência',
            '1 lata de creme de leite',
            '300 g de presunto picado',
            '300 g de mussarela picada',
            'Queijo parmesão ralado',
            'Sal e pimenta a gosto'
        ]
        let descricaoPreparo = 
        `Em uma panela aqueça o azeite e doure o alho.
        Junte o molho de tomate, o requeijão e o creme de leite.
        Tempere com sal e pimenta.
        Deixe no fogo brando até o requeijão derreter.
        Desligue o fogo e misture a mussarela e o presunto picados.
        Em um refratário coloque o macarrão, despeje o molho e polvilhe o queijo ralado.
        Deixe por 20 minutos em forno pré-aquecido.
        Sirva em seguida.`
        let macarraoQueijo = new ReceitaCulinaria(ingredientes, descricaoPreparo)
        return macarraoQueijo;
    }
}