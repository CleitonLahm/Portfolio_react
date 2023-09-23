import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Descricao = styled(P)`
  margin: 24px 0 40px 0;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weidth: bold;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  background-color: #282a35;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`