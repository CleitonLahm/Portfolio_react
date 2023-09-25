import React from "react";
import Paragrafo from "../../Paragrafo";
import Titulo from "../../Titulo";

import { Card, LinkBotao } from "./styles";

const Projeto3 = () => (
  <Card>
    <Titulo>Snake game</Titulo>
    <Paragrafo tipo="secundario">Jogo da cobrinha com Javascript</Paragrafo>
      <LinkBotao href="https://snake-game-cleitonlahm.vercel.app/" target="_blank">Vizualizar</LinkBotao>
      <LinkBotao href="https://github.com/CleitonLahm/SNAKE_GAME" target="_blank">Ver repositório</LinkBotao>
  </Card>
);

export default Projeto3;
