import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {
    isLogin: false,
  }
  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return(){
        <div className="app-container">
      <div className="home-container">
      <Message isLogin={isLogin}/>
      {isLogin?(
          <Logout logout={this.onClickButton} />
      ): (<Login login={this.onClickButton}/>
      )}
   
      </div>
      </div>
    )
  }
}

export default Home
