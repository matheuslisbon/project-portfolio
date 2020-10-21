import React, {useContext} from 'react'
import Navegacao from './styled'
import {ThemeContext} from 'styled-components'
import Switch from 'react-switch'
import {Link} from 'react-router-dom'

export default function(props){
  const {colors, title} = useContext(ThemeContext)
  return (
    <Navegacao>
      
      <Link to='/' className='logo-name'><h1>Matheus'DevS</h1></Link>

      <ul className='nav-links'>
        <li><Link className='link' to='/'>Home</Link></li>
         <li><Link className='link' to='/contato'>Contato</Link></li>
         <li><Link className='link' to='/sobre'>Sobre</Link></li>
      </ul>
<div className='togle'>  <p>{title}</p>
        <Switch 
        onChange={props.togleTheme}
        checked={title ==='dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
      handleDiameter={20}
      offColor={colors.black}
      onColor={colors.white}
      className='btn-theme'
      />
</div>


    </Navegacao>
  )
}