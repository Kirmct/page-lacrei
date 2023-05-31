import { Button } from '../../components/Button'
import { HomeContaier } from './styles'
import rafiki from '../../assets/rafiki 2.svg'

export const Home = () => {
  return (
    <HomeContaier>
      <div className="container">
        <section>
          <h1>Boas vindas a Lacrei Saúde</h1>
          <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>

          <div className="divBtn">
            <Button
              content="Pessoa Usuária"
              variant="primary"
              textColor="white"
              hasBorder={false}
              url="/pessoa-usuaria"
            />
            <Button
              content="Profissional"
              variant="transparent"
              textColor="black"
              hasBorder
              url="/profissional"
            />
          </div>
        </section>

        <div className="divSvg">
          <img src={rafiki} alt="" />
        </div>
      </div>
    </HomeContaier>
  )
}
