import React, { Component } from 'react';
import youtube from '../API/youtube';
import VideoPlayer from './VideoPlayer/videoPlayer';
import SearchBar from './SearchBar/searchBar';
import VideoList from './VideoList/ListVideo';


class App extends Component {
    state = { 
        selectedVideo: null,
        videos: [],
     }


handleSubmit = async (userInputFromSearchBar) => {
    const response = await youtube.get('/search', {
        params: {
            q: userInputFromSearchBar
        }
    })
    this.setState({
        videos: response.data.items
    })
    console.log("Response is", response);
};
handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}

    render() { 

        return (
            <div>
              <SearchBar handleFormSubmit={this.handleSubmit}/>
              <VideoPlayer video={this.state.selectedVideo}/>
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
          );
    }
}
 
export default App;




       
