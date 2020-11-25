import React from 'react'
import './sass/main.scss'
import styled, { keyframes } from 'styled-components'

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px) scale(1, -1);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const HeaderWrapper = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 131, 0.8)
    ),
    url(/img/hero.jpg);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
`

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

    animation: ${moveInLeft} 2s ease-out;
    /* animation-duration: 1s; */
    /* animation-timing-function: ease-out; */
    /* animation-iteration-count: 3; */
    /* animation-delay: 3s; */
  }

  > span:last-of-type {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 17.2px;
    animation: ${moveInRight} 2s ease-out;
  }
`

const HeaderLogo = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  > img {
    height: 35px;
  }
`

function App() {
  return (
    <div className="App">
      <HeaderWrapper>
        <HeaderLogo>
          <img src={`/img/logo-white.png`} alt="logo" />
        </HeaderLogo>
        <HeaderTextWrapper>
          <HeaderText>
            <span>OUTDOORS</span>
            <span>IS WHERE LIFE HAPPENS</span>
          </HeaderText>
        </HeaderTextWrapper>
      </HeaderWrapper>
    </div>
  )
}

export default App
