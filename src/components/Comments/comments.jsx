import axios from 'axios';
import React, {Component} from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { AiTwotoneLike } from 'react-icons/ai';



class Comments extends Component {
    if (props){
        console.log(props) }
    constructor(props) {
        super(props);
        this.state = {
            video_id: '',
            comment: '',
            like: '',
            matchedComments: [],
            likes: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.mapComments();
     
    }
    displayLikes(){
        return <Card>{this.state.likes}</Card>
    }

    mapMatchedComments(){
        return this.state.matchedComments.map((comment) =>
        <Container>
        <tr><Card>comment: "{comment.comment}" like: {comment.like}</Card></tr>
        </Container>
        )
    }
    
    async mapComments(){
        let response = await axios.get('http://127.0.0.1:8000/youtube/')
        let alldata = response.data.map(items =>{
            return items
        })
     
        const commentz = this.matchCommentToVideo(alldata)

        return commentz


    }

    matchCommentToVideo(alldata){
        let commentz = [];
        let theselikes = 0;
        for (let i = 0; i < alldata.length; i++){
   
            if(this.props.video === alldata[i].video_id){
                if(alldata[i].like === 1){
                    theselikes += 1;

                }
                commentz.push(alldata[i])
            }
        }
 
        this.setState({
            matchedComments: commentz,
            likes: theselikes
        })
        return commentz

    }

    async addNewComment(comment){
        console.log("ADD NEW COMMENT FUNCTION HERE")
        await axios.post('http://127.0.0.1:8000/youtube/', comment)
        console.log(comment, "LINE 75 HEREEE")
        this.mapComments();


    }

    handleChange(event) {
        this.setState({
        [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log("LINE 90 HEREEE")

        const Comment = {
            video_id: this.props.video,
            comment: this.state.comment,
            like: this.state.like
            }
        console.log(Comment, "COMMENT HERE")
        this.addNewComment(Comment);
        this.setState({
            video_id: this.props.video,
            comment: '',
            like: ''
        });

    }

    

    render(){
      
        this.mapComments()
      
        return (
            <div>
                <hr />
                <center>
                    <h3>{this.displayLikes()} <AiTwotoneLike/> </h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className='row col-align'>
                        <div className='col-md-4'>
                            <label>Comment</label>
                            <input type='text' name='comment' value={this.state.comment}
                            onChange={this.handleChange} />
                        </div>
                        <div className='col-md-4'>
                            <label>Like</label>
                            <input type='text' name='like' value={this.state.like} onChange={this.handleChange}/>
                           
                        </div>
                        <div className='col-md-4'>
                            <input type='submit' value='Add' />
                        </div>
                        <div>
                        <div>
                            <tbody><tr>
                                <td> {this.mapMatchedComments()}</td>
                                </tr>
                            </tbody>
                        </div>
                           
                        </div>
                    </div>
                </form>
            </div>
        );
    }




}
export default Comments;