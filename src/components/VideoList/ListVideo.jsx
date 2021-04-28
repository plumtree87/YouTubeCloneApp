import React from 'react';
import { Container, Card } from 'react-bootstrap';
import SelectedVideo from '../SelectedVideo/SelectedVideo'


const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <SelectedVideo key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return (
    <Container>
        <Card>
    {renderedVideos}
        </Card>

    </Container>
    )
};
export default VideoList;