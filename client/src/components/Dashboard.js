import { useState, useEffect } from "react";
import { useUser } from "../context/user";
import { useAdmin } from "../context/admin";
import { Link, useNavigate } from "react-router-dom";


function Dashboard () {
    const {user} = useUser()
    const {isAdmin} = useAdmin()
    const [users, setUsers] = useState([])
    const [releases, setReleases] = useState([])
    const [events, setEvents] = useState([])
    const [posts, setPosts] = useState([])
    const [tracks, setTracks] = useState([])
    const [comments, setComments] = useState([])
    const [postComments, setPostComments] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)
        isAdmin !== true && !user && 
            navigate('/')
      }, [isAdmin, navigate, user])

    useEffect(() => {
        fetch(`/users`)
        .then((res) => res.json())
        .then((users) => {setUsers(users)})
      }, []);

    useEffect(() => {
        fetch(`/release`)
        .then((res) => res.json())
        .then((releases) => {setReleases(releases)})
        }, []);

    useEffect(() => {
        fetch(`/event`)
        .then((res) => res.json())
        .then((events) => {setEvents(events)})
        }, []);

    useEffect(() => {
        fetch(`/post`)
        .then((res) => res.json())
        .then((posts) => {setPosts(posts)})
        }, []);
    
    useEffect(() => {
        fetch(`/tracks`)
        .then((res) => res.json())
        .then((tracks) => {setTracks(tracks)})
        }, []);
    
    useEffect(() => {
        fetch(`/comments`)
        .then((res) => res.json())
        .then((comments) => {setComments(comments)})
        }, []);

    useEffect(() => {
        fetch(`/post_comments`)
        .then((res) => res.json())
        .then((postComments) => {setPostComments(postComments)})
        }, []);

    const userList = users.map((user) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{user.username}</div>
                    <div className="meta">{user.email}</div>
                </div>
            </div>
        )
    })

    // console.log(users)
    return (
        <>
        <div className="ui middle aligned center aligned grid" style={{minHeight:"100vh"}}>
            <div className="ui inverted container" style={{marginTop: "75px"}}>
                <h4 className="ui horizontal inverted divider">Dashboard</h4>
                <div className="ui grid" style={{marginBottom: "25px"}}>
                    <div className="six wide column">
                        <div className="ui inverted top attached segment">
                            <div className="ui huge inverted basic card">
                                <div className="content">
                                    <div class="right floated meta"><i className="users icon"></i></div>
                                    <div className="huge header">Users</div>
                                    <div className="description"><span className="ui massive text">{users.length}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="ui inverted attached segment">
                            <div className="content">
                                <div className="description">
                                    <div class="ui inverted divided items">
                                        {userList}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ten wide column">
                        <div className="ui centered inverted stackable three cards">
                            <div className="ui inverted card">
                                <div className="content">
                                    <div class="right floated meta"><i className="record vinyl icon"></i></div>
                                    <div className="large header">Releases</div>
                                    <div className="description"><span className="ui huge text">{releases.length}</span></div>
                                </div>
                            </div>
                            <div className="ui inverted card">
                                <div className="content">
                                    <div class="right floated meta"><i className="music icon"></i></div>
                                    <div className="large header">Tracks</div>
                                    <div className="description"><span className="ui huge text">{tracks.length}</span></div>
                                </div>
                            </div>
                            <div className="ui inverted card">
                                <div className="content">
                                    <div class="right floated meta"><i className="calendar icon"></i></div>
                                    <div className="large header">Events</div>
                                    <div className="description"><span className="ui huge text">{events.length}</span></div>
                                </div>
                            </div>
                            <div className="ui inverted card">
                                <div className="content">
                                    <div class="right floated meta"><i className="newspaper icon"></i></div>
                                    <div className="large header">Posts</div>
                                    <div className="description"><span className="ui huge text">{posts.length}</span></div>
                                </div>
                            </div>
                            <div className="ui inverted card">
                                <div className="content">
                                    <div class="right floated meta"><i className="comment icon"></i></div>
                                    <div className="large header">Comments</div>
                                    <div className="description"><span className="ui huge text">{comments.length}</span></div>
                                </div>
                            </div>
                            <div className="ui inverted card">
                                <div className="content">
                                    <div class="right floated meta"><i className="comment icon"></i></div>
                                    <div className="large header">P-Comments</div>
                                    <div className="description"><span className="ui huge text">{postComments.length}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui centered padded grid">
                <Link target='_blank' to='https://analytics.google.com/analytics/web/?authuser=1#/p450805044/reports/intelligenthome'
                    className='ui large violet labeled icon inverted button'
                >
                <i className="chartline icon"></i>
                Google Analytics
                </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard