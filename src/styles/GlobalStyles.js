import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: Roboto, sans-serif;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;

  }
  body{
    height:100vh;
    width: 100%;
    background-image: url('https://th.bing.com/th/id/OIP.TsomZRSldMeuJQrUuXiCGAHaEo?pid=Api&rs=1');
    color:${props =>props.theme.colors.secondary}
  }



`