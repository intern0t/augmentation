import React, { Component } from "react";
import SC from "soundcloud";
import Wrapper from "./Wrapper";

SC.initialize({
  client_id: "870069901b526fba43ae239e16fc022c"
});

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client_id: "870069901b526fba43ae239e16fc022c",
      collection: [],
      nextCall: null,
      currentlyPlaying: null
    };
  }
  componentDidMount() {
    var paginationStack = 50;
    SC.get("/tracks", {
      tags: "vaporwave",
      limit: paginationStack,
      linked_partitioning: 0
    }).then(function(resp) {
      if (
        resp &&
        resp.collection &&
        resp.collection.length > 0 &&
        resp.next_href
      ) {
        this.setState(prevState => ({
          ...prevState,
          collection: resp.collection,
          nextCall: resp.next_href
        }));
      }
    });
  }

  componentDidUpdate() {
    const { currentlyPlaying } = this.state;
    SC.stream(`/tracks/${currentlyPlaying}`).then(player => {
      player.play();
    });
  }

  render() {
    return (
      <div className="main-container">
        <Wrapper />
      </div>
    );
  }
}

export default MainContainer;
