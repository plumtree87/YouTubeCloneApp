import React, { Component } from 'react';
import youtube from '../API/youtube';
import VideoPlayer from './VideoPlayer/videoPlayer';
import SearchBar from './SearchBar/searchBar';
import VideoList from './VideoList/ListVideo';
import { Container, Col, Row } from 'react-bootstrap';
import '../components/app.css'

class App extends Component {
    state = { 
        selectedVideo: null,
        videos: [],
        comments: []
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
    console.log(video.id.videoId)
}

    render() { 

        return (
            <Container>
               
              <SearchBar handleFormSubmit={this.handleSubmit}/>
              
                <Row>
                    <Col sm ={8}>
              <VideoPlayer video={this.state.selectedVideo}/>
           
             
                    </Col>
                    <Col sm = {4}>
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </Col>
                </Row>
            </Container>
          );
    }
}
 
export default App;




       
