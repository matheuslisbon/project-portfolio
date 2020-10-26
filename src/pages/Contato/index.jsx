import React from 'react'
import Cont from './styled'
import WathsappImg from '../../styles/images/redesSociais/whatsapp.svg'
import Instagram from '../../styles/images/redesSociais/instagram.svg'
import Facebook from '../../styles/images/redesSociais/Facebook.svg'
import Linkedin from '../../styles/images/redesSociais/linkedin.svg'

export default function () {
  return (
    <Cont>
      <div className='info'>
                <h1 className='init'>Deseja Entrar em Contato Comigo ?</h1>
        <p>Você pode preencher esse Formulario ou Falar comigo nas redes sociais</p> 
    <ul className='div-redes-ul'>
              <li><p className='img'><a className='link-href' href="https://wa.me/5581986384447?text=Ol%C3%A1+gostaria+da+saber+um+pouco+do+seu+trabalho%21"> <img className='img-link' src={WathsappImg} alt=""/></a></p></li>
              <li><p className='img'><a className='link-href' href='https://www.instagram.com/matheus_lisbon/'> <img className='img-link' src={Instagram} alt=""/></a></p></li>
              <li><p className='img'><a className='link-href' href="https://www.facebook.com/profile.php?id=100009610324999"> <img className='img-link' src={Facebook} alt=""/></a> </p></li>
              <li><p className='img'><a className='link-href' href="https://www.linkedin.com/in/matheus-eduardo-a83a8a1a7/"> <img className='img-link' src={Linkedin} alt=""/></a></p></li>
    </ul>        
      </div>
        <section className='contato'>
          <div className="cont-form cont">
                      <h3>Formulario</h3>
            <form action="">  

              <p>Seu Nome:  </p> <input type="text" placeholder='Ex:Matheus'/>
              <p>Seu Email:</p> <input type="email" placeholder='Ex:matheus@gmail.com'/>
              <p>Seu Telefone: </p><input type="Tel" placeholder='81 9999-9999'/>
              <p>Assunto: </p><input type="text" placeholder='Criar um E-commerce...'/> 
<br/><button>Enviar</button>
            </form>
                        
          </div>

          <div className="cont-redes cont">
            <h3>Redes</h3>
             <p>
              Aqui estão algumas das minhas redes sociais onde você pode falar comigo!
            </p>  
             <p className='waths'><a className='link-href' href="https://wa.me/5581986384447?text=Ol%C3%A1+gostaria+da+saber+um+pouco+do+seu+trabalho%21"> <img className='img-link' src={WathsappImg} alt=""/><label htmlFor="">Wathsapp -</label>  (81) 98638-4447</a></p>
             <p className='insta'><a className='link-href' href='https://www.instagram.com/matheus_lisbon/'> <img className='img-link' src={Instagram} alt=""/> <label htmlFor="">Instagram -</label> @matheus_lisbon</a></p>
             <p className='face'><a className='link-href' href="https://www.facebook.com/profile.php?id=100009610324999"> <img className='img-link' src={Facebook} alt=""/> <label htmlFor="">Facebook -</label> Matheus Lisbon</a> </p>
             <p className='linkedin'><a className='link-href' href="https://www.linkedin.com/in/matheus-eduardo-a83a8a1a7/"> <img className='img-link' src={Linkedin} alt=""/> <label htmlFor>Linkedin -</label> Matheus Eduardo</a></p>
          </div>
        </section>


    </Cont>
  )
}

