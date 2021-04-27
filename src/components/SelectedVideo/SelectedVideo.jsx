import React from 'react';

const SelectedVideo = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default SelectedVideo;