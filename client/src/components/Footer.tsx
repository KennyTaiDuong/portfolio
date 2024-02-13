import styled from "styled-components";

import LinkedIn from "../assets/logo/linkedin.png"
import Gmail from "../assets/logo/gmail.png"
import GitHub from "../assets/logo/github.png"
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 2.5rem;
  background-color: rgb(21, 21, 21);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: auto;
`

const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  max-width: 70rem;
  flex-wrap: wrap;
`

const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  gap: 0.25rem;
  color: rgb(94, 94, 94);
`

const Social = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const SocialIcon = styled.img`
  width: 2rem;
`

const SocialContent = styled.p`
  color: rgb(94, 94, 94);
`

const WhiteText = styled.span`
  color: white;
`

const Footer = () => {
  return (
    <Container>
      <SocialsContainer>
        <Social to={"mailto:kennyduong537@gmail.com"}>
          <SocialIcon src={Gmail} />
          <SocialContent>
            <WhiteText>kennyduong537</WhiteText>
            @gmail.com
          </SocialContent>
        </Social>
        <Social to={"https://www.linkedin.com/in/kenny-duong-086b5321a/"}>
          <SocialIcon src={LinkedIn} />
          <SocialContent>
            linkedin.com/in/
            <WhiteText>kenny-duong-086b5321a</WhiteText>
            /
          </SocialContent>
        </Social>
        <Social to={"https://github.com/KennyTaiDuong"}>
          <SocialIcon src={GitHub} />
          <SocialContent>
            github.com/
            <WhiteText>KennyTaiDuong</WhiteText>
          </SocialContent>
        </Social>
      </SocialsContainer>
      <CopyrightContainer>
        Copyright &#169; 2024 ⋅ 
        <WhiteText>Kenny Duong</WhiteText>
      </CopyrightContainer>
    </Container>
  )
}

export default Footer