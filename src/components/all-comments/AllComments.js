import React, {Component} from 'react';
import Comment from "../comment/Comment";
import CommentService from "../../services/commentServices/commentService";
import {
    withRouter
}from "react-router-dom";


class AllComments extends Component {
    commentService = new CommentService();
    state = {comments : []}
    async componentDidMount(){
        let comments = await this.commentService.comments();
        this.setState({comments})
    }
    render() {
        let {comments} = this.state;

        return (
            <div>
                {
                    comments.map(value => <Comment item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
}

export default withRouter (AllComments);