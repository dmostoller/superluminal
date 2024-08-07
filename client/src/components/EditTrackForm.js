import React, {useState, useEffect} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import UploadTrackWidget from "./UploadTrackWidget";

function EditTrackForm({onEditTrack, id, onChangeIsFormVis}){
    const [error, setError] = useState(null);
    const [track, setTrack] = useState({});
    const [trackUrl, setTrackUrl] = useState("");


    useEffect(() => {
      fetch(`/tracks/${id}`)
      .then((res) => res.json())
      .then((track) => {
        setTrack(track)
        setTrackUrl(track.audio)
      })
  }, [id]);

    const formSchema = yup.object().shape({
        title: yup.string().required("Must enter a track title"),
        artist_names: yup.string().required("Must enter artist names"),
        bpm: yup.string().required("Must enter a bpm"),
        audio: yup.string().required("Must enter an audio link"),
        dropbox_url: yup.string().required("dropbox link is required"),
      })
    const initValues = track
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          title:`${track.title}`,
          artist_names:`${track.artist_names}`,
          bpm: `${track.bpm}`,
          audio:`${trackUrl}`,
          dropbox_url: `${track.dropbox_url}`,
          release_id: parseInt(id),
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
          fetch(`/tracks/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }).then((res) => {
            if(res.ok) {
              res.json().then(editedTrack => {
                setTrack(editedTrack)
                onEditTrack(editedTrack)
                formik.resetForm()
              })
            } else {
                res.json().then(error => setError(error.message))
            }
          })
        },
      })

    return (
        <div className="item">
        <form className="ui inverted form tiny" style={{width: "350px"}} onSubmit={formik.handleSubmit}>  
            <div className="field">
                <label>Edit Track  <a onClick={onChangeIsFormVis}>  Hide</a></label>
                    <UploadTrackWidget onSetTrackUrl={setTrackUrl}/>
                    <input type="text" id="audio" name="audio" style={{visibility: "hidden"}} value={formik.values.audio} placeholder="Audio Link..." onChange={formik.handleChange}></input>
                    {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.audio}</p>}                    
                    { trackUrl &&
                    <iframe style={{border: "none"}} src={trackUrl} seamless></iframe>
                    }
             </div>
             <div className="field">
                <input type="text" id="title" name="title" value={formik.values.title} placeholder="Track title..." onChange={formik.handleChange}></input>               
                {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.title}</p>}
            </div>
            <div className="field">
                <input type="text" id="artist_names" name="artist_names" value={formik.values.artist_names} placeholder="Artist names..." onChange={formik.handleChange}></input>
                {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.artist_names}</p>}
            </div>
            <div className="field">
                <input type="text" id="bpm" name="bpm" value={formik.values.bpm} placeholder="Track BPM..." onChange={formik.handleChange}></input>
                {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.bpm}</p>}
            </div>
            <div className="field">
                <input type="text" id="dropbox_url" name="dropbox_url" value={formik.values.dropbox_url} placeholder="Dropbox WAV link..." onChange={formik.handleChange}></input>
                {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.dropbox_url}</p>}
            </div>
            <button className="ui button fluid violet tiny" type="submit">Submit</button>
        </form>
         
         </div>
    )
}

export default EditTrackForm