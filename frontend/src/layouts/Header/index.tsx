import { Container} from "./style";
import { Link } from 'react-router-dom';
import { ButtonStyle, ButtonContent } from './ButtonSpecs';

interface HeaderProps {
  header: ButtonContent[]
}

const getStyle = (style: ButtonStyle)=> { 
  switch (style) {
    case ButtonStyle.TransparentBg:
        return 'transparent-bg-btn'
    case ButtonStyle.SolidBorder:
        return 'solid-border-btn'
    case ButtonStyle.SolidBg:
        return 'solid-bg-btn'
  }
}

export function Header({ header }: HeaderProps){

  return(
    <Container>
      <div className="links">
        {header.map((content: ButtonContent)=> {
          return <Link style={{ textDecoration: "none" }} key={content.linkPath} to={content.linkPath} className={getStyle(content.buttonStyle)}>{content.textContent}</Link>
        })}
      </div>
    </Container>
  )
}