import styled from 'styled-components'

type BotaoProps = {
  principal: boolean;
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  color: #fff;
  
`

function Teste() {
  return(
    <div>
      <Botao principal>Clique aqui</Botao>
    </div>
  )
}

export default Teste