import React, {Component} from 'react';
import PostService from "../../services/postServices/PostServices";
import Post from "../post/Post";
import {
    withRouter
}from "react-router-dom";


class AllPosts extends Component {
    postService = new PostService();
    state = {posts :[]};
    async componentDidMount(){
        let posts = await this.postService.posts();
            this.setState({posts});
    }
    render() {
        let {posts} = this.state;
        let {match:{url}} = this.props;
        console.log(this.props)
        return (
            <div>
                {
                    posts.map(value => <Post item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
}

export default withRouter (AllPosts);