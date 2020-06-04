import React, {
  Component
} from 'react';
import {
  Bar,
  Line,
  Pie
} from 'react-chartjs-2';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {chartData: props.chartData}
  }

 static defaultProps ={
  displayTitle: true,
  displayLegend: true,
 }


  render() {
    return (

      <div className = "chart" width={100}
 height={50}>
      <Bar data = {this.state.chartData}
      options = {
        {
          options: {
            title: {
              display: this.props.displayTitle,
              text: 'cities of world',
              fontSize: '100'
            },
            legend: {
              display: this.props.displayLegend,
              position: 'right',
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
              },
            },
          }
        }
      }
      />

      </div>



    );

  }

}

export default Chart;
