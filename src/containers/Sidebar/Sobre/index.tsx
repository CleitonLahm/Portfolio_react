import Titulo from "../../../components/Titulo";
import Paragrafo from "../../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="secundario">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, placeat rerum fuga aut harum ipsum, quam voluptates quisquam amet nostrum expedita soluta qui reiciendis. Beatae odit veniam sint perspiciatis. Sapiente!
        </Paragrafo>
        <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=cleitonlahm&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=cleitonlahm&layout=compact&langs_count=7&theme=dracula"/>
</GithubSecao>
  </section>
)

export default Sobre