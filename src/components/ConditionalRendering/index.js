import {Component} from 'react'

import './index.css'

class ConditionalRendering extends Component {
  state = {
    savedText: false,
    inputText: '',
  }

  onChangeInputElement = event => {
    this.setState({inputText: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({savedText: !prevState.savedText}))
  }



  render() {
    const {savedText, inputText} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {savedText ? (
              <p className="input-text">{inputText}</p>
            ) : (
              <input
                value={inputText}
                onChange={this.onChangeInputElement}
                type="text"
                className="input-element"
              />
            )}
            <button type="button" className="button" onClick={this.onClickSave}>
              {savedText ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ConditionalRendering
