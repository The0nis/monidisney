import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

function Header() {
  return (
    <Nav>
      <Link to={'/'}>
        <Logo src="/images/logo.svg" id='logo'/>
      </Link>
      
      <NavMenu>
        <Link to={'/'}>
            <a>
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>
          </Link>

        <a href="#move">
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>

        <a href="#move">
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>

        <a href="#move">
          <img src="/images/original-icon.svg" />
          <span>ORIGINAL</span>
        </a>

          <a href="#move">
            <img src="/images/movie-icon.svg" />
            <span>MOVIES</span>
          </a>

        <a href="#move">
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>

      </NavMenu>
      <Link to={'/login'}>
        <UserImg src='/images/me.jpg'/>
      </Link>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 6px;
  overflow-x: hidden;
`


const Logo = styled.img`
  width: 80px;
`

const NavMenu =  styled.div`
  display: flex;
  flex: 1;
  marging-left: 25px;
  align-items: center;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    

    img{
      height: 20px;
    }

    span{
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scale(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }

    @media (max-width: 765px) {
      display: none;

    }
   
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`