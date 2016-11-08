
import React from 'react';

export default class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stars: 1, content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    axios.post('/api/wherever', this.state)
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="Hello!"
          name="content"
          value={this.state.value}
          onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
