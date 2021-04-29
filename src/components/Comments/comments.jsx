import axios from 'axios';
import React, {Component} from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';



class Comments extends Component {
    if (props){
        console.log(props) }
    constructor(props) {
        super(props);
        this.state = {
            video_id: '',
            comment: '',
            like: '',
            matchedComments: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.mapComments();

    }
    mapMatchedComments(){
        console.log(this.state.matchedComments)
        return this.state.matchedComments.map((comment) =>
        
        <tr><Card>{comment}</Card></tr>
        )
    }
    
    async mapComments(){
        let response = await axios.get('http://127.0.0.1:8000/youtube/')
        let alldata = response.data.map(items =>{
            return items
        })
     
        const commentz = this.matchCommentToVideo(alldata)
        console.log(commentz)
        this.setState({
            matchedComments: commentz
        })
        return commentz


    }

    matchCommentToVideo(alldata){
        let commentz = [];
        for (let i = 0; i < alldata.length; i++){
            console.log(this.props.video)
            if(this.props.video === alldata[i].video_id){
                console.log(alldata[i].video_id)
                commentz.push(alldata[i].comment)
            }
        }
    
        return commentz

    }

    async addNewComment(comment){
        await axios.post('http://127.0.0.1:8000/youtube/', comment)
        this.mapComments();


    }

    handleChange(event) {
        this.setState({
        [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();

        const Comment = {
            video_id: this.props.video,
            comment: this.state.comment,
            like: this.state.like
            }

        this.addNewComment(Comment);
        debugger;
        this.setState({
            video_id: this.props.video,
            comment: '',
            like: ''
        });

    }

    

    render(){
        console.log(this.state.matchedComments)
        this.mapComments()
        return (
            <div>
                <hr />
                <center>
                    <h3>comment</h3>
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