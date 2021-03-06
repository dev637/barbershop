import React from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  padding: 2rem 0 4rem;
  position: relative;
  background: #282828;
`

const FooterContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 650px) {
    max-width: 310px;
    justify-content: space-around;
  }
`

const FooterCopyStyles = styled.div`
  position: absolute;
  width: 100%;
  bottom: 3px;
  font-size: 12px;
  font-family: Roboto;
  color: #e3e3e3;
  text-align: center;
  line-height: 1.3;

  a {
    color: #e3e3e3;
  }

  @media (max-width: 650px) {
    font-size: 9px;
  }
`

const FooterSocialStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    margin-right: 1em;

    img {
      margin-bottom: 0;
      width: 24px;
      height: 24px;
      transition: all 0.2s;

      :hover {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 650px) {
    justify-content: flex-start;
    img {
      width: 18px;
      height: 18px;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <FooterContainerStyles>
        <SectionHeader footer headerTitle="Hours">
          <p>Mon to Fri: 9 am - 7 pm</p>
          <p>Sat: 10 am - 5 pm</p>
          <p>Sun: Closed</p>
        </SectionHeader>
        <SectionHeader footer headerTitle="Address">
          <p>652 Auburn Street</p>
          <p>Toronto, ON</p>
          <p>M5R 2J8</p>
        </SectionHeader>
        <SectionHeader footer headerTitle="Contact">
          <p>(416) 999 9991</p>
          <p>barbs@shop.com</p>
        </SectionHeader>
        <SectionHeader footer headerTitle="Social">
          <FooterSocialStyles>
            <a href="https://www.facebook.com">
              <img
                src="https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543676885/Barbershop/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="https://www.twitter.com">
              <img
                src="https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543676871/Barbershop/twitter.svg"
                alt="Twitter"
              />
            </a>
            <a href="https://www.instagram.com">
              <img
                src="https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543676871/Barbershop/instagram.svg"
                alt="Instagram"
              />
            </a>
          </FooterSocialStyles>
        </SectionHeader>
      </FooterContainerStyles>

      <FooterCopyStyles>
        Copyright © {new Date().getFullYear()} Devang Patel. All rights reserved. Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
        >
          CC 3.0 BY
        </a>
        {'. Vector dividers '}
        <a href="https://www.freepik.com/free-vector/dividers-collection-in-calligraphic-style_2382823.htm">
          Designed by Freepik
        </a>
      </FooterCopyStyles>
    </FooterStyles>
  )
}

export default Footer
