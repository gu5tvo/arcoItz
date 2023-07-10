import { Container } from "./style";
import { Link } from "react-router-dom";
import React from 'react'

interface ManageButtonsProps {
  image: string,
  text: string,
  path: string,
  className?: string
}

export default function ManageButtons({ image, text, path, className } : ManageButtonsProps) {

  return (
    <Link to={ path } className={className} style={ { textDecoration: 'none', color: '#1a1a1a'} }>
      <Container className="manage-btn">
        <img src={image}/>
        {text}
      </Container>
    </Link>
  )
}