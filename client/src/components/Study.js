import imageBlank from './assets/image-blank.png';

export default function Study() {
  return (
    <div className="ui container" style={{backgroundColor: "#303030"}} >
            <div className="ui middle aligned center aligned grid" style={{minHeight:"100vh", marginTop: "40px"}}>
                <div className="ui center aligned container">    
                    <h2 style={{marginTop: "30px"}} className="ui center aligned icon inverted header">
                        <i className="graduation cap icon"></i>
                        Struggling With Your Production? Learn from Kabayun!
                    </h2>
                    <button className="ui circular violet button large">
                        Go to Courses
                        <i className="arrow right icon"></i>
                    </button>
                    <div className='ui centered rounded large image' style={{marginTop: "25px"}}>
                        <img src={imageBlank} alt="blank"/>
                    </div>
                </div>
                <div className='ui center aligned container' style={{marginTop: "25px", marginBottom: "25px"}}>
                    <h2 className="ui center aligned inverted header">What You Will Learn</h2>'
                    <div className='ui three column grid'>
                        <div className='column'><img src={imageBlank} className='ui rounded medium image'></img></div>
                        <div className='column'><img src={imageBlank} className='ui rounded medium image'></img></div>
                        <div className='column'><img src={imageBlank} className='ui rounded medium image'></img></div>
                    </div>
                </div>
                <div className='ui center aligned container' style={{marginTop: "25px", marginBottom: "25px"}}>
                <h2 className="ui center aligned inverted header">Testimonials</h2>
                    <div className="ui basic inverted centered small cards">
                        <div className="ui card">
                            <div className="content">
                                <div className="description">
                                    "Thank you for the opportunity to look under the hood of psychedelic music production. There was a lot of interesting and useful information."
                                </div>
                            </div>
                            {/* <div className="extra content">- Aleksei K.</div> */}
                        </div>
                        <div className="ui card">
                            <div className="content">
                                
                                <div className="description">
                                {/* "I have to say, the experience here is very unique and tailored to your needs.   */}
                                Big shout out to Kabayun for his lessons, I truely enjoyed our sessions and have learnt a lot in these few weeks!! What amazes me is the depth of knowledge he covers, and not necessarily limited to a daw or synth!!"
                                </div>
                            </div>
                            {/* <div className="extra content">- Raghu K.</div> */}
                        </div>
                        <div className="ui card">
                            <div className="content">
                                
                                <div className="description">
                                    "Im really thankful for the workshop you organized, it was super nice and I learned a lot of new stuff. Keep up the good work, thank you!"
                                </div>
                            </div>
                            {/* <div className="extra content">- Tilen D.</div> */}
                        </div>
                        <div className="ui card">
                            <div className="content">
                                <div className="description">
                                    "Hi David, thanks so much, the lessons have really inspired me a lot. Now for some studio time to put it all into practice!"
                                </div>
                            </div>
                            {/* <div className="extra content">- anonymous</div> */}
                        </div>
                        <div className="ui card">
                            <div className="content">
                                <div className="description">
                                    "Brooooo that was so killer! Like seriously, things clicked!"
                                </div>
                            </div>
                            {/* <div className="extra content">- anonymous</div> */}
                        </div>
                        <div className="ui card">
                            <div className="content">
                                <div className="description">
                                    "Makes total sense and you have a great was of getting things accross!! Thanks so much.""
                                </div>
                            </div>
                            {/* <div className="extra content">- anonymous</div> */}
                        </div>
                        <div className="ui card">
                            <div className="content">
                                <div className="description">
                                    "Your Pateron's masterclass on the Access Virus is incredible!!"
                                </div>
                            </div>
                            {/* <div className="extra content">- anonymous</div> */}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}