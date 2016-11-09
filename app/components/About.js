import React, {Component} from 'react'
import TheMap from './GoogleMap.jsx'
import initMap from 'APP/map.js'

export default class About extends Component{
	componentDidMount(){
		console.log("component mounted")
		initMap();
	}
	render(){
		const dummy = "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg";
		return (
			<div>
				<h1>ABOUT US</h1>
				<div className="row" id="mission-statement">
					<div className="jumbotron">
						<h1>"I solemenly swear that I'm up to no good."</h1>
					</div>
				</div>
				<div className="row text-center" id="headshots">
					<div className="col-md-3 col-xs-6 headshot">
						<img src='/owl.jpg' className="profile img img-responsive img-circle"/>
						<h3>Owl Trainer</h3>
						<p><i>"The owls really trained ME..."</i></p>
					</div>
					<div className="col-md-3 col-xs-6 headshot">
						<img src="/orange.jpg" className="profile img img-responsive img-circle"/>
						<h3>Taste-Tester</h3>
						<p><i>"There was an incident."</i></p>
					</div>
					<div className="col-md-3 col-xs-6 headshot">
						<img src="/potions.jpg" className="profile img img-responsive img-circle"/>
						<h3>Potions Master</h3>
						<p><i>"Double, double toil and trouble."</i></p>
					</div>
					<div className="col-md-3 col-xs-6 headshot">
						<img src='/explosives.jpg' className="profile img img-responsive img-circle"/>
						<h3>Explosions Expert</h3>
						<p><i>"BOOM!"</i></p>
					</div>
					<div className="col-md-3 col-xs-6 headshot">
						<img src='/liz.jpg' className="profile img img-responsive img-circle"/>
						<h3>HEAD MUGWHUMP</h3>
						<p><i>"I'm the boss!"</i></p>
					</div>
				</div>

				<div className="row" id="locate-us">
					<h1>Where To Find Us</h1>
					<div id="map">
					</div>
				</div>
			</div>
			)
	}
}
