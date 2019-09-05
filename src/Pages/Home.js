import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ReactGA from 'react-ga';
import PlanCard from './PlanCard'
import plans from './Plans'

import '../sass/Home.scss';

import ScrollIntoView from 'react-scroll-into-view'

const isMobile = window.innerWidth <= 600;

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
};

class Home extends Component {
    constructor(){
        super();
        this.state = {
            plans: plans
        }
    }
    render() {
        const planCards = this.state.plans.map(plan => (
            <PlanCard
                key={plan.id}
                link={plan.link}
                name={plan.name}
                onTrack={plan.onTrack}
                date={plan.date}
            />
        ));
        return (
            <div className="Home">
                <div className="top">
                    <p> New <br/> Degree <br/> Works </p>
                </div>
                <div className="newPlanRow">
                    <p className="yourPlans"> Your Plans </p>
                    <div className="newPlanButtonWrap">
                        <Link to={'/newplaninput'} style={{ textDecoration: 'none', color: 'black'}} className="blank">
                            <a style={{display: "table-cell", textDecoration: "none"}} target="_blank">
                                <div className = "addButtonText">
                                    New Plan
                                </div>
                            </a>
                            <a style={{display: "table-cell", textDecoration: "none"}} target="_blank">
                                <div className = "addButtonPlus">
                                    +
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="planRow">
                    <div className="planContainer">
                        {planCards}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
