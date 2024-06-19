import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import { useUser } from "../context/user";
import { useAdmin } from "../context/admin";
import PostCommentsList from "./PostCommentsList";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import HelmetMetaData from "./HelmetMetaData";

function PostDetail(){
    const [post, setPost] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    const { user } = useUser()
    const {isAdmin} = useAdmin()

    useEffect(() => {
        fetch(`/post/${id}`)
        .then((res) => res.json())
        .then((post) => setPost(post))
    }, [id]);

    const handleDeletePost = (e) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
        fetch(`/post/${id}`, {
            method: "DELETE"
            })
            .then(() => {
                // deletePost(post)
                navigate('/') 
            })
        }
    }    
    const page_url = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsuperluminal.onrender.com%2Freleases%2F${id}&amp;src=sdkpreparse`

    return (
        <div className="ui container" style={{paddingTop:"5px", marginTop: "40px", minHeight:"100vh"}}>
        <div style={{marginTop: "10px"}} className="ui inverted horizontal card fluid">
                    <div className="item" >
                        <img className="ui big image" src={post.image_url} alt={post.title}></img>
                    </div>
                    <div className="content">
                        <div className="header">
                            {post.title}
                        </div>
                        <div className="meta">
                            <span className="category">{post.date_added}</span>
                        </div>
                        <div className="description">
                            <p>{post.content}</p>
                        </div>
                        <div className="meta">
                            <span className="category"><a href={post.link} target="_blank">{post.link}</a></span>
                        </div>
                        <div style={{padding: "10px"}}>
                            <HelmetMetaData 
                            title={post.title}
                            description={post.content}
                            image={post.image_url}>    
                            </HelmetMetaData>
                            <Link to="/" className="circular ui icon violet button"><i className="undo icon"></i></Link>
                            <Link to={page_url}
                            target="_blank"
                            className="circular ui icon facebook button"  
                            data-inverted="" 
                            data-tooltip="Share to Facebook" 
                            data-position="bottom center">
                            <i className="facebook icon"></i>
                            </Link>
                            { user && isAdmin ? ( 
                            <>
                                <Link to={`/posts/${id}/edit`} className="circular ui icon secondary button">
                                    <i className="edit icon" style={{visibility: "visible"}}></i>
                                </Link>
                                <button className="circular ui icon secondary button" onClick={handleDeletePost}>
                                    <i className="trash icon" style={{visibility: "visible"}}></i>
                                </button>

                            </>
                                )
                                : <></>    
                            } 
                        </div>
                    </div>
                </div>
            <div className="ui bottom attached inverted segment">
            <h4 className="ui horizontal inverted divider">Comments</h4>
            <div>
                <PostCommentsList postId={id}/>
            
                { !user ?
            <div className="ui centered grid" style={{padding: "5px"}}>
                <div className="ui inverted message">
                <span className="ui medium violet text">
                    Please <Link to='/login'>Login</Link> or <Link to='/signup'>Create an Account</Link> to leave a comment
                </span>
                </div>
            </div>
            :
            <></>
            }</div> 

            </div>
        </div>
    
    );
}

export default PostDetail