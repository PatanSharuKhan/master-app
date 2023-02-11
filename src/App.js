import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {text: '', isEditMode: true}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  changeMode = () => {
    this.setState(prev => ({isEditMode: !prev.isEditMode}))
  }

  render() {
    const {text, isEditMode} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          {isEditMode && (
            <div className="edit-container">
              <input
                type="text"
                value={text}
                onChange={this.onChangeText}
                className="user-input"
              />
              <button type="button" className="btn" onClick={this.changeMode}>
                Save
              </button>
            </div>
          )}
          {!isEditMode && (
            <div className="view-container">
              <p>{text}</p>
              <button className="btn" type="button" onClick={this.changeMode}>
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default App
