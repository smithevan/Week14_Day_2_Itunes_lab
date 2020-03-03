import React from 'react'

const SongDetail = (props) =>{
  if(!props.song){
    return null;
  }
  return (
    <article>
      <h3>
        {props.song['im:name'].label}
      </h3>
      <h5>
        {props.song['im:artist'].label}
      </h5>
      <p>
        {props.song['im:price'].label}
      </p>

    </article>

  )}



export default SongDetail
