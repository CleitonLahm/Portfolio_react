
import { P } from './styles';

type Props = {
  children: string;
}

const Paragrafo = (props: Props) => <P>{props.children}</P>

export default Paragrafo;