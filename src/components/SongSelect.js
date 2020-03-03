import React from 'react'

const SongSelect = (props) => {

  const options = props.songs.map(song => {
    return <option
      value={song['im:name'].label}
      key={song.id.attributes['im:id']}
    >
    {song['im:name'].label}
    </option>
    })

  return (
    <select id="song-selector" defaultValue="default">
      <option disabled value="default">Choose a Song...</option>
      {options}
    </select>
  )

}



export default SongSelect;
