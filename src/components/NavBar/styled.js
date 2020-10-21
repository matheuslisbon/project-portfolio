import styled from 'styled-components'

const Navegacao = styled.div`
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.back};
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:fixed;
  padding:3px 10px;
  top: 0;
  width: 100%;
  border-bottom:2px solid ${props=>props.theme.colors.decorate};
  .togle{
    display:flex;
    border:2px solid ${props=>props.theme.colors.text};
    font-weight: bold;
    padding: 7px;
    border-radius: 4px;
  }
  
  .logo-name{
    color:${props=> props.theme.colors.text};
    font-family: 'Sansita Swashed', cursive;
    border-bottom: 3px solid ${props=> props.theme.colors.decorate};

border-bottom-left-radius: 1rem;
border-bottom-right-radius: 1rem;
  }
  h1{
    font-family:'Sansita Swashed';
  }
  ul{
    display:flex;
    font-weight:bold;
  }
  ul li {
    padding:5px;
    color: ${props => props.theme.colors.decorate};
  }
  .link{
    color: ${props => props.theme.colors.decorate};
    list-style:none;
    text-decoration:none;
    padding: 10px;
    transition: 0.4s; 
  }
  .link:hover{
    border: 2.5px solid ${props=> props.theme.colors.decorate};
  }
  @media(max-width:700px){
    .nav-links{
      display:none;
    }
  }

`

export default Navegacao