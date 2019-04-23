import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import config from '../config.json'

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: { lat: 29.76328, lng: -95.36327 },
            markers: []
        }

        this.Google = this.props.google;
        this.geocoder = new this.Google.maps.Geocoder();
    }

    addMarker = newMarkers => {
        this.setState({markers: newMarkers})
        console.log(this.state.markers);
    }

    findMidPoint = (from, to) => {
        this.geocoder.geocode({ 'address': from }, (fromRes, fromStatus) => {
            if (fromStatus === "OK") {
                this.geocoder.geocode({ 'address': to }, (toRes, toStatus) => {
                    if (toStatus === "OK") {
                        const firstLoc = fromRes[0].geometry.location;
                        const secondLoc = toRes[0].geometry.location;
                        const midPoint = this.Google.maps.geometry.spherical.interpolate(firstLoc, secondLoc, 0.5);

                        this.addMarker([firstLoc, secondLoc, midPoint])
                        this.setState({
                            center: midPoint
                        })
                    }
                    else
                        alert("Second Location Error: " + toStatus)
                })
            }
            else
                alert("First Location Error: " + fromStatus);
        })
    }
    setCenter = () => {
        this.findMidPoint("Buckhead, GA", "Midtown,GA")
    }

    render() {
        return (
            <div>
                <button onClick={this.setCenter}>Click me!</button>
                <Map google={this.Google}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    className={'map'}
                    initialCenter={this.state.center}
                    center={this.state.center}
                    zoom={12}>
                    {this.state.markers.map((marks, index) => {
                        return (
                            <Marker
                                key={index}
                                position={marks}
                            />
                        )
                    })}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: config.mapsKey,
    libraries: ["geometry"]
})(MapContainer)