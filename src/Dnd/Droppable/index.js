import React from 'react';
import PropTypes from 'prop-types'

export default class Droppable extends React.Component{

  drop = (e) =>  {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
  };

  allowDrop = (e) => {
    e.preventDefault();
  };

  render(){
    return (
      <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style ={this.props.style}>
        <item style={{padding: '8px', fontSize: '20px', textAlign: 'center'}}><b>{this.props.title}</b></item>
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};