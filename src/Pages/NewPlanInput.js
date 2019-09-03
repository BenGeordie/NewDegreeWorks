import React from 'react'

import './../sass/NewPlanInput.scss'
import SelectDegree from './SelectDegree'

class NewPlanInput extends React.Component{
    constructor(){
        super();
        this.state = {
            majorNumber: [1]

        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => ({
            majorNumber: prevState.majorNumber.concat(1)
        }));
        console.log(this.state)
    }
    render(){
        const degrees = this.state.majorNumber.map(major => (<SelectDegree/>));
        return(
            <div className="input">
                {degrees}
                <div className="add_degree_wrapping">
                    <button className="add_degree" onClick={this.handleClick}>+ Degree / Major</button>
                </div>
                {/*<a className="cross"/>*/}
            </div>

        )
    }
}
// Make a new file for degree selections
// FOR ADD DEGREE BUTTON: We can have a state attribute saying "number of degrees" and use some sort of mapping function
// to go like "for i in range n slap a dropdown menu"

export default NewPlanInput