import { Container } from "./style";
import ManageButtonsProps from "../../utils/Interfaces/ManageButtonsProps";
import { Link } from "react-router-dom";

export function ManageButtons({ Image, Text, Path } : ManageButtonsProps) {

  return (
    <Link to={ Path } style={ { textDecoration: 'none', color: '#1a1a1a'} }>
      <Container className="manage-btn">
        <img src={ Image }/>
        {Text}
      </Container>
    </Link>
  )
}