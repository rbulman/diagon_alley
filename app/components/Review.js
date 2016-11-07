import React, { Component } from 'react';

export default ({review}) => (
        <div id={review.id}>
            <h4>{new Array(review.stars).fill("★").join('')}</h4>
            <p>{review.content}</p>
        </div>
)




 