import React from 'react'
import { Container } from 'react-bootstrap'
import { Button} from "react-bootstrap"

const Home = () => {
  return (
    <Container>
        <h1>Welcome To the New Era</h1>
        <Button variant="primary" type='submit'>Get Started</Button>
    </Container>
  )
}

export default Home