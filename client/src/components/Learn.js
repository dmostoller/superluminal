
import React, { useState, useEffect } from "react"
import Tutorials from "./Tutorials";
import GigVideos from "./GigVideos";
import Chat from "./Chat"


function Learn() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [tutVis, setTutVis] = useState(true);
// console.log('data', data)
    function changeTab(){
        setTutVis(!tutVis)
    }

    return (
        <>
        <div className="ui inverted segment" style={{marginTop: "45px"}}>
            <div className="ui inverted centered secondary pointing menu">
                
                { tutVis ?
                <a onClick={changeTab} href="#tutorials" className="active item">Tutorials</a>
                :
                <a onClick={changeTab} href="#tutorials" className="item">Tutorials</a>
                }
                
                
                { !tutVis ? 
                <a onClick={changeTab} href="#music" className="active item">Music</a>
                :
                <a onClick={changeTab} href="#music" className="item">Music</a>
                }
            
            </div>
            <div className="ui middle aligned center aligned grid" style={{padding: "10px", minHeight:"100vh"}}>
            {tutVis ?
                <Tutorials/>
            :
                <GigVideos/>
            }
            </div>    
        </div>
        {tutVis &&
            <div style={{ position:"relative", height: "500px" }}>
              <Chat />
            </div>
        }
        </>

    )

}

export default Learn
