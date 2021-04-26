import React, { createContext, useState } from 'react';

export const Comments = createContext()

const CommentsContextProvider = () => {
    const [comment, setComments] = useState([
        {comment: 'Video Comment', id: 1},
        {comment: 'Video Comment', id: 2},
        {comment: "Video Comment", id: 3}
    ])
    return <div> Comments List Context </div>
}

export default CommentsContextProvider