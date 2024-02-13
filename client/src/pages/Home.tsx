import styled from "styled-components"

import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import PortfolioCard from "../components/PortfolioCard"
import Footer from "../components/Footer"
import projects from "../../data.json"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const Content = styled.main`
  margin-top: 6.6875rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
`

const PortfolioContainer = styled.div`
  padding: 2.5rem;
  margin-bottom: 2.5rem;
  max-width: 70rem;
  background-color: rgb(230, 230, 230);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContainerLabel = styled.p`
  color: rgb(51, 51, 51); 
`

const Home = () => {

  const Portfolio = projects.map((project) => {
    const { thumbnail, title, stack, description, url } = project

    return (
      <PortfolioCard thumbnail={thumbnail} title={title} tech={stack} desc={description} url={url} />
    )
  })

  return (
    <Container>
      <Header/>
      <Content>
        <AboutMe />
      </Content>
      <PortfolioContainer id="projects">
        <ContainerLabel>Recent Work</ContainerLabel>
        {Portfolio}
      </PortfolioContainer>
      <Footer/>
    </Container>
  )
}

export default Home