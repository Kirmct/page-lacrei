import { PessoaUsuariaContaier } from './styles'
import rafiki1 from '../../assets/rafiki 1.svg'
export const PessoaUsuaria = () => {
  return (
    <PessoaUsuariaContaier>
      <div className="container">
        <section>
          <h1>Pessoa Usuária</h1>
          <p>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora..
          </p>
        </section>

        <div className="divSvg">
          <img src={rafiki1} alt="" />
        </div>
      </div>
    </PessoaUsuariaContaier>
  )
}
