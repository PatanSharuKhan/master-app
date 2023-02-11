import {Component} from 'react'
import {
  Container,
  Form,
  H,
  Label,
  Input,
  Button,
  P,
  Radio,
  RadioContainer,
} from './styledComponents'

class SignUp extends Component {
  state = {username: '', password: '', role: '', isError: false}

  updateDetails = event => {
    event.preventDefault()
    const {username, password, role} = this.state
    if (username === '') {
      this.setState({isError: true})
    } else if (password === '') {
      this.setState({isError: true})
    } else if (role === '') {
      this.setState({isError: true})
    } else {
      const userDetails = {username, password, role}
      localStorage.setItem('user_details', JSON.stringify(userDetails))
      const {history} = this.props
      history.replace('/login')
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value, isError: false})
  }

  changePassword = event => {
    this.setState({password: event.target.value, isError: false})
  }

  changeRole = event => {
    this.setState({role: event.target.id})
  }

  render() {
    const {isError} = this.state
    return (
      <Container>
        <Form onSubmit={this.updateDetails}>
          <H>Register Details</H>
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
            placeholder="Password"
            onChange={this.changePassword}
          />
          <RadioContainer>
            <Radio
              type="radio"
              name="role"
              id="master"
              onChange={this.changeRole}
            />
            <Label htmlFor="master">Master</Label>
            <Radio
              type="radio"
              name="role"
              id="student"
              onChange={this.changeRole}
            />
            <Label htmlFor="student">Student</Label>
          </RadioContainer>
          <Button type="submit">Submit</Button>
          {isError && <P>*Invalid Username/Password</P>}
        </Form>
      </Container>
    )
  }
}

export default SignUp
