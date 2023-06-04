import React, { useState,useEffect } from 'react'
import {Api_key,imageUrl} from '../../Constants/constants'
import '../Banner/Banner.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
function Banner() {
const[Movie,setMovie]=useState()
const[urlId,seturlId]=useState()
  useEffect(()=>{
   axios.get(`trending/all/week?api_key=${Api_key}&language=en-US`).then((response)=>{
  
const randomIndex = Math.floor(Math.random() * response.data.results.length);


    setMovie(response.data.results[randomIndex])
  }).catch(err=>{
    alert('Somting went wrong')
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
    
    <div  onClick={()=>handleMovie(Movie.id)}
    style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path : ""})` }} className='banner'>
        <div className='content'>
            <h1 className='title'>{ Movie ? Movie.title : ""}</h1>
            <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
            </div>
            <h1 className='description'>{Movie ? Movie.overview : ""}</h1>
        </div>    
      <div className='fade'></div>
    
      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Banner
