import React, {Component} from 'react';
import './App.css';
import Chart from './Components/Chart';


class App extends Component {
constructor() {
super();
this.state = {
chartData: {}
}
}

componentWillMount(){
  this.getChartData();
}


getChartData(){

this.setState({
  chartData:{
    labels: ['CapeTown', 'Helsinki', 'Delhi', 'Pune', 'Kolkata', 'Thailand', 'Tallin'],
    datasets: [{
      label: 'Temperature',
      data: [38, 25, 36, 30, 30, 25, 25],
      backgroundColor: 'yellow',
      borderWidth: '4',
      borderColor: 'grey'
    }]
  }
});

}




render(){

  return (

    <div className="App">

      <div className="header">

        <h2>Welcome To React</h2>

      </div>
       <Chart chartData={this.state.chartData} />

       <h1> Created By : Anjana Sinha</h1>
    </div>
  );


}


}

export default App;
