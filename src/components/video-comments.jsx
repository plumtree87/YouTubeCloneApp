import React, {useContext} from 'react'
import {Comments} from './Comments/comments'

const videoComments = () => {
    const [comments] = useContext(Comments)
    return (
        <div>
       <ul className="list">
        {comments.map((comment) => {
            return {comments}
        } )}
       </ul>
        </div>
    )
}

export default videoComments