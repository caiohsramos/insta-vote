import React, { useEffect, useState } from 'react'
import Grid from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Instagram from 'react-instagram-embed'
import Alert from '../Alert'
import styled from 'styled-components'
import { getBattle, postBattle } from '../../requests'

const fetchBattle = async (setBattle) => {
  const { data } = await getBattle()
  setBattle(data)
}

const computeBattle = async (winner, looser, setStatus) => {
  await postBattle(winner, looser)
  setStatus(2)
}

const vote = (winner, looser, setStatus) => {
  setStatus(1)
  computeBattle(winner, looser, setStatus)
}

const BattleHeader = () => (
  <Row>
    <Col className='d-flex justify-content-center'>
      <h1>Vote!</h1>
    </Col>
  </Row>
)

const BattleItem = ({ url }) => (
  <Col>
    <Instagram url={url} maxWidth={320} />
  </Col>
)
const StyledButton = styled(Button)`
  margin: 15px;
`

const BattleButton = ({ text, onClick, status }) => (
  <Col className=' d-flex align-items-center justify-content-center'>
    <StyledButton size='lg' variant='info' onClick={onClick} disabled={status !== 0}>
      {text}
    </StyledButton>
  </Col>
)


const BattleDuo = ({ battle, vote, status }) => {
  return (
    <>
      <BattleHeader />
      <Row>
        <BattleItem url={battle[0].url} />
        <BattleButton
          text={battle[0].author}
          onClick={() => vote(battle[0].media_id, battle[1].media_id)}
          status={status} />
        <BattleButton
          text={battle[1].author}
          onClick={() => vote(battle[1].media_id, battle[0].media_id)}
          status={status} />
        <BattleItem url={battle[1].url} />
      </Row>
    </>
  )
}

export default () => {
  const [battle, setBattle] = useState([])
  const [status, setStatus] = useState(0)
  useEffect(() => {
    fetchBattle(setBattle)
  }, [])

  return (
    <Grid fluid>
      {status === 2 &&
        <Alert message='Vote computed! Refresh for another battle!' type='success' />}
      {battle.length ?
        <BattleDuo battle={battle} vote={(w, l) => vote(w, l, setStatus)} status={status} />
        : <h1>Loading...</h1>}
    </Grid>
  )
}