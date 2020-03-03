import React from 'react'
import SongSelect from '../components/SongSelect'


class SongContainer extends React.Component {


  constructor(props){
    super(props);
      this.state = {
        songs: [],
        selectedSongId: ''
      }
      this.handleSongSelect = this.handleSongSelect.bind(this)
  }

  handleSongSelect(id){
    this.setState({selectedSongId: id})
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err=>console.error)
  }

  render(){
    return(
      <div>
        <h2>Top 20 Songs:</h2>
        <h5>Select A Song</h5>
        <SongSelect
          songs={this.state.songs}
          onSongSelect={this.handleSongSelect}
        />
      </div>
    )
  }


}

export default SongContainer
