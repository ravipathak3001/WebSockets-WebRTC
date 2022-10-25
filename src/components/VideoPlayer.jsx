import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <Grid container>
      {/* our own video */}
      {stream && (
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography varient="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video playsInline muted ref={myVideo} autoPlay />
          </Grid>
        </Paper>
      )}

      {/* users video */}
      {console.log(callAccepted, callEnded, userVideo, ">>>>>>>>>>>")}
      {callAccepted && !callEnded && (
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography varient="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video playsInline ref={userVideo} autoPlay />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
