import {Link} from 'react-router-dom'
import {Container, Card, Button, HomeTitle} from './styledComponent'

const Home = () => (
  <Container>
    <HomeTitle>Master-Student-App</HomeTitle>
    <Card>
      <Link to="/login">
        <Button type="button">Login</Button>
      </Link>
      <Link to="/signup">
        <Button type="button">SignUp</Button>
      </Link>
    </Card>
  </Container>
)

export default Home
