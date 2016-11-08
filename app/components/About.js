import React, {Component} from 'react'


export default class About extends Component{
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
					<div id="map"></div>
				</div>
			</div>
			)
	}
}

	 function initMap() {
		 var diagonAlley = {lat: -25.363, lng: 131.044};
		 var map = new google.maps.Map(document.getElementById('map'), {
			 zoom: 4,
			 center: uluru
		 });
		 var marker = new google.maps.Marker({
			 position: diagonAlley,
			 map: map
		 });
	 }
