import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.updateTime()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  updateTime() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Timer;