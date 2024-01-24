// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props

    if (!latestMatchDetails) {
      return null
    }
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails
    return (
      <>
        <div className="latest-matches-container">
          <div className="competing-team-info">
            <p className="team-heading">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="info1">{venue}</p>
            <p className="info">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="logo"
          />
          <div className="teams-information">
            <p className="info-heaindg">First Innings</p>
            <p>{firstInnings}</p>
            <p className="info-heaindg">Second Innings</p>
            <p>{secondInnings}</p>
            <p className="info-heaindg">Man Of The Match</p>
            <p>{manOfTheMatch}</p>
            <p className="info-heaindg">Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </>
    )
  }
}

export default LatestMatch
