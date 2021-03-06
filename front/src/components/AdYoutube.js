import React from 'react';
import YouTube from 'react-youtube';

class AdYoutube extends React.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: this.props.auto,
      },
    };

    return <YouTube videoId={this.props.vId} opts={opts} />;
  }
}

export default AdYoutube;
