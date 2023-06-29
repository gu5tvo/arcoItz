import { Container } from "./style";
import { Link } from "react-router-dom";
import React from 'react'

interface ManageButtonsProps {
  image: string,
  text: string,
  path: string
}

export default function ManageButtons({ image, text, path } : ManageButtonsProps) {

  return (
    <Link to={ path } style={ { textDecoration: 'none', color: '#1a1a1a'} }>
      <Container className="manage-btn">
        <img src={image}/>
        {text}
      </Container>
    </Link>
  )
}