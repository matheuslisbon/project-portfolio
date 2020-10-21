import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Contato from './pages/Contato/index'

import Home from './pages/Home/index'

import Sobre from './pages/Sobre/index'

export default function Routes(){
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/contato' component={Contato} />
      <Route path='/sobre' component={Sobre} />
    </Switch>
  )

}