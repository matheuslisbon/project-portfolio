import React from 'react'
import Desc from './styled'
//Images das Redes Sociais
import WathsappImg from '../../styles/images/redesSociais/whatsapp.svg'
import Instagram from '../../styles/images/redesSociais/instagram.svg'
import Facebook from '../../styles/images/redesSociais/Facebook.svg'
import Linkedin from '../../styles/images/redesSociais/linkedin.svg'
//Images das tecnologias
import JestImg from '../../styles/images/tecnologias/jestImg.jpg' 
import postgresImg from '../../styles/images/tecnologias/postgresImg.png' 
import mongoImg from '../../styles/images/tecnologias/mongoImg.jpg' 
import mySqlImg from '../../styles/images/tecnologias/mySqlImg.jpg' 
import SequelizeImg from '../../styles/images/tecnologias/ormSequelizeImg.png' 
import NodeImg from '../../styles/images/tecnologias/nodejs.png' 
import ReactImg from '../../styles/images/tecnologias/react.png'
import JavascriptImg from '../../styles/images/tecnologias/imgJs.png'
// Images do GitHub
import nlwEcolletaImg from '../../styles/images/gitHubImgs/nlwEcolleta.png'
import cloneYoutube from '../../styles/images/gitHubImgs/cloneYoutubeImg.jpg'
import nlwHappyImg from '../../styles/images/gitHubImgs/happy.png'
import ImgSite from '../../styles/images/gitHubImgs/imgSite.PNG'
export default function (){
  return (
    <Desc>

      <div className='grid'>
        
        <div className='center'>
    <div><h1 className='logo'>Matheus</h1> <span className='web'>FullStack Developer</span> </div>  

    <img className='perfil' src="https://instagram.frec7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/39915906_399189717281759_4127910832170336256_n.jpg?_nc_ht=instagram.frec7-1.fna.fbcdn.net&_nc_ohc=sQ6yIHqIwlEAX_gQqla&oh=104cdb12be2e00871874014fe5eecfd7&oe=5FA15B19" alt="matheus Lisbon" title='matheus-lisbon'/>
    <ul className='redes'>
      <div className='div-redes'>
            <p className='p-ul'>Contato</p>
          <ul className='div-redes-ul'>
                    <li><p className='waths'><a className='link-href' href="https://wa.me/5581986384447?text=Ol%C3%A1+gostaria+da+saber+um+pouco+do+seu+trabalho%21"> <img alt='whatsapp image logo' className='img-link' src={WathsappImg} /></a></p></li>
        <li><p className='insta'><a className='link-href' href='https://www.instagram.com/matheus_lisbon/'> <img alt='instagram image logo' className='img-link' src={Instagram} /></a></p></li>
        <li><p className='face'><a className='link-href' href="https://www.facebook.com/profile.php?id=100009610324999"> <img alt='facebook image logo' className='img-link' src={Facebook} /></a> </p></li>
        <li><p className='linkedin'><a className='link-href' href="https://www.linkedin.com/in/matheus-eduardo-a83a8a1a7/"> <img alt='linkedin image logo' className='img-link' src={Linkedin} /></a></p></li>

          </ul>
  
      </div>
      <div div-tec>
        <p className='p-ul'>Tecnologias</p>
          <ul className='div-redes-tech'>
          <li><img className='img-tech' src={ReactImg} alt="react javascript"/></li>
          <li><img className='img-tech' src={postgresImg} alt="banco de dados postgres"/></li> 
          <li><img className='img-tech' src={SequelizeImg} alt="sequelize Orm"/></li>
          <li><img className='img-tech' src={JavascriptImg} alt="javascript img"/></li>
          <li><img className='img-tech' src={JestImg} alt="jest teste no javascript"/></li>
          <li><img className='img-tech' src={NodeImg} alt="backend node"/></li>
          <li><img className='img-tech' src={mongoImg} alt="mongo banco de dados"/></li>
          <li><img className='img-tech' src={mySqlImg} alt="mysql banco de dados"/></li>

          </ul>

      </div>
    </ul>
    </div>  

    <section>
      <h1 className='bem-vindo'>Seja Bem vindo!</h1>
      <article>
        <p className='intro'>
                  Olá! Me chamo Matheus Eduardo sou de Recife em Pernambuco, tenho 17 anos e sou apaixonado por Animes,
        Dês dos meus 14 anos estudo programação... Atualmente estou estudando Jest E Migrations no entanto já sei tecnologias como 
        <label> Node, React, Express, MongoDb, PostgreSQL, MySQL, Git e GitHub...</label>
        </p>

      </article>

    </section>
    </div>
      <div className='portfolio'>
        <p className='port'>Portfolio</p>

        <div className='items-port'>
        <div>
            <a className='port-link' style={{color:'#04B2D9'}} target='_black' href="https://dados-covid-world.netlify.app/">  <h1>Dados covid-19</h1></a>
            <img src={ImgSite} alt="dados diarios de covid"/>
            <p>Projeto que fiz para orientar pessoa sobre a panderia do covid </p>

          </div>

          <div>
            <a className='port-link' style={{color:'#04B2D9'}} target='_black' href="https://github.com/matheuslisbon/next-level-week1-E-colleta">  <h1>Nlw E-colleta</h1></a>
            <img src={nlwEcolletaImg} alt="next level week ecolleta"/>
            <p>Meu Projeto criado com ajuda da Rockeatseat </p>

          </div>
          <div>
            <a className='port-link' style={{color:'#04B2D9'}} target='_black' href="https://github.com/matheuslisbon/next-level-week-happy"><h1>Next Level Week Happy</h1></a> 
            <img src={nlwHappyImg} alt="next level week happy"/>
            <p>Projeto da NLW2 da Rockeatseat</p>
          </div>
                    <div>
            <a className='port-link' style={{color:'#04B2D9'}} target='_black' href="https://github.com/matheuslisbon/clone-youtube"><h1>Clone Youtube</h1></a> 
            <img src={cloneYoutube} alt="clone do youtube"/>
            <p>Clone do youtube com Material-UI</p>
          </div>
        </div>

      </div>

    </Desc>
  )
}