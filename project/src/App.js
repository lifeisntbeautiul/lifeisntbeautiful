import React from 'react';
import Form from './components/Form';
import Info from './components/Info';
import Stats from './components/Stats';
import './App.css';

var countofad = 0;
var countofch = 0;
class App extends React.Component{
   state = {
     borough : undefined,
     date : undefined,
     location : undefined,
     severity : undefined,
     age: undefined,
     ageBand : undefined,
     class : undefined,
     mode : undefined,
     vehicle : undefined,
     error : undefined
   }
   gettingStatsDec = (e) =>{
     e.preventDefault();
     alert('Count of decased in adult age:   ' + countofad + ' '+' Count of deceased in child age: ' + countofch);
    
    }
   gettingStats = (e) =>{
    e.preventDefault();
    alert('There is a legend that a ghost bus travels along the roads of London. They say that at the intersection of St. Marks Road and Cambridge Gardens often see bus number 7, which suddenly appears and just as suddenly disappears. Perhaps this story is so popular also because there have been many accidents at this place under mysterious circumstances.');
  }
   gettingForm = async (e) => {
    const year = e.target.elements.year.value;
    var number = e.target.elements.number.value;
    if (number == false || number > 45000 || number < 1) {
      number=0;
    }
    e.preventDefault();
    if (year){
    if(year > 2004 && year < 2018){
    const url = await fetch(`https://api.tfl.gov.uk/AccidentStats/${year}`);
    const data = await url.json();
   
    var leng = data.length;  
    var stock = data[0].casualties[0].ageBand;
    for (var i = 0; i < leng; i++){
    var dynamic = data[i].casualties[0].ageBand;
    if (stock == dynamic){
      countofad++;
    } else{
      countofch++;
    }
  }
  if (countofad > 50000 && countofch >= 7000){
    countofad = countofad / 2;
    countofch = countofch / 2;
   } 
   

   this.setState({
     borough : data[number].borough,
     date : data[number].date,
     location : data[number].location,
     severity : data[number].severity,
     age: data[number].casualties[0].age,
     ageBand : data[number].casualties[0].ageBand,
     mode: data[number].casualties[0].mode,
     class : data[number].casualties[0].class,
     vehicle : data[number].vehicles[0].type,
     error : undefined
   });
    } else {
      this.setState({
        borough : undefined,
        date : undefined,
        location : undefined,
        severity : undefined,
        age: undefined,
        ageBand : undefined,
        class : undefined,
        mode : undefined,
        vehicle: undefined,
        error : "Enter the year for which you want to receive statistics in range from 2005 to 2017!"
    });
    
   }} else {
     alert('Enter the year for which you want to receive statistics in range from 2005 to 2017!');
   }
  }
  
  render(){
    const self = this;
    return(
      <div className="main">
       <div className="header">
        <h1>In this application, you can check the various consequences of accidents and 
        the average age group of people who fall into accidents in London.</h1>
       </div>
       <div className="child">
        <Form Method={self.gettingForm}  />
        <Stats getStats={this.gettingStats} getDecease = {this.gettingStatsDec}>

        </Stats>
        <Info 
             adults = {this.state.countofad}
             borough = {this.state.borough}
             date = {this.state.date}
             location = {this.state.location}
             severity = {this.state.severity}
             mode = {this.state.mode}
             age = {this.state.age}
             ageBand = {this.state.ageBand}
             class = {this.state.class}
             vehicle = {this.state.vehicle}
             error = {this.state.error}
        ></Info>
        </div>
      </div>
    );
}
}
export default App;