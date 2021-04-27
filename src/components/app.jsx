import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/videoPlayer';

class App extends Component {
    state = { 
        video: '',
        videos: [],
     }

 

    render() { 
        console.log("this.state", this.state)
        const key = 'vYU8Zf1Sv7A'
        return (
            <div>
             <VideoPlayer
              key={key} />
            </div>
          );
    }
}
 
export default App;




       
