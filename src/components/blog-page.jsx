import React, { Component } from 'react';
import {getPosts} from "./services/fakePostService"
import PostPage from "./post-page"
import History from "../history"
import NavBar from "./navbar"


class BlogComponent extends Component {
    state = {  
        pagePostNumber: 8,
        posts: [],
        postOpen: false

    }

    componentDidMount(){
        const posts = getPosts()
        this.setState({
            posts
        })
        
    }

    getImageUrl = (post) => {
        return post.imageUrl
    }

    getEightPost = () => {
        const startIndex = 0;
        const posts = this.state.posts 
        const eightPost = posts.slice(startIndex, (startIndex + 8))
        return eightPost;

    }

    openPostPage = (post) => {
        return (<PostPage post= {post} />)
        console.log(post);
        
    }

    render() { 
        const posts = this.getEightPost()
        console.log(posts);
        
        return (  
           <div>
                <NavBar/>
                <div className="container">
                    
                    <div className="title-container"> <h1 className="blog-title"> </h1></div>
                    <div className="blog-content">
                        <div className="content-row-eight"> 
                            {posts.map( post=> (  
                                <div key={post._id} className="content"> 
                                    <div className="content-image" style={{  }}>
                                        <img src={ this.getImageUrl(post) } alt=""/>
                                    </div>
                                    <div className="paragraph-container" > <p  className="content-paragraph">{post.post}</p> </div>
                                    <div className="link-content" > <div  onClick={() => History.push(`/blog/${post._id}`)} className="read-more">Devamını Oku</div> </div>    
                                </div> 
                               
                            ))}    
                        </div>
                    </div>
                </div>
              
             </div>   
    );}
}
 
export default BlogComponent;