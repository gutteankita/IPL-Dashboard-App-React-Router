// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const BgTeamColors = {
  RCB: '#a4261d',
  KKR: '#4c4c4c',
  KXP: '#5755a7',
  CSK: '#d91c1f',
  RR: '#f7db00',
  MI: '#ffffff33',
  SH: '#da237b',
  DC: '#13418b',
}

class TeamMatches extends Component {
  state = {
    teamMatches: [],
    id: '',
    isSpinning: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data, 'ddd')
    const updatedTeamMatches = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },

      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }

    this.setState({
      teamMatches: updatedTeamMatches,
      id,
      isSpinning: false,
    })
  }
  render() {
    const {teamMatches, id, isSpinning} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches

    return (
      <div
        className="Team-matches-container"
        style={{backgroundColor: BgTeamColors[id]}}
      >
        {isSpinning || !teamBannerUrl ? (
          <div testid="loader">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        ) : (
          <div className="content-container">
            <img src={teamBannerUrl} alt="team banner" className="team-img" />
            <h1 className="team-heading">Latest Match</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <div className="match-card">
              {recentMatches && recentMatches.length > 0 && (
                <>
                  {recentMatches.map(eachDetails => (
                    <li key={eachDetails.id}>
                    <MatchCard
                      key={eachDetails.id}
                      recentMatches={eachDetails}
                    />
                    </li>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
