import React, { useState, useEffect } from 'react';
import axios from 'axios'
import VideoPlayer from './VideoPlayer/videoPlayer';

class App extends Component {
    state = { 
        video: '',
        videos: [],
     }





    render() { 
        console.log("this.state", this.state)
        return (
            <div>
             <VideoPlayer />
            </div>
          );
    }
}
 
export default App;




       
