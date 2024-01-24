// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamCards: [],
    isSpinning: true,
  }

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedTeamCard = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({
      teamCards: updatedTeamCard,
      isSpinning: false,
    })
  }
  render() {
    const {teamCards, isSpinning} = this.state
    return (
      <div className="home-container">
        <div className="logo-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isSpinning ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-card-container">
            {teamCards.map(eachCard => (
              <TeamCard key={eachCard.id} teamCards={eachCard} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Home
