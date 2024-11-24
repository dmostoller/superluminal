import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials';
import headShot from './assets/kaba.jpg';
import FAQ from './FAQ';
import { Link } from 'react-router-dom';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';   
import StudyForm from './StudyForm';


export default function Study() {
return (
    <div className="ui container" style={{backgroundColor: "#303030"}} >
            <div className="ui middle aligned center aligned grid" style={{minHeight:"100vh", marginTop: "50px"}}>
                    <div className="ui center aligned container">    
                            

                            <div className='ui inverted very padded piled segment' style={{marginTop: "50px"}}>
                                    <div className="ui two column very relaxed stackable grid">
                                            <div className='column'>
                                                    <div className='ui padded basic segment'>
                                                            <h1 className='ui inverted icon header'>
                                                                    <i className="large graduation cap icon"></i>
                                                                    Learn From Kabayun
                                                            </h1>
                                                            <h4 className='ui inverted header' style={{marginTop: "0px"}}>
                                                                Kabayun is a world renowned psytrance producer who has been producing music for over 15 years and has released music on some of the biggest labels in the psytrance scene. 
                                                                He has a wealth of knowledge and experience and is passionate about helping others achieve their goals and realize their full potential.
                                                            </h4>
                                                            <Link to='https://www.patreon.com/superluminal_kabayun_yasmin/shop' className="ui circular violet inverted button small" target='_blank' style={{marginTop: "0px"}}>
                                                            Go to Courses
                                                            <i className="arrow right icon"></i>
                                                             </Link>
                                                </div>
                                            </div>
                                            <div className='column'>
                                                    <div className='ui centered rounded massive image'>
                                                            <img src={image1} alt="blank"/>
                                                    </div>
                                            </div>
                                    </div>
                            </div>


                            <h1 style={{marginTop: "30px"}} className="ui center aligned icon inverted header">
                                    <i className="large question icon"></i>
                                    Struggling With Music Production?
                            </h1>
                            <h3 className='ui inverted header' style={{marginTop: "0px"}}>
                                Realize your full potential with Kabayun's courses and tutorials.   
                            </h3>
                            <Link to='https://www.patreon.com/superluminal_kabayun_yasmin/shop' className="ui circular violet button large" target='_blank' style={{marginTop: "0px"}}>
                                    Go to Courses
                                    <i className="arrow right icon"></i>
                            </Link>


                            <div className='ui inverted very padded piled segment' style={{marginTop: "50px", marginBottom: "50px"}}>
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
                                                                    
                                                                    Elevate Your Skills
                                                            </h1>
                                                            <h4 className='ui inverted header' style={{marginTop: "0px"}}>
                                                                    Whether you are a beginner or an experienced producer, Kabayun's courses will help you take your productions to the next level. 
                                                                    Learn the techniques and secrets of professional music production and sound design and start creating the music you've always dreamed of.
                                                            </h4>
                                                            <Link to='https://www.patreon.com/superluminal_kabayun_yasmin/shop' className="ui circular violet inverted button small" target='_blank' style={{marginTop: "0px"}}>
                                                            Go to Courses
                                                            <i className="arrow right icon"></i>
                                                             </Link>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                <h2 className="ui center aligned inverted header" style={{marginTop: "75px"}}>What You Will Learn</h2>'
                <div className='ui center aligned padded grid' style={{marginBottom: "25px"}}>
                    <div className='ui three stackable inverted cards'>
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
                                    <i className="drum icon"></i>
                                    Percussion & Groove
                                </div>
                                <div className='description'>
                                    Learn how to create dynamic and groovy percussion patterns and add movement and energy to your tracks.
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='content'>
                                <div className='icon header'>
                                    <i className="sliders horizontal icon"></i>
                                    Modular Synthesizers
                                </div>
                                <div className='description'>
                                    Explore the world of modular synthesizers and learn how to create complex and evolving sounds.
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='content'>
                                <div className='icon header'>
                                    <i className="wind icon"></i>
                                    Atmospheres & FX
                                </div>
                                <div className='description'>
                                    Create immersive atmospheres and effects to add depth and texture to your tracks.
                                </div>
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


                <h1 style={{marginTop: "100px", marginBottom:"5px"}} className="ui center aligned icon inverted header">
                    <i className="large forward icon"></i>
                    Fast Track Your Music Production Skills
                </h1>
                <h4 style={{marginTop: "0px"}} className="ui center aligned inverted header">
                 Get a head start on your music production journey with Kabayun's courses and tutorials.
                </h4>
                <Link to='https://www.patreon.com/superluminal_kabayun_yasmin/shop' target='_blank' className="ui circular violet button large">
                    Go to Courses
                    <i className="arrow right icon"></i>
                </Link>
                <Link to='/learn' className="ui circular violet button large">
                    Free Tutorials
                    <i className="arrow right icon"></i>
                </Link>

                <h1 className="ui center aligned inverted header" style={{marginTop: "100px", marginBottom: "25px"}}>Testimonials</h1>
                <Testimonials/>

                <FAQ/>

                <h1 style={{marginTop: "100px", marginBottom:"5px"}} className="ui center aligned icon inverted header">
                    <i className="large rocket icon"></i>
                    Are you ready to take your music to the next level?
                </h1>
                <h4 style={{marginTop: "0px"}} className="ui center aligned inverted header">
                    Get started today with Kabayun's courses and tutorials.
                </h4>
                <Link to='https://www.patreon.com/superluminal_kabayun_yasmin/shop' target='_blank' className="ui circular violet button large">
                    Go to Courses
                    <i className="arrow right icon"></i>
                </Link>
                <Link to='/learn' className="ui circular violet button large">
                    Free Tutorials
                    <i className="arrow right icon"></i>
                </Link>



                <div className='ui padded basic text container' style={{marginTop: "75px", marginBottom: "75px"}}>
                    <div className='ui large centered fluid inverted card' style={{padding: "10px", marginTop: "25px"}}>
                        <div className='content'>
                            <div className='description'>
                                <p>Hey there, fellow music producers!</p>
                                <p>I wanted to take a moment to invite you to explore all the resources available to you here. 
                                Whether you're just starting out or looking to refine your skills, I've got you covered.</p>
                                <p>Check out the collection of paid and free videos, webinars, and tutorials that cover a wide range of topics,
                                from sound design to mixing and mastering, arrangement and composition, workflow and productivity, and more.</p>
                                <p>If you're looking for a more personalized approach, I also offer private lessons where we can dive deep into your specific needs and goals.</p>
                                <p>
                                    I look forward to helping you on your musical journey!
                                </p>
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
                 Enter your name and email address for more information about one-on-one lessons with Kabayun.
                </h4>
                <div className='ui center aligned grid' style={{marginTop: "0px", marginBottom: "100px"}}>
                    <div className='ui basic centered segment'>
                        <div className='ui text container'>
                            {/* <div className='ui inverted form'>
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
                            </div> */}
                        <StudyForm/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}