import React, {useState, useEffect} from "react"
import EditTrackForm from "./EditTrackForm";
import { useAdmin } from "../context/admin";
import Player from "./Player";
import fileDownload from "js-file-download"
import axios from "axios";


export default function Track({id, onDeleteTrack}) {
    const [isFormVis, setIsFormVis] = useState(false);
    const [track, setTrack] = useState({});
    const {isAdmin} = useAdmin();

    useEffect(() => {
        fetch(`/tracks/${id}`)
        .then((res) => res.json())
        .then((track) => setTrack(track))
    }, [id]);

    const handleDeleteTrack = (e) => {
        if(window.confirm("Are you sure you want to delete this track?")){ 
        fetch(`/tracks/${id}`,{
          method:"DELETE"
        })
        .then(() => {
          onDeleteTrack(id)
        })
    }}

    function showEditForm(){
        setIsFormVis(!isFormVis)
    }
    function updateTrack(editedTrack) {
        showEditForm()
        setTrack(editedTrack)
    }
    const handleDownload = (url, filename) => {
        axios
          .get(url, {
            responseType: "blob"
          })
          .then((res) => {
            fileDownload(res.data, filename);
          });
      };

    return (
        <div className="item">
            {isFormVis ? 
            <EditTrackForm id={id} onChangeIsFormVis={showEditForm} onEditTrack={updateTrack}/>
                :
            <table className="ui selectable inverted fluid table" > 
            <tbody>
                <tr>
                    <th style={{padding: "5px", minWidth: "300px", width: "600px"}}>
                        <div className="content">
                            <h5>{track.title}
                            { isAdmin && 
                                <span style={{float: "right"}}>
                                    <button 
                                        className="circular ui icon inverted secondary button mini"
                                        onClick={() => {
                                            handleDownload(
                                                `${track.audio}`,
                                                `${track.artist_names} - ${track.title}.mp3`
                                              );
                                        }}>
                                        <i className="cloud download alternate icon"></i>
                                    </button>
                                    <button onClick={showEditForm} className="circular ui icon inverted secondary button mini">
                                        <i className="edit icon" style={{visibility: "visible"}}></i>
                                    </button>
                                    <button className="circular ui icon inverted secondary button mini" onClick={handleDeleteTrack}>
                                        <i className="trash icon" style={{visibility: "visible"}}></i>
                                    </button>
                                </span>
                                }
                            </h5>
                        </div>
                        <div className="meta">
                            <span className="ui small text">{track.artist_names}</span>
                            <span className="ui small text">{track.bpm} bpm</span>
                        </div>
                        <div className="content">
                            <Player track={track.audio}/>
                        </div>
                    </th>
                </tr>
            </tbody>
            </table>   
            }
        </div>
    )
}