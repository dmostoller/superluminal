import imageBlank from './assets/image-blank.png';
import Testimonials from './Testimonials';


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
                <Testimonials/>

            </div>


        </div>
    </div>
  );
}