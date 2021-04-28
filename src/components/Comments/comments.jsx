import axios from 'axios';
import React, {Component} from 'react';


class Comments extends Component {
    if (props){
        console.log(props) }
    constructor(props) {
        super(props);
        this.state = {
            video_id: '',
            comment: '',
            like: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.mapComments();
        

    }

    async mapComments(){
        let response = await axios.get('http://127.0.0.1:8000/youtube/')
        let alldata = response.data.map(items =>{
            return items
        })
        console.log(alldata)
        let commentz = this.matchCommentToVideo(alldata)
        console.log(commentz)


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
                    </div>
                </form>
            </div>
        );
    }




}
export default Comments;