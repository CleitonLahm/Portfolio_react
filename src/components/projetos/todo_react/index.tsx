import React from "react";
import Paragrafo from "../../Paragrafo";
import Titulo from "../../Titulo";

import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">to-do em React</Paragrafo>
      <LinkBotao href="https://todo-react-gilt-one.vercel.app/" target="_blank">Vizualizar</LinkBotao>
      <LinkBotao href="https://github.com/CleitonLahm/todo_react" target="_blank">Ver repositório</LinkBotao>
  </Card>
);

export default Projeto;
