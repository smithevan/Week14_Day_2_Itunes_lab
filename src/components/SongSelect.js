import React from 'react'

const SongSelect = (props) => {

  const options = props.songs.map(song => {
    return <option
      value={song.feed.entry['im:name'].label}
      key={song.feed.entry['im:name'].id.attributes['im:id']}
    >
    {song.feed.entry['im:name'].label}
    </option>
    })

  return (
    <select id="song-selector" defaultValue="default">
      <option disable value="default">Choose a Song...</option>
      {options}
    </select>
  )

}



export default SongSelect;
