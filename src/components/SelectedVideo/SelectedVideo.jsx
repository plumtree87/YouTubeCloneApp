import React from 'react';

const SelectedVideo = ({video , handleVideoSelect}) => {
    return (
        <div className="container">
            <div className="col">
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
<<<<<<< HEAD
          <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
=======
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
>>>>>>> 7aa770bc088c88ce84bf7c31b0615e4c3c28d5b9
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
        </div>
        </div>
       
    )
};
export default SelectedVideo;