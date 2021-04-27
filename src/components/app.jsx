import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/videoPlayer';

class App extends Component {
    state = { 
        video: '',
        videos: [],
     }


getVideo(){
    return this.video ='vYU8Zf1Sv7A'
}


    render() { 

        return (
            <div>
             <VideoPlayer youtube_code = 'vYU8Zf1Sv7A' />
            </div>
          );
    }
}
 
export default App;




       
