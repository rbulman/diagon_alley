import React, { Component } from 'react';

export default class Review extends React.Component {

    constructor(props) {
        super(props);
        this.reviews = []
    }

    // componentDidMount() {
    //     //this.props.getReviews()
    //     let selectedItem = this.props.selectedItem
    //     fetch(`/api/reviews/${selectedItem.id}`)
    //     .then(res => res.json())
    //     .then(reviews => {
    //         this.reviews = reviews
    //     })
    // }
    
    

    render() {
        const fakeReview = [{ stars: 5,
        content: 'Great product! My wife Debbie and I use this to prank the local schoolchildren. Would recommend.',
        item_id: 1 }];

        // console.log("this.reviews: ", this.reviews)

        return (
            <div>
                {fakeReview.map(function(review) {
                    return (
                        <div id={review.id}>
                                <h4>{review.stars}</h4>
                                <p>{review.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}