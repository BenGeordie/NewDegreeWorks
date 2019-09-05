import React from 'react'

// import styling
import './../sass/NewPlanInput.scss'
import '../sass/Home.scss';

// import function
import sort from './Sort'

// import data
import toBeScheduled from './toBeScheduled'

// import components
import SelectDegree from './SelectDegree'
import SelectSemester from './SelectSemester'
import {Link} from "react-router-dom";

class NewPlanInput extends React.Component{
    constructor(){
        super();
        this.state = {
            majorNumber: [0],
            selectedMajors: [0],
            selectedSemester: null,
            gradYear: null,
            toBeScheduled: toBeScheduled[0],
            scheduled: null
        };
        this.handleClickAddDegree = this.handleClickAddDegree.bind(this);
        this.submitDegree = this.submitDegree.bind(this);
        this.submitSemester = this.submitSemester.bind(this);
        this.handleChangeGradYear = this.handleChangeGradYear(this);
        this.handleClickSubmit = this.handleClickSubmit(this);
    }

    handleClickAddDegree(){
        this.setState(prevState => ({
            majorNumber: prevState.majorNumber.concat(prevState.majorNumber.length),
            selectedMajors: prevState.selectedMajors.concat(0)
        }));
        console.log(this.state)
    }

    submitDegree(majorNumber, chosenMajorId, chosenMajor, chosenDegree){
        // Notice I don't use setState. I this problematic?
        this.state.selectedMajors[majorNumber] = [chosenMajorId, chosenMajor, chosenDegree]
        console.log(this.state)
    }

    submitSemester(chosenSemester){
        // Notice I don't use setState. I this problematic?
        this.state.selectedSemester = chosenSemester
        console.log(this.state)
    }

    handleChangeGradYear(){
        /*this.setState({gradYear: e.target.value})*/
        console.log("hello")
    }

    handleClickSubmit(){
        console.log("Clicked the submit button");
        if(this.state.selectedSemester != null) {
            const courses = Object.keys(this.state.toBeScheduled.coursesDetails);
            const allPlans = sort(courses,
                this.state.toBeScheduled.coursesDetails,
                this.state.selectedSemester, //DO NOTICE THAT THIS IS ONLY TEMPORARY. SELECTEDSEMESTER IS END SEMESTER WHILE SORT TAKES IN START SEMESTER
                this.state.toBeScheduled.semesterNum,
                this.state.toBeScheduled.preferredCreditLimit,
                this.state.toBeScheduled.difficultyLevel,
                this.state.toBeScheduled.planNum);
            this.state.scheduled = allPlans;
            console.log(this.state.scheduled);
        }
    }

    render(){
        const degrees = this.state.majorNumber.map(majorNumber => (<SelectDegree majorNumber={majorNumber} submitDegree={this.submitDegree}/>));
        var today = new Date();
        var year = today.getFullYear();
        return(
            <div className="Home">
                <div className="top">
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black'}} className="blank">
                        <p> New <br/> Degree <br/> Works </p>
                    </Link>
                </div>
                <div className="input_wrapping">
                    <div className="input">
                        {degrees}
                        <div className="add_degree_wrapping">
                            <button className="add_degree" onClick={this.handleClickAddDegree}>+ Degree / Major</button>
                        </div>
                        <div className="grad_by">
                            <SelectSemester submitSemester={this.submitSemester}/>
                            <input className="grad_year" type="text" name="gradYear" placeholder="Year" autoComplete="off" />
                            {/*<form onSubmit={(e) => (e.preventDefault())}>*/}
                            {/*</form>*/}
                        </div>
                        <button className="submit_button" onClick={this.handleClickSubmit}>
                            Start
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
// Make a new file for degree selections
// FOR ADD DEGREE BUTTON: We can have a state attribute saying "number of degrees" and use some sort of mapping function
// to go like "for i in range n slap a dropdown menu"

export default NewPlanInput