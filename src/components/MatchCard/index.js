// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {recentMatches} = this.props
    if (!recentMatches) {
      return null
    }
    const {
      competingTeam,
      competingTeamLogo,

      matchStatus,
      result,
    } = recentMatches

    const statusColor = matchStatus === 'Won' ? '#18ed66' : '#e31a1a'

    return (
      <>
        <div className="matches-card-container">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
            className="logo"
          />
          <p className="competing-team">{competingTeam}</p>
          <p className="result">{result}</p>
          <p className="status" style={{color: statusColor}}>
            {matchStatus}
          </p>
        </div>
      </>
    )
  }
}

export default MatchCard
