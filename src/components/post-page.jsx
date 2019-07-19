import React, { Component } from 'react';
import {getPost} from "./services/fakePostService"
import NavBar from "./navbar"
import "./component-css/post-page.css"

class PostPage extends Component {

    render() { 
        const postId = this.props.match.params.id
        const post = getPost(postId)
        console.log(post)
        return (  
        <React.Fragment>
            <NavBar/>
            <div className="post-container">
                <div className="post-title"> <h1>  {post.title}</h1></div>
                <div className="post-content"> <p> {post.post}</p></div>
            
            </div> 
        </React.Fragment>
            
            
        );
    }
}
 
export default PostPage;