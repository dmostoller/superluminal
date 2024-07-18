import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import SangomaLogo from "./assets/Sangoma_Logo_2018_Horizontal_Black.png"
import FMLogo from "./assets/FM Booking-white-black.png"

export default function AboutPage () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
return (
    <div className="ui middle aligned center aligned grid" style={{minHeight:"100vh", marginTop: "40px"}}>
    <div style={{width: "90%", margin: "auto", marginTop:"20px", marginBottom:"20px"}} className="ui centered inverted card">
        <div className="image">
            <img className="ui large image" 
            src="https://res.cloudinary.com/ddp2xfpyb/image/upload/v1711600118/superluminal/DSC03154-JK_asmosr.jpg" 
            alt="Superluminal - Sangoma Records"/>
        </div>
        <div className="content">
            <div className="header">
                Superluminal
            </div>
            <div className="meta">
                <span className="category">Philadelphia, PA</span>
            </div>
            <div className="description">
                <p>	Superluminal is the project of Kabayun and his partner, muse, and wife Yasmin. Those who know them together are aware of how much of a symbiosis they are in various ways. She doing art to his music and vice versa - constantly inspiring each other. Now they have taken the next level by making music together!             
                <br></br>Superluminal is the next logical step and the result of both their energies and their love for each other as well as for psychedelic culture. With pumping basslines and twisted soundscapes, it’s the perfect sound to kick up some dust and shake your chakras!</p>
                <p>Superluminal & Kabayun are signed exclusively to Sangoma Records and are managed by FM Booking.</p>
            </div>
            <div className="ui fluid container">
                <div className="ui stackable three column centered grid">
                    <div className="column">
                        <div className="ui center aligned inverted segment">
                            <a href="http://fm-booking.com/" target="_blank">
                                <img src={FMLogo} style={{width: "160px"}} alt="FM Booking"></img>
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui centered grid" style={{marginTop: "20px"}}>
                            <Link to="https://www.facebook.com/superluminalpsy" target="blank"  className="ui circular facebook icon large button" style={{marginRight: "5px"}}>
                                <i className="facebook icon"></i>
                            </Link>
                            <Link to="https://www.youtube.com/channel/UCGePscP8I_b2ta5Vuj1j-bQ" target="blank"  className="ui circular youtube icon large button" style={{marginRight: "5px"}}>
                                <i className="youtube icon"></i>
                            </Link>
                            <Link to="https://www.instagram.com/superluminal_psy" target="blank"  className="ui circular icon purple large button" style={{marginRight: "5px"}}>
                                <i className="instagram icon"></i>
                            </Link>
                            <Link to="https://www.patreon.com/superluminal_kabayun_yasmin" target="blank"  className="ui circular icon grey large button" style={{ marginRight: "5px"}}>
                                <i className="patreon icon"></i>
                            </Link>
                            <Link to="https://soundcloud.com/superluminal-sangoma" target="blank"  className="ui circular icon button large orange" style={{marginRight: "5px"}}>
                                <i className="soundcloud icon"></i>
                            </Link>
                            <Link to="https://open.spotify.com/artist/7IHjVGAMreozL1Jk2BBj6h" target="blank" className="ui circular icon button large green" style={{marginRight: "5px"}}>
                                <i className="spotify icon"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui center aligned inverted segment">
                            <a href="https://www.sangomarecords.com/" target="_blank">
                                <img src={SangomaLogo} style={{width: "150px"}} alt="FM Bookings"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="ui centered grid" style={{margin: "10px"}}> 
                    <Link to="/contact" className="ui circular inverted grey fluid large button">Contact Us</Link>
                </div>
            </div>

        </div>
</div>
</div>


)
}