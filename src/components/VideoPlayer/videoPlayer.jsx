import React from "react";
import card from 'react-bootstrap/card';
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

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
      <center>
    <div>
      <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360" src={videoSrc} allowFullScreen title="Video player" />
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
    </center>
    
  );
};

export default VideoPlayer;