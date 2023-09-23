import Sidebar from './containers/Sidebar';
import Projetos from './containers/Projetos';
import Sobre from './containers/Sobre';
import EstiloGlobal, { Container } from './styles';

function App() {
  return(
    <>
    <EstiloGlobal></EstiloGlobal>
    <Container>
    <Sidebar></Sidebar>
    <main>
      <Sobre></Sobre>
      <Projetos></Projetos>
    </main>
    </Container>
    </>
  )
}

export default App;
