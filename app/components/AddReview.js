import React from 'react';
import axios from 'axios';


export default class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stars: 1, content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('~~~change handled!');
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    axios.post(`/api/reviews/addReview/${this.props.selectedItem.id}`, this.state)
    .then(function(res) {
      console.log(res.data);
    })
}

  render() {
    console.log('_____THIS.STATE: ', this.state);
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

