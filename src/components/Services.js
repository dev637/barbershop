import React from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ServicesStyles = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 760px) {
    height: 100%;
    flex-direction: column-reverse;
  }

  @media (min-width: 761px) {
    min-height: 100vh;
  }
`

const ServicesContainerStyles = styled.div`
  position: relative;
  width: 50%;
  background: white;
  margin: 0 auto;
  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  ::before {
    display: none;
  }

  @media (max-width: 760px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0;

    ::before {
      display: block;
      position: absolute;
      top: -1px;
      content: '';
      width: 100%;
      border-top: 3px solid white;
      z-index: 1;
    }
  }
`

const ServicesSectionHeader = styled(SectionHeader)`
  max-width: 450px;
  margin-left: 4rem;
  margin-right: 2rem;

  p {
    text-align: center;
  }

  @media (max-width: 760px) {
    margin: 0 auto;
  }
`

const ServicesBackgroundStyles = styled(Img)`
  width: 50%;
  filter: saturate(0);

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient(
      ellipse closest-side,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 100%
    );
    transition: all 0.5s;

    width: 100%;
    height: 100%;
    border-left: 1px solid white;
  }

  @media (max-width: 760px) {
    width: 100%;
    height: 300px;

    ::after {
      border-left: none;
    }
  }
`

const ServicesMenuStyles = styled.ul`
  font-family: 'Roboto';
  font-size: 1.5em;
  color: black;
  list-style: none;
  padding-top: 1em;
  width: 100%;
  margin: 0 auto;

  span:first-child {
    padding-right: 0.33em;
    background: white;
  }

  span + span {
    float: right;
    padding-left: 0.33em;
    background: white;
    font-weight: 600;
  }

  @media (min-width: 1130px) {
    width: 411px;
  }
`

const ServicesMenuItemStyles = styled.li`
  :before {
    float: left;
    width: 0;
    white-space: nowrap;
    color: #af9300;
    font-size: 1em;
    font-weight: 600;
    content: '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . ';
  }

  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 760px) {
    max-width: 310px;
  }

  @media (min-width: 761px) {
    margin-bottom: calc((1vw - 7.61px) * 6.829);
  }

  @media (min-width: 1130px) {
    margin-bottom: 1.2em;
  }
`

const Menu = [
  { service: 'Cleanup', cost: '$15' },
  { service: 'Cut & Beard', cost: '$25' },
  { service: 'Style & Beard', cost: '$27' },
  { service: 'Cut & Shave', cost: '$35' },
  { service: 'Hot Towel Shave', cost: '$20' },
]

const Services = () => (
  <StaticQuery
    query={graphql`
      query ServicesBgQuery {
        file(relativePath: { eq: "services.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ServicesStyles id="services">
        <ServicesContainerStyles>
          <ServicesSectionHeader
            headerTitle="Services"
            content="Culpa ipsum nostrud mollit velit eu adipisicing. Nisi culpa cillum tempor culpa sit amet laboris."
          >
            <ServicesMenuStyles>
              {Menu.map(x => (
                <ServicesMenuItemStyles key={x.service}>
                  <span>{x.service}</span>
                  <span>{x.cost}</span>
                </ServicesMenuItemStyles>
              ))}
            </ServicesMenuStyles>
          </ServicesSectionHeader>
        </ServicesContainerStyles>
        <ServicesBackgroundStyles fluid={data.file.childImageSharp.fluid} />
      </ServicesStyles>
    )}
  />
)

export default Services
