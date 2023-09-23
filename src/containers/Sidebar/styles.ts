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
  color: ${props => props.theme.corDeFundo};
  background-color: ${props => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px){
    margin-bottom: 40px;
    text-align: center;
  }
`