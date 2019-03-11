import React, { Component } from "react";
import MusicInfo from "./MusicInfo";
import Controls from "./Controls";

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-entry">
          <MusicInfo />
        </div>
        <div className="wrapper-entry">
          <div className="music-info">
            <div className="music-info-title">
              Ｈｏｍｅ － Ｒｅｓｏｎａｎｃｅ （Heal's Vaporwave Edit）
            </div>
          </div>
          <Controls />
        </div>
      </div>
    );
  }
}
export default Wrapper;
