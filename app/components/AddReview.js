import React from 'react';
import axios from 'axios';
// let userId;

export default class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stars: 5, content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    // userId = this.props.user.id;
    return axios.post(`/api/reviews/addReview/${this.props.selectedItem.id}/${this.props.user.id}`, this.state)
    .then(function(res) {
      console.log(res);
    })
    .then(function() {
      
    })
}

  render() {
    console.log('THIS.PROPS.SELECTEDITEM: ', this.props.selectedItem);
    return (
      <div>
        <input type="text"
          placeholder="Number of stars"
          name="stars"
          value={this.state.value}
          onChange={this.handleChange} />
        <input type="text"
          placeholder="Your review here"
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

