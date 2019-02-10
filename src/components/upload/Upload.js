import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Grid from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { newPost } from '../../requests'
import InstagramEmbed from 'react-instagram-embed'
import Alert from '../Alert'

const InputUrl = ({ url, setUrl, ...props }) => (
  <>
    <Form.Group>
      <Form.Label>Instagram's URL</Form.Label>
      <Form.Control
        type='text'
        placeholder="Paste URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        {...props} />
    </Form.Group>
  </>
)

const onSubmit = (e, url, setLoading, setSuccess, setAlert) => {
  e.preventDefault()
  setLoading(true)
  sendPost(url, setLoading, setSuccess, setAlert)
}

const sendPost = async (url, setLoading, setSuccess, setAlert) => {
  try {
    await newPost(url)
    setSuccess(true)
    setAlert({ message: 'Post included!', type: 'success' })
  } catch (e) {
    if (e.response.status === 404) {
      setAlert({ message: 'Invalid link!', type: 'danger' })
    } else if (e.response.status === 400) {
      setAlert({ message: 'Post already exists!', type: 'danger' })
    } else setAlert({ message: 'Ops, something went wrong!', type: 'danger' })
  } finally {
    setLoading(false)
  }
}

export default () => {
  const [url, setUrl] = useState('')
  const [alert, setAlert] = useState({ message: '' })
  const [isLoading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  return (
    <Grid>
      <Alert message={alert.message} type={alert.type} setMessage={setAlert} dismissible />
      <Form>
        <InputUrl url={url} setUrl={setUrl} readOnly={success} />
        {success ||
          <Button
            type='submit'
            onClick={(e) => onSubmit(e, url, setLoading, setSuccess, setAlert)}
            disabled={isLoading}>
            {!isLoading ? "Send" : "Sending..."}
          </Button>
        }
      </Form>
      {success &&
        <InstagramEmbed url={url} />
      }
    </Grid>
  )
}