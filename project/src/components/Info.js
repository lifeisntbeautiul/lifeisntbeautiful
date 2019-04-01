import React from 'react';

class Info extends React.Component{
  
    render(){
        return(
            <div> {this.props.borough && <div>
                <p> <b>Borough: </b>{this.props.countofad}{this.props.borough}</p>
                <p> <b>Disctrict:</b> {this.props.location}</p>
                <p> <b>Date: </b> {this.props.date}</p>
                <p> <b>Participating transport:</b>  {this.props.vehicle}</p>
                <p> <b>Age band: </b>{this.props.ageBand}</p>
                <p> <b>Age of the deceased:</b> {this.props.age}</p>
                <p> <b>Mode:</b>  {this.props.mode}</p>
                <p> <b>Class:</b> {this.props.class}</p>
                <p> <b>Severity:{this.props.countofad}</b> {this.props.severity}</p>
            </div> }
            <p>{this.props.error}</p>
            </div>
        );
    }
}
export default Info;

