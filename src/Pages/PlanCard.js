import React from "react"
import {Link} from "react-router-dom";
import {Event} from "./Home";
import "./../sass/PlanCard.scss"

class PlanCard extends React.Component {
    render(){
        return(
            <Link to={`/${this.props.link}`} style={{ textDecoration: 'none' }}
                  onClick={() => {
                      Event("PLANONE", "Clicked to Plan One page", "PLANONE_PAGE")
                  }}>
                <div className="plan">
                    <p className="planName"> <b>{this.props.name}</b> </p>
                    <div>
                        <p className={this.props.onTrack? "planStatusTrue" : "planStatusFalse"}> <b>{this.props.onTrack? "On Track" : "Outdated"} </b></p>
                        <p className="planDate"> Last edited on {this.props.date} </p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default PlanCard