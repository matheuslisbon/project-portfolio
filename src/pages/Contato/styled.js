import styled from 'styled-components'

const Cont = styled.div`
  color: ${props=> props.theme.colors.decorate};
  width: 96%;
  margin: 80px auto;
  padding: 10px;
  border-radius:8px;
  font-weight:bold;
  .info{
      display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border-bottom:2px solid ${props=> props.theme.colors.decorate};
  }
  .init{
    color:${props=> props.theme.colors.text};
  }

  background: ${props=> props.theme.colors.background};
  border:2px solid ${props=> props.theme.colors.decorate};
  .contato{
    display:grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
  margin: 0 auto;
  }
  .cont-form{
    border-right: 2px solid ${props => props.theme.colors.decorate};
    border-left: 2px solid ${props => props.theme.colors.decorate};
    border-bottom: 2px solid ${props => props.theme.colors.decorate};
    padding: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    color: ${props=> props.theme.colors.text};
  }
  .cont-form input {
    height:30px;
  }
  .cont-form button{
    background: ${props => props.theme.colors.decorate};
    border: none;
    color:white;
    height: 30px;
    width: 68px;
    font-weight:bold;
    font-size: 18px;
    margin-top: 10px;
    transition: 0.4s;
    cursor: pointer;
  }

  .cont-form button:hover{
    background: springgreen;
  }

  .cont-redes{
    border-right: 2px solid ${props => props.theme.colors.decorate};
    border-left: 2px solid ${props => props.theme.colors.decorate};
    border-bottom: 2px solid ${props => props.theme.colors.decorate};
    padding: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    color: ${props => props.theme.colors.text};
  }
  .waths a{
    color: white;
    background: #00ff7f;
    height: 35px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    width: 270px;
    font-weight:bold;
    border-radius: 8px;
    list-style:none;
    transition:0.2s;
  }
  .waths a:hover{
    background: #00ff7fcc;
  }
  .img-link{
    height: 30px;
  }
  .link-href{
    text-decoration:none;
  }
  .waths a{
    color: white;
    background: #00ff7f;
    height: 35px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    width: 270px;
    font-weight:bold;
    border-radius: 8px;
    list-style:none;
    transition:0.2s;
    margin-top:10px;
  }
  .waths a:hover{
    background: #00ff7fcc;
  }
  .insta a{
    color: white;
    background: #F20C49;
    margin-top:10px;
    height: 35px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    width: 270px;
    font-weight:bold;
    border-radius: 8px;
    list-style:none;
    transition:0.2s;
  }
  .insta a:hover{
    background: #F20C49cc;
  }
  .face a{
    margin-top:10px;
    color: white;
    background: #0788D9cc;
    height: 35px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    width: 270px;
    font-weight:bold;
    border-radius: 8px;
    list-style:none;
    transition:0.2s;
  }
  .face a:hover{
    background: #0788D9;
  }
  .linkedin a{
    color: #0788D9;
    background: white;
    height: 35px;
    margin-top:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    width: 270px;
    font-weight:bold;
    border-radius: 8px;
    list-style:none;
    transition:0.2s;
    border: 1px solid #0788D9;
  }
  .linkedin a:hover{
    color: #04B2D9cc;
  }
  .div-redes-ul{
    display:flex;
  }
  .div-redes-ul li {
    margin:10px;
  }
  @media(max-width:700px){
    .contato{
      display:flex;
      flex-direction: column;
    }
    .cont-redes a label{

      display:none;
      justify-content: initial;
      width: 56px;

    }
    .cont-redes a {
      width: 196px;
    }

  }


`
export default Cont