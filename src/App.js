import React from 'react'
import './sass/main.scss'
import styled from 'styled-components'

const HeaderTextWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const HeaderText = styled.h1`
  > span {
    display: block;
    color: #fff;
    backface-visibility: hidden;
  }

  > span:first-of-type {
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;
  }

  > span:last-of-type {
    
  }
`

const HeaderLogo = styled.div`

`

function App() {
  return (
    <div className="App">
      <header class="header">
        <div className="header__logo-box">
          <img className="header__logo" src="/img/logo-white.png" alt="logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
    </div>
  )
}

export default App
