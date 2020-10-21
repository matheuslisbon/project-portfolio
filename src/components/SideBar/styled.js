import styled from 'styled-components'

const Index = styled.div`
  color: ${props=>props.theme.colors.text};
  .side-bar {
    position: fixed;
    height: 10% !important;
    display: flex;
    flex-direction: column;
    border-right: 5px solid;
    border-top: 5px solid;
    border-bottom: 5px solid;
    border-radius:0 14px 14px 0;
    border-color: rgba(64, 194, 133, 0.693);
    background-image: url('https://th.bing.com/th/id/OIP.TsomZRSldMeuJQrUuXiCGAHaEo?pid=Api&rs=1');
    transition: 0.8s ease;
}
.content{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top: 25px;
}
.link-nav{
  color:${props=> props.theme.colors.text};
  border:3px solid ${props => props.theme.colors.decorate};
  padding: 10px;
  border-radius: 8px ;
  font-weight:bold;
  text-decoration:none;
  background: ${props => props.theme.colors.background};
  font-weight: bold;
  transition: 0.4s;
}
.toggle-menu {
    height: 50px;
    border-top-right-radius: 8rem;
    border-bottom-right-radius: 7rem;
    width: 15px;
    position: absolute;
    outline: none;
    z-index: 1;
    background-color:${props => props.theme.colors.text};
    border-color: rgba(64, 194, 133, 0.693);
    border-left: 0;
}
 ul {
  display:flex;
  flex-direction: column;
 }
 ul li{
   margin: 15px;
 }
 .link-nav:hover{
   background: ${props=> props.theme.colors.text};
   color:${props=> props.theme.colors.background};
 }
`

export default Index