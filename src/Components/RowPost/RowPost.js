import React, { useEffect,useState } from 'react'
import '../RowPost/RowPost.css'
import axios from '../../axios'
import {Api_key ,imageUrl } from '../../Constants/constants'
import Youtube from 'react-youtube'
function RowPost(props) {
   const[Movies,setMovie]=useState([])
   const[urlId,seturlId]=useState()
  useEffect(()=>{
axios.get(props.url).then((response)=>{
setMovie(response.data.results)
})
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };

const handleMovie=(id)=>{

  axios.get(`/movie/${id}/videos?api_key=${Api_key}&language=en-us`).then((response)=>{
    if(response.data.results.length!==0){
      seturlId(response.data.results[0])
   
    }else{
      alert('Trailer not available')
    }
  })

}


  return (
    <div className='row'>
        <h2>{props.title}</h2>
      <div className='posters'> 
      {Movies.map((obj)=>
 <img key={obj.id} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='rowpost'/>
      
      )}
       
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
