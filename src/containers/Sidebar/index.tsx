import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import Avatar from "../../components/avatar"

import { Descricao, BotaoTema, SidebarContainer } from "./styles"

const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <Avatar></Avatar>
    <Titulo fontSize={20}>Cleiton Lahm</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>CleitonLahm</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Desenvolvedor front-end</Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar