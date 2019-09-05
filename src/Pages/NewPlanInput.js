import React from 'react'

// import styling
import './../sass/NewPlanInput.scss'
import '../sass/Home.scss';

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
            selectedSemester: null
        };
        this.handleClick = this.handleClick.bind(this)
        this.submitDegree = this.submitDegree.bind(this)
        this.submitSemester = this.submitSemester.bind(this)
    }

    handleClick(){
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
                            <button className="add_degree" onClick={this.handleClick}>+ Degree / Major</button>
                        </div>
                        <SelectSemester submitSemester={this.submitSemester}/>
                        <form>
                            <input className="grad_year" type="text" name="gradYear" placeholder="Year"/>
                        </form>
                        <a className="submit_button">
                            Start
                        </a>
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