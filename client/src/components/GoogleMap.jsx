import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import config from "../config.json";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 29.76328, lng: -95.36327 },
      markers: []
    };

    this.Google = this.props.google;
    this.geocoder = new this.Google.maps.Geocoder();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.locationA !== prevProps.locationA ||
      this.props.locationB !== prevProps.locationB
    )
      this.findMidPoint(this.props.locationA, this.props.locationB);
  }

  addMarker = newMarkers => {
    this.setState({ markers: newMarkers });
  };

  findMidPoint = (from, to) => {
    this.geocoder.geocode({ address: from }, (fromRes, fromStatus) => {
      if (fromStatus === "OK") {
        this.geocoder.geocode({ address: to }, (toRes, toStatus) => {
          if (toStatus === "OK") {
            const firstLoc = fromRes[0].geometry.location;
            const secondLoc = toRes[0].geometry.location;
            const midPoint = this.Google.maps.geometry.spherical.interpolate(
              firstLoc,
              secondLoc,
              0.5
            );

            this.addMarker([firstLoc, secondLoc, midPoint]);
            this.setState({
              center: midPoint
            });
          } else alert("Second Location Error: " + toStatus);
        });
      } else alert("First Location Error: " + fromStatus);
    });
  };

  render() {
    return (
      <div>
        <Map
          google={this.Google}
          style={{ width: "100%", height: "50%", position: "relative" }}
          className={"map"}
          initialCenter={this.state.center}
          center={this.state.center}
          zoom={12}
        >
          {this.state.markers.map((marks, index) => {
            return <Marker key={index} position={marks} />;
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.mapsKey,
  libraries: ["geometry"]
})(MapContainer);
