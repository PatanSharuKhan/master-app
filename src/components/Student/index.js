import {Component} from 'react'
import {Container, Header, Button, H, Ul, Li} from './styledComponents'

class Student extends Component {
  componentDidMount = () => {
    const userDetails = JSON.parse(localStorage.getItem('user_details'))
    if (userDetails === undefined || userDetails.role === 'master') {
      const {history} = this.props
      history.replace('/login')
    }
  }

  removePermission = () => {
    localStorage.removeItem('user_details')
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const masterItems = JSON.parse(localStorage.getItem('masterItems'))
    console.log(masterItems)

    return (
      <Container>
        <Header>
          <H>Hello! Student</H>
          <Button type="button" onClick={this.removePermission}>
            Logout
          </Button>
        </Header>
        <Ul>
          {masterItems.map(each => (
            <Li>
              {each.question} = {each.value}
            </Li>
          ))}
        </Ul>
      </Container>
    )
  }
}

export default Student
