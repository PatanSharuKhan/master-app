import {Component} from 'react'
import {Container, Form, H, Label, Input, Button, P} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', isError: false}

  verifyUser = event => {
    event.preventDefault()
    const userDetails = JSON.parse(localStorage.getItem('user_details'))
    if (userDetails === null) {
      this.setState({isError: true})
    } else {
      const {username, password} = this.state
      if (username !== userDetails.username) {
        this.setState({isError: true})
      } else if (password !== userDetails.password) {
        this.setState({isError: true})
      } else {
        const {history} = this.props
        history.replace(`/${userDetails.role}`)
      }
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value, isError: false})
  }

  changePassword = event => {
    this.setState({password: event.target.value, isError: false})
  }

  render() {
    const {isError} = this.state
    return (
      <Container>
        <Form onSubmit={this.verifyUser}>
          <H>Login</H>
          <Label htmlFor="username">USERNAME</Label>
          <Input
            type="text"
            id="username"
            placeholder="Username"
            onChange={this.changeUsername}
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            onChange={this.changePassword}
          />
          <Button type="submit">Login</Button>
          {isError && <P>*Invalid User Entry</P>}
        </Form>
      </Container>
    )
  }
}

export default Login
