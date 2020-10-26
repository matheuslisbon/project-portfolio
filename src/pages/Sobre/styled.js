import styled from 'styled-components'

const Index = styled.div`
line-height:1.3;
  color: ${props=> props.theme.colors.text};
  font-size:1.4rem;
  width: 96%;
  margin: 80px auto; 
  border-radius:8px;
  div{
    width: 96%;
    margin: 20px auto;
    background: ${props=> props.theme.colors.background};
    padding: 20px;
    border-radius:8px;
    border:1px solid ${props=> props.theme.colors.decorate};

  }
  h1{
    color: ${props => props.theme.colors.decorate};
    font-family: 'Sansita Swashed', cursive;
  }
  label{
    color: ${props => props.theme.colors.decorate};
    font-weight:bold;
    font-family: Ubuntu;

  }
`

export default Index