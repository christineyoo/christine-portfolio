import React, { Component } from 'react';

class Map extends Component {
    
  render() {
    return (
      <>
        <script src='main.js'></script>
        <script
          async
          defer
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBCdo82fr1EGCM8YJT12zVwpwNNg9gSkxk&callback=initMap'
        ></script>
      </>
    );
  }
}

export default Map;
