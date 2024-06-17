import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import { useUser } from "../context/user";
import { useAdmin } from "../context/admin";
import ReleasesList from "./ReleasesList";

function ReleasesPage() {
    const { user } = useUser();
    const {isAdmin} = useAdmin();
    const [releases, setReleases] = useState([]);
    const {selectedArtist} = useParams();


    useEffect(() => {
        fetch(`/release`)
        .then((res) => res.json())
        .then((releases) => {setReleases(releases)})
      }, []);
      
    // const deleteRelease = (deleted_release_id) => {
    //     setReleases(releases => releases.filter((release) => release.id !== deleted_release_id))
    // }

    const artistReleases = releases
    .filter(release => {
        return (
            release.artist.toLowerCase().includes(selectedArtist.toLowerCase())        
        )
    })

    const sortedReleases = artistReleases.sort((a, b) => (a.date_released) > (b.date_released) ? -1 : 1)

    // const [compact, setCompact] = useState(true);
    //     function changeTab(){
    //         setCompact(!compact)
    //     }


    return (
        <div className="ui container" style={{backgroundColor: "#303030", marginTop:"40px", minHeight: "100vh"}} >

            {/* <div className="ui inverted centered secondary pointing menu" style={{marginTop: "10px"}}>
                { compact ?
                <a onClick={changeTab} className="active item">Collapsed View</a>
                :
                <a onClick={changeTab} className="item">Collapsed View</a>
                }
                
                
                { !compact ? 
                <a onClick={changeTab} className="active item">Expanded View</a>
                :
                <a onClick={changeTab} className="item">Expanded View</a>
                }
            </div> */}
            {selectedArtist === "superluminal" &&
            <h4  style={{paddingTop: "30px"}} class="ui horizontal inverted divider">Superluminal</h4>
            }
            {selectedArtist === "kabayun" &&
            <h4  style={{paddingTop: "30px"}} class="ui horizontal inverted divider">Kabayun</h4>
            }
            <div className="ui container" style={{paddingTop: "5px"}}>
                <ReleasesList releases={sortedReleases} />
            </div>
            { user && isAdmin ?
            <div className="ui grid container centered">
            <Link to={`/releases/new`} style={{margin: "25px"}} className="ui circular icon secondary button"><i className="plus icon"></i></Link>
            </div>
            : <></>
            }



        </div>
    )
}


export default ReleasesPage