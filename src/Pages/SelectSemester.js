import React from 'react'

// import styling
import './../sass/NewPlanInput.scss'

// import database
import majorData from './../Database/majorData'

class SelectSemester extends React.Component{
    constructor(){
        super();
        this.state = {
            chosenSemester: "Semester",
            showSemesterDropdown: false,
        };
        this.handleClickSemester = this.handleClickSemester.bind(this)
        this.handleClickSemesterDropdown = this.handleClickSemesterDropdown.bind(this)
        this.handleMouseLeaveSemesterDropdown = this.handleMouseLeaveSemesterDropdown.bind(this)
    }

    handleClickSemester(degree){
        this.setState({chosenSemester: degree, showSemesterDropdown: false})
        this.props.submitSemester(this.state.chosenSemester)
    }

    handleClickSemesterDropdown(){
        this.setState((prevState) => ({
            showSemesterDropdown: !prevState.showSemesterDropdown
        }))
    }

    handleMouseLeaveSemesterDropdown(){
        this.setState({showSemesterDropdown: false})
    }

    render(){
        return(
            <div>
                <div className="dropdown_wrapping" onMouseLeave={this.handleMouseLeaveSemesterDropdown}>
                    <div className="dropdown">
                        <button className="dropbtn semester" onClick={this.handleClickSemesterDropdown}>
                            <div className="dropbtn_title semester">{this.state.chosenSemester}</div>
                            <a className="triangle_down"/>
                        </button>
                        <div className="dropdown_content semester" style={this.state.showSemesterDropdown? {display: "block"}: {display: "none"}}>
                            <a onClick={(e) => this.handleClickSemester("Spring")}>Spring</a>
                            <a onClick={(e) => this.handleClickSemester("Fall")}>Fall</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SelectSemester