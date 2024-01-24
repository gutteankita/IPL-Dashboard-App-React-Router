// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCards} = this.props
    const {id, name, teamImageUrl} = teamCards
    return (
      <Link to={`/team-matches/${id}`} className="team-cards-link">
        <li className="team-cards" key={id}>
          <img src={teamImageUrl} alt={name} className="image" />
          <p className="name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
