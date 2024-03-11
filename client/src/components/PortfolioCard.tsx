import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  text-decoration: none;
  color: black;
`

const Thumbnail = styled.img`
  width: 100%;
  max-width: 25rem;
`

const TextContent = styled.div`

`

const Title = styled.p`
  font-weight: 600;
`

const Subtitle = styled.p`
  color: rgb(146, 146, 146);
`

const Description = styled.p`

`

const PortfolioCard = ({ thumbnail, title, tech, desc, url }: any) => {
  return (
    <StyledNavLink to={url} target="_blank">
      <Thumbnail src={thumbnail} />
      <TextContent>
        <Title>{title}</Title>
        <Subtitle>{tech}</Subtitle>
        <Description>
          {desc}
        </Description>
      </TextContent>
    </StyledNavLink>
  )
}

export default PortfolioCard;