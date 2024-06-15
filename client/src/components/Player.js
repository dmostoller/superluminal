import React, {useState} from 'react'
import WavesurferPlayer from '@wavesurfer/react'
import {Progress} from 'semantic-ui-react'

const Player = ({track}) => {
  const [wavesurfer, setWavesurfer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [percentLoaded, setPercentLoaded] = useState(0)

  const onLoad = () => {
    setLoading(true)
  }

  const onReady = (ws) => {
    setLoading((prevValue) => false)
    setWavesurfer(ws)
    setIsPlaying(false)
  }

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause()
  }

//   console.log(track)
  return (
    <>
    <table width="100%">
        <tr>
          <td width="30px">
            {loading ?
            <button className='ui circular icon loading button secondary massive' disabled></button>
              :
              <button style={{float: "left"}} className='ui circular icon button secondary large' onClick={onPlayPause}>
                  { isPlaying ? <i className='pause icon'></i> : <i className='play icon'></i> }
              </button>
            }
        </td>
        <td>
            <WavesurferPlayer
            height={40}
            waveColor="rgba(89, 4, 181, 1)"
            barWidth={5}
            barGap={4}
            barHeight={1}
            barRadius={30}
            progressColor= 'rgba(0, 0, 100, 0.5)'
            partialRender='true'
            url={track}
            onLoad={onLoad}
            onReady={onReady}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            // mediaControls='false'
            />
        </td>
        </tr>
    </table>
    </>
  )
}
export default Player