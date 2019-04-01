import React from 'react';

class Form extends React.Component{
    render(){
        return(

            <form onSubmit={this.props.Method}>
                <p><b>Year (2005-2017): </b> </p>
                <input type="text" name="year" placeholder="enter the year" /><br></br>
                <p><b>ID of accident (0-45000): </b></p>
                <input type="text" name="number" placeholder="alayuk26@gmail.com" /><br></br>
                <hr></hr>
                <button>Get info</button>
            </form>
        );
    }
}
export default Form;