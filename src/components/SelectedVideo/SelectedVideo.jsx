import React from 'react';

const SelectedVideo = ({video , handleVideoSelect}) => {
    return (
        <div className="container">
            <div className="col">
        <div onClick={ () => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div id="vidinfo">{video.snippet.title}</div>
            </div>
        </div>
        </div>
        </div>
       
    )
};
export default SelectedVideo;