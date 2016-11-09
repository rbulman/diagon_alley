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
						<img src={dummy} className="img img-responsive img-circle"/>
						<h3>Owl Trainer</h3>
						<p><i>some cute text</i></p>
					</div>
					<div className="col-md-3 col-xs-6 headshot">
						<img src={dummy} className="img img-responsive img-circle"/>
						<h3>Taste-Tester</h3>
						<p><i>some cute text</i></p>
					</div>
					<div className="col-md-3 col-xs-6 headshot">
						<img src={dummy} className="img img-responsive img-circle"/>
						<h3>Potion's Master</h3>
						<p><i>some cute text</i></p>
					</div>
					<div className="col-md-3 col-xs-6 headshot">
						<img src={dummy} className="img img-responsive img-circle"/>
						<h3>Explosion's Expert</h3>
						<p><i>some cute text</i></p>
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
