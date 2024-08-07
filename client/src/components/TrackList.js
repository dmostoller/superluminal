import React, { useState, useEffect} from "react";
import Track from "./Track"
import AddTrackForm from "./AddTrackForm";
import { useAdmin } from "../context/admin";

function TrackList({ releaseId }) {
    const [tracks, setTracks] = useState([]);
    const {isAdmin} = useAdmin();
    const [isFormVis, setIsFormVis] = useState(false)
    
    function changeIsFormVis() {
        setIsFormVis(!isFormVis)
    }

    useEffect(() => {
        fetch(`/tracks_by_release_id/${releaseId}`)
        .then((res) => res.json())
        .then((tracks) => {setTracks(tracks)})
      }, [releaseId]);

    const deleteTrack = (deleted_track_id) => {
        setTracks(tracks => tracks.filter((track) => track.id !== deleted_track_id))
    }


    const tracks_on_release = tracks.map((track) => {
            return <Track
            key={track.id}
            id={track.id}
            onDeleteTrack={deleteTrack}
            />
    })

    const addTrack = (newTrack) => {
        setTracks([...tracks, newTrack])
        changeIsFormVis()
    }

    return (
            <div className="ui one column inverted centered stackable fluid grid" style={{margin: "5px"}}>
                <div className="ui inverted items">
                    {tracks_on_release}
                {isAdmin &&     
                    <div className="ui centered grid" style={{padding: "5px"}}>
                        {isFormVis ? 
                        <AddTrackForm onAddTrack={addTrack} releaseId={releaseId} onChangeIsFormVis={changeIsFormVis} /> 
                        : 
                        <button onClick={changeIsFormVis} className="ui circular icon secondary button tiny">
                            <i class="plus icon"></i>
                        </button>
                        }
                    </div>
                }
                </div>
            </div>
    )
}

export default TrackList