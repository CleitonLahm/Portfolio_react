import Titulo from "../../components/Titulo"
import Projeto from "../../components/projetos/todo_react"
import Projeto2 from "../../components/projetos/calculadora_vuejs"
import Projeto3 from "../../components/projetos/snake_game"
import Projeto4 from "../../components/projetos/portfolio"

import { Lista } from "./styles"

const Projetos = () => (
  <section>
  <Titulo fontSize={16}>Projetos</Titulo>
  <Lista>
    <li>
      <Projeto></Projeto>
    </li>
    <li>
      <Projeto2></Projeto2>
    </li>
    <li>
      <Projeto3></Projeto3>
    </li>
    <li>
      <Projeto4></Projeto4>
    </li>
  </Lista>
</section>
)

export default Projetos