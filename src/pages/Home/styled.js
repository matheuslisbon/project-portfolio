import styled from 'styled-components'

const Desc = styled.div`
  color: ${props => props.theme.colors.text};
  width:96%;
  margin:80px auto;
  div.grid {
    background:${props => props.theme.colors.background};
    padding: 10px;
    border-radius:8px;
    border:2px solid ${props=> props.theme.colors.decorate};
  }
  div.center{
    display:flex;
    align-items:center;
    justify-content:space-between;
    color: ${props=> props.theme.colors.decorate};
    margin-bottom:10px;
  }
  .logo{
    color: ${props=>props.theme.colors.text};
    font-size: 6.5rem;
    font-family: 'Sansita Swashed', cursive;
    margin: 0 0 15px 20px;
    border-bottom: 4px solid ${props=> props.theme.colors.decorate};

    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

  }
  ul.redes{
    margin-right:15px;
  }
  .web{
    font-size: 3rem;
    font-family: 'Sansita Swashed';
    color: ${props=> props.theme.colors.decorate};
    margin-left:18px;
    
  }
  section{
    border:1px solid ${props => props.theme.colors.decorate};
    border-radius: 8px;
    padding:10px;
  }
  img.perfil{
    width:140px;
    border-radius:10%;
    margin:10px 25px;
    padding: 3px;
    border: 3px solid ${props => props.theme.colors.decorate};
  }
  .div-redes-ul{
    display:flex;
  }
  .div-redes-tech{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
  }
  .p-ul{
    font-size: 1.8rem;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    font-family: 'Sansita Swashed', cursive;
  }
  img.img-link{
    height:40px;
    width:50px;
  }
  img.img-tech{
    height:40px;
    width:40px;
    border-radius: 8px;
  }
  div.portfolio{

    background:${props => props.theme.colors.background};
    margin: 20px 0;
    border:1px solid ${props=> props.theme.colors.decorate};
    border-radius:10px;
  }
  div.portfolio p.port{
    display:flex;
    justify-content:center;
    font-family:'Ubuntu';
    font-size: 60px;
    padding:10px 0 0 0;
    border-bottom: 3px groove ${props => props.theme.colors.decorate};
  }
  div.portfolio div.items-port{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    font-family: 'Ubuntu', sans-serif;
  }
  div.portfolio div.items-port div {
    border:1px solid ${props=> props.theme.colors.decorate};
    margin:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:10px;
    border-radius:6px;
    font-family: 'Ubuntu', sans-serif;
  }
  div.portfolio div.items-port div img{
    height:150px;
    width: 266px;
    border-radius:12px;
    padding: 10px 0;
  }
  .intro{
    font-family: 'Ubuntu', sans-serif;
    font-size:1.6rem;
  }
  label,
  .bem-vindo{
    color: ${props => props.theme.colors.decorate};
    font-family: Ubuntu;
    font-weight: bold;

  }
  a.port-link{
    color: ${props => props.theme.decorate};
    border-bottom: 1px dashed ${props => props.theme.colors.decorate} ;
  }
  @media(max-width : 980px){
    div.portfolio div.items-port {
      display:grid;
      grid-template-columns: 1fr 1fr;
    }
    div.center{
      display: grid;
      grid-template-columns: 2fr 1fr ;
    }
  }
  @media(max-width : 680px){
    div.portfolio div.items-port {
      display:grid;
      grid-template-columns: 1fr;
    }
    div.center{
      display: flex;
      flex-direction:column;
    }
  }
  @media(max-width : 550px){
    .logo{
      font-size: 4.5rem;
    }
  }

`

export default Desc