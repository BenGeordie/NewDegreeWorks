import React from "react";
import styled from 'styled-components';
import DndTest from './Dnd/Plan/index';
import Home from './Pages/Home.js'
import NewPlanInput from './Pages/NewPlanInput.js'
import './App.scss';

const Container = styled.div`
`;

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
        }
    }

    render(){
        return(
            <div>
                <Home style="margin: 0;"/>
                {/*<Container>*/}
                    {/*<DndTest/>*/}
                {/*</Container>*/}
            </div>
        );
    }
}