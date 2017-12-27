/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import audio from './audio/audio'

class TrackSamples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRecord: false,
      playing: false
    }
    this.handleAKeyPress = this.handleAKeyPress.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKeyPress, false)
  }

  handleAKeyPress(event) {
    console.log(event)
    if (event.key === '=') {
      if (this.state.playing === true) {
        this.audioDrums.stop()
        this.audioDrums.play()
      } else {
        this.setState({
          playing: true
        })
      }
    }
    if (event.key === '-') this.audioDrums.stop()
  }

  render() {
    return (
      <div>
        <ReactHowler
          playing={this.state.playing}
          ref={ref => (this.audioDrums = ref)}
          src={audio.two}
        />
      </div>
    )
  }
}
export default TrackSamples
