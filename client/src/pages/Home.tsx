import styled from "styled-components"

import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import PortfolioCard from "../components/PortfolioCard"
import Footer from "../components/Footer"
import projects from "../../data.json"
import { ChangeEvent, useState } from "react"

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

const PasswordScreen = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background-color: white;
`

const PasswordInput = styled.input`

`

const Home = () => {

  const [password, setPassword] = useState("")
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)

  const Portfolio = projects.map((project, index) => {
    const { thumbnail, title, stack, description, url } = project

    return (
      <PortfolioCard key={index} thumbnail={thumbnail} title={title} tech={stack} desc={description} url={url} />
    )
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  
  const handleButton = (e: any) => {
    e.preventDefault()
    if (password === "Folsom") {
      setIsPasswordCorrect(true)
    }
  }

  return (
    <>
      <PasswordScreen style={{ display: `${isPasswordCorrect ? "none" : "block"}`}}>
        Password: <PasswordInput type="text" onChange={(e) => handleChange(e)} value={password}/>
        <PasswordInput type="button" value={"Enter"} onClick={(e) => handleButton(e)}/>
      </PasswordScreen>
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
    </>
  )
}

export default Home