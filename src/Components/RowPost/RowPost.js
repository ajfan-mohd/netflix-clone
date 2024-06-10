import React, { useEffect, useState } from 'react'
import { img_url,API_KEY } from '../../constants/Constants'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
function RowPost(props) {
    const [original, Setorginal] = useState([])
    const [urlid,seturlId]=useState('')
    useEffect(() => {
        axios.get(props.url).then((resp) => {
            console.log("response",resp.data)
            Setorginal(resp.data.results)
        }).catch(err => {
            // alert("network")
        })

    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
const handleMovie =(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
            seturlId(response.data.results[0])
        }else{
            console.log('trailer not available')
        }
    })
}
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {original.map((obj) => 
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall  ? 'smallposter' :'poster'} alt='poster' src={`${img_url+obj.backdrop_path}`} />
                )}
            </div>
           { urlid &&  <Youtube opts={opts}  videoId={urlid.key}  />}
        </div>
    )
}

export default RowPost