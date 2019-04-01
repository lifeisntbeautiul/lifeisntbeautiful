import React from 'react';

class Stats extends React.Component{
    render(){
        return(
            <div>
            <form onSubmit={this.props.getDecease}>
                <button>Get stats about decased people</button>
            </form>
            <form onSubmit={this.props.getStats}>
                 <button>Interesting fact!</button>
            </form>
          </div>
        );
    }
}
export default Stats;