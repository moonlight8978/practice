import React from 'react'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

import '../styles/twitch.scss'

class Twitch extends React.Component {
  state = {
    chatActive: false,
    fullScreen: true,
  }

  toggleChat = event => {
    this.setState({ chatActive: !this.state.chatActive })
  }

  toggleFullScreen = event => {
    this.setState({ fullScreen: !this.state.fullScreen })
  }

  render() {
    return (
      <Layout
        renderNav={(isSidebarOpen, toggleSidebar) => (
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        renderSidebar={isSidebarOpen => (
          <Sidebar isOpen={isSidebarOpen} />
        )}
      >

        <div className="container">
          <div className={"twitch-streaming-section" + (this.state.chatActive ? ' chat-active' : '')}>
            <div className={"twitch-player" + (this.state.fullScreen ? '' : ' minimized')}>
              <div className="twitch-video"></div>
            </div>

            <div className="twitch-player-tooltip">
              <div className="twitch-player-action">
                {this.state.chatActive && <button type="button" onClick={this.toggleFullScreen}>Toggle full screen</button>}
                <button type="button" onClick={this.toggleChat}>Toggle chat</button>
              </div>

              <div className="twitch-streamer-info">

              </div>
            </div>

            <div className="twitch-chat">

            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Twitch
