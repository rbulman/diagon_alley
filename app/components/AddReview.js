import React, { Component } from 'react';


class AddReview extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //this.state.value;
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="Hello!"
          value={this.state.value}
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default AddReview;