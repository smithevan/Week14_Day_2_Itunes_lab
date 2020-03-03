import React from 'react'

const SongSelect = (props) => {

  const options = props.songs.map(song => {
    return <option
      value={song.id.attributes['im:id']}
      key={song.id.attributes['im:id']}
    >
    {song['im:name'].label}
    </option>
    })

    function handleChange(event){
      console.log(event.target.value)
       props.onSongSelect(event.target.value)
    }

  return (
    <select id="song-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Song...</option>
      {options}
    </select>
  )

}



export default SongSelect;
