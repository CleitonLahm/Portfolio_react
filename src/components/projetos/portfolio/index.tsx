import React from "react";
import Paragrafo from "../../Paragrafo";
import Titulo from "../../Titulo";

import { Card, LinkBotao } from "./styles";

const Projeto4 = () => (
  <Card>
    <Titulo>Esse portfolio</Titulo>
    <Paragrafo tipo="secundario">Criado com react e styled components</Paragrafo>
      <LinkBotao href="https://portfolio-pied-omega-65.vercel.app/" target="_blank">Vizualizar</LinkBotao>
      <LinkBotao href="https://github.com/CleitonLahm/Portfolio" target="_blank">Ver repositório</LinkBotao>
  </Card>
);

export default Projeto4;
