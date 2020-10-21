//import "./Sidebar.css";
import React from "react";
import Index from './styled'
import {Link} from 'react-router-dom'
export default function ({ width=120, height='60vh', children }){
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  return (
    <Index>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        ></button>
        <div className="content">
          <ul>
          <li> <Link className='link-nav' to='/'>Home</Link></li>
          <li><Link className='link-nav' to='/contato'>Contato</Link></li>
          <li><Link className='link-nav' to='/sobre'>Sobre</Link></li>
          </ul>

        </div>
      </div>
    </Index>
  );
};