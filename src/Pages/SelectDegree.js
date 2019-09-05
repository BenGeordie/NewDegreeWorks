import React from 'react'

// import styling
import './../sass/NewPlanInput.scss'

// import database
import majorData from './../Database/majorData'

class SelectDegree extends React.Component{
    constructor(){
        super();
        this.state = {
            chosenMajor: "Choose a Major",
            chosenMajorId: null,
            chosenDegree: "Degree",
            showMajorDropdown: false,
            showDegreeDropdown: false,
            majorData: majorData,
        };
        this.handleClickMajor = this.handleClickMajor.bind(this)
        this.handleClickMajorDropdown = this.handleClickMajorDropdown.bind(this)
        this.handleMouseLeaveMajorDropdown = this.handleMouseLeaveMajorDropdown.bind(this)
        this.handleClickDegree = this.handleClickDegree.bind(this)
        this.handleClickDegreeDropdown = this.handleClickDegreeDropdown.bind(this)
        this.handleMouseLeaveDegreeDropdown = this.handleMouseLeaveDegreeDropdown.bind(this)
    }

    handleClickMajor(linkTitle, id){
        if(this.state.chosenMajor !== linkTitle && this.setState.chosenMajorId !== id){
            this.setState({chosenDegree: "Degree"})
        }
        this.setState({chosenMajor: linkTitle, chosenMajorId: id, showMajorDropdown: false})
    }

    handleClickMajorDropdown(){
        this.setState((prevState) => ({
            showMajorDropdown: !prevState.showMajorDropdown
        }))
    }

    handleMouseLeaveMajorDropdown(){
        this.setState({showMajorDropdown: false})
    }

    handleClickDegree(degree){
        this.setState({chosenDegree: degree, showDegreeDropdown: false})
        this.props.submitDegree(this.props.majorNumber, this.state.chosenMajorId, this.state.chosenMajor, degree)
    }

    handleClickDegreeDropdown(){
        this.setState((prevState) => ({
            showDegreeDropdown: !prevState.showDegreeDropdown
        }))
    }

    handleMouseLeaveDegreeDropdown(){
        this.setState({showDegreeDropdown: false})
    }

    degreeDropdown(){
        if(this.state.chosenMajorId !== null){
            const degreeOptions = this.state.majorData[this.state.chosenMajorId].degrees.map(degree => (
                <a onClick={(e) => this.handleClickDegree(degree)}>{degree}</a>
            ));
            return(
                <div className="dropdown_wrapping" onMouseLeave={this.handleMouseLeaveDegreeDropdown}>
                    <div className="dropdown">
                        <button className="drop_button degree" onClick={this.handleClickDegreeDropdown}>
                            <div className="drop_button_title degree">{this.state.chosenDegree}</div>
                            <a className="triangle_down"/>
                        </button>
                        <div className="dropdown_content degree" style={this.state.showDegreeDropdown? {display: "block"}: {display: "none"}}>
                            {degreeOptions}
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){
        const majorOptions = this.state.majorData.map(major => (
            <a onClick={(e) => this.handleClickMajor(major.major, major.id)}>{major.major}</a>
        ));
        return(
            <div>
                <div className="dropdown_wrapping" onMouseLeave={this.handleMouseLeaveMajorDropdown}>
                    <div className="dropdown">
                        <button className="drop_button major" onClick={this.handleClickMajorDropdown}>
                            <div className="drop_button_title major">{this.state.chosenMajor}</div>
                            <a className="triangle_down"/>
                        </button>
                        <div className="dropdown_content major" style={this.state.showMajorDropdown? {display: "block"}: {display: "none"}}>
                            {majorOptions}
                        </div>
                    </div>
                </div>
                {this.degreeDropdown()}
            </div>
        )
    }
}


export default SelectDegree