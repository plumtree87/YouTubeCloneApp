import React from 'react';

const CommentRender = (props) => {
    console.log(props.comment)
    return (
        <div id="replyCommentScroll">
        {props.comment.comment}


        </div>
    
       
    )
};
export default CommentRender;

// I did not create the model that I would need. I think one way to go about this, is creating a new model that uses the comment ID, as the foreign key to 
// a second model, so that
// when the comment comes into this CommentRender div, I can have a function that will match that ID to the replies model as a foreign key, and then I can display
// all the replies that were replies to this comment, using it's primary key that they're connected by..

// So, I would need to get axios and look at a model that all of their foreign keys belong to which ever comment props.comment.id value is.. 