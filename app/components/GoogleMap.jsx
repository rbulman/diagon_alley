/* global google */
import _ from "lodash";

import {
  default as React,
  Component,
} from "react";


import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "APP/node_modules/react-google-maps/lib";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={9}
    defaultCenter={{ lat: 51.6907903, lng: -0.4197087 }}
  >
  {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

export default class TheMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 51.6907903,
          lng: -0.4197087,
        },
        key: `Diagon Alley`,
        defaultAnimation: 2,
      }],
    };

    this.handleMapLoad = this.handleMapLoad.bind(this);
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  render() {
    console.log("markers", this.state.markers)
    return (
      <div style={{height: `100%`}}>

        <h1> Where to Find Us</h1>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          markers={this.state.markers}
          />
      </div>
    );
  }

}
