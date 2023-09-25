import React from "react";
import Paragrafo from "../../Paragrafo";
import Titulo from "../../Titulo";

import { Card, LinkBotao } from "./styles";

const Projeto2 = () => (
  <Card>
    <Titulo>Calculadora</Titulo>
    <Paragrafo tipo="secundario">Calculadora com vueJs</Paragrafo>
      <LinkBotao href="https://calculadora-vue-sandy.vercel.app/" target="_blank">Vizualizar</LinkBotao>
      <LinkBotao href="https://github.com/CleitonLahm/calculadora_vue" target="_blank">Ver repositório</LinkBotao>
  </Card>
);

export default Projeto2;
