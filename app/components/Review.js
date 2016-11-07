import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Review extends React.Component {

    constructor(props) {
        super();
    }
    
    render() {
        const starArray = function(starsInt) {
            let result = [];
            for(var i = 0; i < starsInt; i++) {
                result.push(i);
            }
            return result;
        }
        return (
            <div>
                {this.props.reviews.map(function(review) {
                    return (
                        <div id={review.id}>
                                <h4>{starArray(review.stars).map(function(star) {
                                    return (
                                            <span class="glyphicon glyphicon-star"></span>
                                    )
                                })}</h4>
                                <p>{review.content}</p>
                                <p><Link to="/addReview"> Add your review </Link></p>
                        </div>
                    )
                })}
            </div>
        )
    }
}