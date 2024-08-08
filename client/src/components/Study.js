import imageBlank from './assets/image-blank.png';
import Testimonials from './Testimonials';
import headShot from './assets/headshot.jpg';
import { Link } from 'react-router-dom';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';   

export default function Study() {
return (
    <div className="ui container" style={{backgroundColor: "#303030"}} >
            <div className="ui middle aligned center aligned grid" style={{minHeight:"100vh", marginTop: "50px"}}>
                    <div className="ui center aligned container">    
                            <h1 style={{marginTop: "30px"}} className="ui center aligned icon inverted header">
                                    <i className="large question icon"></i>
                                    Struggling With Your Production?
                            </h1>
                            <h3 className='ui inverted header' style={{marginTop: "0px"}}>
                                Take Your Music To The Next Level With Kabayun's Courses
                            </h3>
                            <Link to='https://www.patreon.com/superluminal_kabayun_yasmin/shop' className="ui circular violet button large" target='_blank' style={{marginTop: "0px"}}>
                                    Go to Courses
                                    <i className="arrow right icon"></i>
                            </Link>

                            <div className='ui basic segment' style={{marginTop: "50px"}}>
                                    <div className="ui two column very relaxed stackable grid">
                                            <div className='column'>
                                                    <div className='ui padded basic segment'>
                                                            <h1 className='ui inverted icon header'>
                                                                    <i className="large graduation cap icon"></i>
                                                                    Learn From Kabayun
                                                            </h1>
                                                            <h4 className='ui inverted header' style={{marginTop: "0px"}}>
                                                                Kabayun is a world renowned psytrance producer who has been producing music for over 15 years and has released music on some of the biggest labels in the psytrance scene. 
                                                                He has a wealth of knowledge and experience in music production and sound design and is passionate about helping others achieve their goals and realize their full potential.
                                                            </h4>
                                                    </div>
                                            </div>
                                            <div className='column'>
                                                    <div className='ui centered rounded massive image'>
                                                            <img src={image1} alt="blank"/>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                            <div className='ui basic segment' style={{marginTop: "50px", marginBottom: "50px"}}>
                                    <div className="ui two column very relaxed stackable grid">
                                            <div className='column'>
                                                    <div className='ui centered rounded massive image'>
                                                            <img src={image2} alt="blank"/>
                                                    </div>
                                            </div>
                                            <div className='column'>
                                                    <div className='ui padded basic segment'>
                                                            <h1 className='ui inverted icon header'>
                                                                    <i className="large chartline icon"></i>
                                                                    
                                                                    Elevate Your Productions
                                                            </h1>
                                                            <h4 className='ui inverted header' style={{marginTop: "0px"}}>
                                                                    Whether you are a beginner or an experienced producer, Kabayun's courses will help you take your productions to the next level. 
                                                                    Learn the techniques and secrets of professional music production and sound design and start creating the music you've always dreamed of.
                                                            </h4>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                <h2 className="ui center aligned inverted header" style={{marginTop: "75px"}}>What You Will Learn</h2>'
                <div className='ui center aligned padded grid' style={{marginBottom: "25px"}}>
                    <div className='ui three link stackable inverted cards'>
                        <div className='card'>
                            <div className='content'>
                                <div className='icon header'>
                                    <i className="sound icon"></i>
                                    Kick & Bass
                                </div>
                                <div className='description'>Learn the techniques for creating a powerful and punchy kick and bass for psytrance music.</div>
                            </div>
                        </div>
                        <div className='card'>
                                <div className='content'>
                                        <div className='icon header'>
                                                <i className="music icon"></i>
                                                Sound Design
                                        </div>
                                        <div className='description'>Master the art of sound design and create your own unique sounds and presets.</div>
                                </div>
                        </div>
                        <div className='card'>
                            <div className='content'>
                                    <div className='icon header'>
                                            <i className="microphone icon"></i>
                                            Mixing & Mastering
                                    </div>
                                    <div className='description'>Learn the techniques and tools of professional mixing and mastering.</div>
                        </div>
                        </div>
                        <div className='card'>
                            <div className='content'>
                                <div className='icon header'>
                                    <i className="pencil icon"></i>
                                    Arrangement & Composition
                                </div>
                                <div className='description'>Discover the secrets of arrangement and composition and how to create dynamic and engaging tracks.</div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='content'>
                                <div className='icon header'>
                                    <i className="code icon"></i>
                                    Workflow & Productivity
                                </div>
                                <div className='description'>Optimize your workflow and increase your productivity with tips and tricks from Kabayun.</div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='content'>
                                <div className='icon header'>
                                    <i className="comment icon"></i>
                                    Feedback & Support
                                </div>
                                <div className='description'>Get personalized feedback and support to help you achieve your goals.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="ui center aligned inverted header" style={{marginTop: "100px", marginBottom: "25px"}}>Testimonials</h1>
                <Testimonials/>


                <div className='ui center aligned text container' style={{marginTop: "75px", marginBottom: "25px"}}>
                    <h1 className='ui center aligned inverted header'>Frequently Asked Questions</h1>
                    <div className='ui centered grid' style={{marginTop: "50px"}}>
                        <div className='ui inverted basic cards'>
                            <div className='ui horizontal card fluid'>
                                <div className='content'>
                                    <div className='header'>Question 1</div>
                                    <div className='description'>Answer to question 1</div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid'>
                                <div className='content'>
                                    <div className='header'>Question 2</div>
                                    <div className='description'>Answer to question 2</div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid'>
                                <div className='content'>
                                    <div className='header'>Question 3</div>
                                    <div className='description'>Answer to question 3</div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid'>
                                <div className='content'>
                                    <div className='header'>Question 4</div>
                                    <div className='description'>Answer to question 4</div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid'>
                                <div className='content'>
                                    <div className='header'>Question 5</div>
                                    <div className='description'>Answer to question 5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <h1 style={{marginTop: "100px", marginBottom:"5px"}} className="ui center aligned icon inverted header">
                    <i className="large rocket icon"></i>
                    Are you ready to take your music to the next level?
                </h1>
                <h4 style={{marginTop: "0px"}} className="ui center aligned inverted header">Join Kabayun's courses and start creating the music you've always dreamed of.</h4>
                <Link to='https://www.patreon.com/superluminal_kabayun_yasmin/shop' target='_blank' className="ui circular violet button large">
                    Go to Courses
                    <i className="arrow right icon"></i>
                </Link>
                <Link to='/learn' className="ui circular violet button large">
                    Free Tutorials
                    <i className="arrow right icon"></i>
                </Link>



                <div className='ui padded basic segment' style={{marginTop: "50px", marginBottom: "50px"}}>
                    <div className='ui large centered fluid inverted basic card' style={{padding: "10px", marginTop: "25px"}}>
                        <div className='content'>
                            <div className='description'>
                                <p>Hey there, fellow music producers!</p>
                                <p>I wanted to take a moment to invite you to explore all the resources available to you here.</p>
                                <p>Whether you're just starting out or looking to refine your skills, I've got you covered.</p>
                                Check out the collection of paid and free videos, webinars, and tutorials that cover a wide range of topics,
                                <p>from sound design to mixing and mastering, arrangement and composition, workflow and productivity, and more.</p>
                                <p>If you're looking for a more personalized approach, I also offer private lessons where we can dive deep into your specific needs and goals.</p>
                                <p>Let's take your music to the next level together!</p>
                            </div>
                            <div className="extra content" style={{marginTop: "15px"}}>
                                <div className=" author">
                                    <img className="ui massive avatar image" src={headShot}></img> <span className='ui grey text'>Dave</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 style={{marginTop: "50px", marginBottom:"0px"}} className="ui center aligned icon inverted header">
                    <i className="large chalkboard teacher icon"></i>
                    Private Lessons
                </h1>
                <h4 style={{marginTop: "0px"}} className="ui center aligned inverted header">
                    Take your music to the next level with personalized one on one lessons with Kabayun.
                </h4>
                <div className='ui center aligned grid' style={{marginTop: "0px", marginBottom: "100px"}}>
                    <div className='ui basic centered segment'>
                        <div className='ui text container'>
                            <div className='ui inverted form'>
                                <div className='equal width fields'>
                                    <div className='field'>
                                        <label>Name</label>
                                        <div className="ui left icon input">
                                            <i className="user icon"></i>
                                            <input type='text' placeholder='Name'/>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label>Email</label>
                                        <div className="ui left icon input">
                                            <i className="mail icon"></i>
                                            <input type='text' placeholder='Email'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='ui circular fluid large violet submit button'>Inquire About Private Lessons</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>







        </div>
    </div>
  );
}