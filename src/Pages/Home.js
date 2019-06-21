import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ReactGA from 'react-ga';

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
    render() {
        return (
            <div className="Home">
                <div className="top">
                    <p> New <br/> Degree <br/> Works </p>
                </div>
                <div className="newPlanRow">
                    <p className="yourPlans"> Your Plans </p>
                    <div className="newPlanButtonWrap">
                        <a style={{display: "table-cell", textDecoration: "none"}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                            <div className = "addButtonText">
                                New Plan
                            </div>
                        </a>
                        <a style={{display: "table-cell", textDecoration: "none"}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                            <div className = "addButtonPlus">
                                +
                            </div>
                        </a>
                    </div>
                </div>
                <div className="planRow">
                    <div className="planContainer">
                        <Link to={'/planone'} style={{ textDecoration: 'none' }}
                              onClick={() => {
                                  Event("PLANONE", "Clicked to Plan One page", "PLANONE_PAGE")
                              }}>
                            <div className="plan">
                                <p className="planName"> COMP + SOPA in 4 Years </p>
                                <div>
                                    <p className="planStatusTrue"> On Track </p>
                                    <p className="planDate"> Last edited on April 26, 2019 </p>
                                </div>
                            </div>
                        </Link>
                        <div className="plan">
                                <p className="planName"> Yeet to the Beat </p>
                                <div>
                                    <p className="planStatusFalse"> Outdated </p>
                                    <p className="planDate"> Last edited on December 25, 2018 </p>
                                </div>
                        </div>
                        <div className="plan">
                            <p className="planName"> Dope Skillz 24 </p>
                            <div>
                                <p className="planStatusFalse"> Outdated </p>
                                <p className="planDate"> Last edited on April 26, 2018 </p>
                            </div>
                        </div>
                        <div className="plan">
                            <p className="planName"> COMP + ELEC with Korean Classes </p>
                            <div>
                                <p className="planStatusFalse"> Outdated </p>
                                <p className="planDate"> Last edited on January 17, 2018 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
