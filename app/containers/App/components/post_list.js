import React, { Component } from 'react';
import PostData from '../../../public/critics.json';

class PostList extends Component {
    render() {
        return (
            <div>
                
                {PostData.map((postDetail, index) => {
                    return (
                    <div>
                       <h1>{postDetail.display_name}</h1>
                    <p>{postDetail.sort_name} </p>
                <p> {postDetail.status}</p> 
                    <p> {postDetail.bio} </p>
                     <p>{postDetail.seo_name}</p>
                     
                    </div>
                    )
                    
                    // postDetail.status, postDetail.bio, postDetail.seo_name, postDetail.multimedia}</h1>
                    })}
                
            </div>
        )
        
    }
}

export default PostList;