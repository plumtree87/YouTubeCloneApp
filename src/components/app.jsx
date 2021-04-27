import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/videoPlayer';

class App extends Component {
    state = { 
        video: '',
        videos: [],
     }

 

    render() { 
     
        return (
            <div>
             <VideoPlayer
              key='vYU8Zf1Sv7A' />
            </div>
          );
    }
}
 
export default App;




       
