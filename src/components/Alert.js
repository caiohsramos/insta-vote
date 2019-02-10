import React from 'react'
import Alert from 'react-bootstrap/Alert'


export default ({ message, type, setMessage, dismissible }) => (
  <>
    {message &&
      <Alert className='sticky-top' dismissible={dismissible} variant={type} onClose={() => { setMessage({ message: '' }) }}>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>}
  </>
)