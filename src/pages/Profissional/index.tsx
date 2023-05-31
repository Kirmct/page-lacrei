import { ProfissionalContainer } from './styles'
import profissional from '../../assets/profissional1.svg'
export const Profissional = () => {
  return (
    <ProfissionalContainer>
      <div className="container">
        <section>
          <h1>Profissional</h1>
          <p>
            Buscamos recrutar pessoas profissionais da saúde que entendam as
            necessidades e se comprometam com o bem-estar da comunidade
            LGBTQIAPN+
          </p>
        </section>

        <div className="divSvg">
          <img src={profissional} alt="" />
        </div>
      </div>
    </ProfissionalContainer>
  )
}
