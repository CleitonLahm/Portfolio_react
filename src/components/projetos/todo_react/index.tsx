import React from "react";
import Paragrafo from "../../Paragrafo";
import Titulo from "../../Titulo";

import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">todo em React</Paragrafo>
      <LinkBotao href="https://todo-react-gilt-one.vercel.app/" target="_blank">Vizualizar</LinkBotao>
  </Card>
);

export default Projeto;
