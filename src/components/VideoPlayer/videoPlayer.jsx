import React from "react";
<<<<<<< HEAD
import card from 'react-bootstrap/card';
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

=======
import { Container } from 'react-bootstrap';
>>>>>>> 11f25f5f046e36d61ad0bc1cf572e7e4c03d3e45
const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>
       <h1>Search by topic or keywords</h1>

    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const decoratedOnClick = useAccordionToggle(eventKey, onClick);
  console.log(typeof video);
  return (
    <Container>
    <div>
      <div>
        <iframe id="ytplayer" type="text/html" width= "100%" height="360" src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div>
        <h4 id='selectedVidTitle'>{video.snippet.title}</h4>
        <Accordion defaultActiveKey="0">
        <card>
        <card.header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Video Description
      </Accordion.Toggle>
        </card.header>
        <Accordion.Collapse eventKey="0">
      <Card.Body> <p id='selectedVidDesc'>{video.snippet.description}</p></Card.Body>
    </Accordion.Collapse>
        </card>
        </Accordion>
    </div>
       
    </div>
 
    </Container>
   
    
  );
};

export default VideoPlayer;