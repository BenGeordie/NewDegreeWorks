import React from 'react';
import styled from 'styled-components';
import '../../sass/Home.scss'
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import {Link} from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: center;
`;

const Item = styled.div`
    padding: 8px;
    color: white;
    background-color: black;
    border-radius: 12px;
    border: 1px solid white;
`;

const droppableStyle = {
    backgroundColor: 'black',
    width: '250px',
    height: '400px',
    margin: '32px',
    borderRadius: '20px',
    paddingTop: '20px',
    color: 'white'
};

export default class Plan extends React.Component {
    constructor(){
        super();
        this.state = {
            laidOut: [
                {id: "s1", title: "Fall 2018", classes: [{id: "COMP215", name: "COMP 215"}, {id: "ELEC215", name: "ELEC 215"}]},
                {id: "s2", title: "Spring 2019", classes: [{id:"COMP382", name: "COMP 382"}, {id:"ELEC220", name: "ELEC 220"}, {id:"COMP182", name: "COMP 182"}]}
                ],
            toSubmit: []
        }
    }

    handleChange(){

    }

    render(){
        let semesters = this.state.laidOut.map(semester => (
            <Droppable id={semester.id} style={droppableStyle} title={semester.title}>
                {semester.classes.map(course => (
                    <Draggable id ={course.id} style={{margin: '8px'}}><Item>{course.name}</Item></Draggable>
                ))}
            </Droppable>));
        return(
            <div className="Home">
                <div className="top">
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black'}} className="blank">
                        <p> New <br/> Degree <br/> Works </p>
                    </Link>
                </div>
                <Wrapper>
                    {semesters}
                </Wrapper>
            </div>
        );
    }
}