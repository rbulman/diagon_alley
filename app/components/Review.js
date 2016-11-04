import React, { Component } from 'react';

export default class Review extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                {this.props.reviews.map(function(review) {
                    return (
                        <div id={review.id}>
                                <h3>{review.stars}</h3>
                                <p>{review.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}