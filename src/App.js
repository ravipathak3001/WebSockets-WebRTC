import React from "react";
import { AppBar, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      {/* video player */}
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
      {/* options -> notification  */}
    </div>
  );
};
export default App;
