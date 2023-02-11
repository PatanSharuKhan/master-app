import {Component} from 'react'
import {
  Container,
  H,
  Header,
  Button,
  InputContainer,
  Input,
  P,
  Ol,
} from './styledComponents'

class Master extends Component {
  state = {isInputEmpty: false, question: '', solution: ''}

  componentDidMount = () => {
    const userDetails = JSON.parse(localStorage.getItem('user_details'))
    if (userDetails === undefined || userDetails.role === 'student') {
      const {history} = this.props
      history.replace('/')
    }
  }

  clearList = () => {
    localStorage.setItem(
      'masterItems',
      JSON.stringify([
        {question: 'No data Available', value: 'Contact the master!'},
      ]),
    )
  }

  changeInput = event => {
    this.setState({question: event.target.value, isInputEmpty: false})
  }

  removePermission = () => {
    localStorage.removeItem('user_details')
    const {history} = this.props
    history.replace('/')
  }

  resolveSolution = () => {
    const {question, solution} = this.state
    let threeWordsWithSpace = ''
    let each
    // eslint-disable-next-line no-restricted-syntax
    for (each of question) {
      if (each === '(' || each === ')') {
        threeWordsWithSpace += ' '
      } else {
        threeWordsWithSpace += each
      }
    }
    threeWordsWithSpace = threeWordsWithSpace.trim()
    const wordsLst = threeWordsWithSpace.split(' ')
    if (wordsLst.length === 3) {
      const nums = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
      }
      let value = 0
      switch (wordsLst[1]) {
        case 'plus':
          value = nums[wordsLst[0]] + nums[wordsLst[2]]
          break
        case 'minus':
          value = nums[wordsLst[0]] - nums[wordsLst[2]]
          break
        case 'times':
          value = nums[wordsLst[0]] * nums[wordsLst[2]]
          break
        case 'divided_by':
          value = nums[wordsLst[0]] / nums[wordsLst[2]]
          break
        default:
          this.setState({solution: 'invalid input'})
      }
      localStorage.setItem(
        'masterItems',
        JSON.stringify([{question, value}, ...solution]),
      )
      this.setState({
        question: '',
        solution: [{question, value}, ...solution],
      })
    } else {
      this.setState({isInputEmpty: true})
    }
  }

  solve = () => {
    const {question} = this.state
    if (question === '') {
      this.setState({isInputEmpty: true})
    } else {
      this.resolveSolution()
    }
  }

  render() {
    const {isInputEmpty, question} = this.state
    return (
      <Container>
        <Header>
          <H>Hello! Master, You Say I do</H>
          <Button type="button" onClick={this.removePermission}>
            Logout
          </Button>
        </Header>
        <InputContainer>
          <Input
            type="text"
            placeholder="Ex.one(plus(one()))"
            onChange={this.changeInput}
            value={question}
          />
          <Button type="button" onClick={this.solve}>
            Add
          </Button>
          <Button type="button" onClick={this.clearList}>
            Clear
          </Button>
        </InputContainer>
        {isInputEmpty && <P>*Invalid Input</P>}

        <Ol>
          <h1>Note</h1>
          <li>Use lower case letters</li>
          <li>
            If there is no error when clicked on add , then consider that the
            item have been added to list
          </li>
          <li>
            <b>Ex:-</b> seven(minus(one()))
          </li>
        </Ol>
      </Container>
    )
  }
}

export default Master
