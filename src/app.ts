import FabricaMacarraoCalabresa from "./fabrica/fabricaMacarraoCalabresa"
import FabricaXaropeTossi from "./fabrica/fabricaXaropeTossi"

let fabrica = new FabricaMacarraoCalabresa()
let macarrao = fabrica.obterReceita()
console.log(macarrao.obterInsumos())
console.log(macarrao.descricaoPreparoUso())

fabrica = new FabricaXaropeTossi()
let xaropiTossi = fabrica.obterReceita()
console.log(xaropiTossi.obterInsumos())
console.log(xaropiTossi.descricaoPreparoUso())