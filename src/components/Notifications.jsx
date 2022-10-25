import React, { useContext } from 'react'
import {Button} from '@mui/material';
import { SocketContext } from '../SocketContext';

const Notifications = () => {
    
    const {answercall, call, callAccepted} = useContext(SocketContext)

  return (
    <>
    {call.isReceived && !callAccepted ? (
        <div style={{display:'flex', justifyContent:'center'}}>
            <h1>{call.name} is callling: </h1>
            <button onClick={answercall}> Answer </button>
        </div>
    ) : "....."}
    </>
  )
}

export default Notifications