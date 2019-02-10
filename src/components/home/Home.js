import React from 'react'
import Jumbo from 'react-bootstrap/Jumbotron'
import Grid from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  margin-right: 15px;
`

export default () => (
  <Grid>
    <Jumbo>
      <h1>Insta Vote</h1>
      <p>
        Upload your favorite Instagram posts, and watch them battle others on their way to the top!
      </p>
      <p>
        <Link to='/upload'>
          <StyledButton variant="success">Upload</StyledButton>
        </Link>
        <Link to='/feed'>
          <StyledButton variant="primary">Feed</StyledButton>
        </Link>
        <Link to='/battle'>
          <Button variant="primary">Battle</Button>
        </Link>
      </p>
    </Jumbo>
  </Grid>
)