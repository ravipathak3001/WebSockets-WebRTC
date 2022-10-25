import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  TypoGraphy,
  Container,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AssignmentIcon, Phone, PhoneDisabled } from "@mui/icons-material";
import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState();
  return (
    <Container>
      <Paper elevation={10}>
        <form noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12} md={6}>
              <h6>Account Info</h6>
              {/* <TypoGraphy gutterBottom varient="h6">
                Account Info
              </TypoGraphy> */}
              <TextField
                label="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                fullWidth
              ></TextField>
              {console.log(me)}
              <CopyToClipboard text={me}>
                <Button variant="contained" color="primary" fullWidth>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6}>
              <h6>Make a call</h6>
              {/* <TypoGraphy gutterBottom varient="h6">
                Account Info
              </TypoGraphy> */}
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={(e) => {
                  setIdToCall(e.target.value);
                }}
                fullWidth
              ></TextField>
              {callAccepted && !callEnded ? (
                <Button
                  varient="contained"
                  color="secondary"
                  fullWidth
                  onClick={leaveCall}
                >
                  Hung Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
