import React from "react";
import { PlayerPictures } from "./playersPictures";
import { PlayerIcon } from "./playersIcon";
export function UpcomingMatches() {
  return (
    <div>
      <div className="card" style={{ width: "16rem" }}>
        <PlayerPictures playerLastName="sinner" />
        <div className="card-body">
          <h6 className="card-title">
            <strong>Upcoming Matches </strong>
          </h6>
          <p className="card-text">
            ATP 2000 Roland-Garros Paris, France May, 29 Round of 128 - Court
            Philippe Chatrier
          </p>
          <PlayerIcon playerLastName="sinner" />
          <PlayerIcon playerLastName="djokovic" />
        </div>
        <div style={{ marginLeft: "15px", marginBottom:"20px"}}>
          <a href="#" className="btn btn-success" style={{ width: "80px" }}>
            See
          </a>
        </div>
      </div>
    </div>
  );
}
