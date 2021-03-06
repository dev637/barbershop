import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import 'hamburgers/dist/hamburgers.css'

const NavbarStyles = styled.nav`
  z-index: 99;
  position: fixed;
  top: 0;
  color: white;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;

  ul {
    padding: 1.5rem 0;
    width: 1280px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    transition: all 0.5s ease;
  }

  li {
    transition: all 0.5s ease;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .scrollSpy {
    box-shadow: 0 3px 0px #af9300;
  }

  button {
    position: absolute;
    top: 0rem;
    left: 0rem;
    background: #282828;
    height: 45px;
    padding: 0px 5px;
    z-index: 3;
    display: none;

    .hamburger-box .hamburger-inner {
      &,
      ::before,
      ::after {
        background: #af9300;
      }
    }
  }

  ${props =>
    props.navBarBg &&
    css`
      @media (min-width: 761px) {
        background-color: rgba(40, 40, 40, 0.9);

        ul {
          width: 980px;
          padding: 0.5rem 0;
        }
      }
    `};

  @media (max-width: 760px) {
    background-color: rgba(40, 40, 40, 0.9);
    height: ${props => (props.menuIcon ? '200px' : '45px')};

    ul {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 45px 0 0 0;
      overflow: hidden;

      li {
        font-size: 20px;
        margin: 2px 0;
        padding: 0 7px;
        width: 100%;

        a {
          display: block;
          text-align: center;
        }

        :hover {
          background-color: rgba(80, 80, 80, 0.9);
        }
      }

      .scrollSpy {
        background: #af9300;
      }
    }

    button {
      display: block;
    }
    box-shadow: 0 0 5px black;
  }
`

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navBarBg: false,
      navBreak: '',
      menuIcon: false,
    }

    this.navBarCheck = this.navBarCheck.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  componentDidMount() {
    let home = document.querySelector('#home')

    this.setState({ navBreak: home.offsetHeight * 0.33 })

    window.addEventListener('scroll', this.navBarCheck)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navBarCheck)
  }

  navBarCheck() {
    const navBarBg = window.scrollY > this.state.navBreak
    if (navBarBg !== this.state.navBarBg) {
      this.setState({ navBarBg })
    }
  }

  handleMenuClick() {
    this.setState({ menuIcon: !this.state.menuIcon })
  }

  render() {
    const { navBarBg, menuIcon } = this.state

    return (
      <NavbarStyles navBarBg={navBarBg} menuIcon={menuIcon}>
        <button
          className={`hamburger hamburger--slider ${
            menuIcon ? 'is-active' : ''
          }`}
          type="button"
          aria-label="menubutton"
          onClick={this.handleMenuClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <Scrollspy
          items={['home', 'services', 'about', 'gallery', 'contact']}
          currentClassName="scrollSpy"
        >
          <li>
            <AnchorLink href="#home">HOME</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#services">SERVICES</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">OUR STORY</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#gallery">GALLERY</AnchorLink>
          </li>
          <li>
            <AnchorLink offset="-1" href="#contact">
              CONTACT
            </AnchorLink>
          </li>
        </Scrollspy>
      </NavbarStyles>
    )
  }
}

Navbar.propTypes = {}

export default Navbar
