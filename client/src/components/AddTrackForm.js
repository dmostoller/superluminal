import React, {useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import UploadTrackWidget from "./UploadTrackWidget";

function AddTrackForm({onAddTrack, releaseId, onChangeIsFormVis}){
    const [error, setError] = useState(null);
    const [trackUrl, setTrackUrl] = useState("");

    const formSchema = yup.object().shape({
        title: yup.string().required("track title is required"),
        artist_names: yup.string().required("artist names are required"),
        bpm: yup.string().required("bpm is required"),
        audio: yup.string().required("audio link is required"),
        dropbox_url: yup.string().required("dropbox link is required"),
      })

    const formik = useFormik({
      enableReinitialize: true, 
        initialValues: {
          title:'',
          artist_names:'',
          bpm: '',
          audio:`${trackUrl}`,
          dropbox_url: '',
          release_id: parseInt(releaseId),
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
          fetch("/tracks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }).then((res) => {
            if(res.ok) {
              res.json().then(newTrack => {
                onAddTrack(newTrack)
                formik.resetForm()
              })
            } else {
                res.json().then(error => setError(error.message))
            }
          })
        },
      })

    return (
        <div className="ui item">
        <form className="ui inverted form tiny" style={{width: "350px"}} onSubmit={formik.handleSubmit}>  
            <div className="field">
                <label>Add New Track  <a onClick={onChangeIsFormVis}>  Hide</a></label>
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

export default AddTrackForm