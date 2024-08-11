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
                                    Struggling With Music Production?
                            </h1>
                            <h3 className='ui inverted header' style={{marginTop: "0px"}}>
                                Realize your full potential with Kabayun's courses and tutorials.   
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


                <div className='ui center aligned text container' style={{marginTop: "75px", marginBottom: "25px"}}>
                    <h1 className='ui center aligned inverted header'>Frequently Asked Questions</h1>
                    <div className='ui centered grid' style={{marginTop: "50px"}}>
                        <div className='ui inverted basic small cards'>
                            <div className='ui horizontal card fluid' style={{marginBottom: "0px"}}>
                                <div className='content'>
                                    <div className='left aligned header'>How much does do private lessons cost?</div>
                                    <div className='left aligned description'>
                                        Lessons are priced at $50 per hour. Discounts are available for bulk bookings and long-term commitments. Contact us for more information and to discuss your specific needs and goals.
                                    </div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid' style={{marginBottom: "0px"}}>
                                <div className='content'>
                                    <div className='left aligned header'>Do I need to already have experience?</div>
                                    <div className='left aligned description'>
                                        Lessons are tailored to your individual needs and goals, whether you are a beginner or an experienced producer. 
                                        Kabayun will work with you to create a personalized lesson plan that will help you realize your full potential.
                                    </div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid' style={{marginBottom: "0px"}}>
                                <div className='content'>
                                    <div className='left aligned header'>Do you have flexible payment options?</div>
                                    <div className='left aligned description'>
                                        Yes, we offer flexible payment options to suit your needs. 
                                        Contact us and we will work with you to create a payment plan that works for you.
                                    </div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid' style={{marginBottom: "0px"}}>
                                <div className='content'>
                                    <div className='left aligned header'>Do I need any specific equipment to take the courses?</div>
                                    <div className='left aligned description'>
                                        No, you do not need any specific equipment to take the courses, other than a computer and an internet connection,
                                         and a passion for music production.
                                    </div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid' style={{marginBottom: "0px"}}>
                                <div className='content'>
                                    <div className='left aligned header'>What software do I need?</div>
                                    <div className='left aligned description'>
                                        If you dont have one already, Kabayun will help get you set up with a 
                                        digital audio workstation (DAW) such as Ableton Live, Cubase, or Bitwig. 
                                    </div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid' style={{marginBottom: "0px"}}>
                                <div className='content'>
                                    <div className='left aligned header'>What if I only need help on something specific?</div>
                                    <div className='left aligned description'>
                                        No problem! Whether you need help with sound design, mixing and mastering,
                                        arrangement and composition, or any other aspect of music production, 
                                        Kabayun will work with you to create a lesson plan that meets your needs.
                                    </div>
                                </div>
                            </div>
                            <div className='ui horizontal card fluid' style={{marginBottom: "0px"}}>
                                <div className='content'>
                                    <div className='left aligned header'>I dont have money right now, do you have any free content?</div>
                                    <div className='left aligned description'>
                                        Yes! We offer a range of free tutorials and resources to help you get started on your music production journey. 
                                        Check out our free tutorials on the video page!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



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
                    <div className='ui large centered fluid inverted basic card' style={{padding: "10px", marginTop: "25px"}}>
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