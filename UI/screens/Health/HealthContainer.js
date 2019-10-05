import React from "react";
import { Pedometer } from "expo-sensors";
import HealthPresenter from "./HealthPresenter";

export default class HealthContainer extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error,
        });
      },
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error,
        });
      },
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    const {
      isPedometerAvailable,
      pastStepCount,
      currentStepCount,
    } = this.state;
    return (
      <HealthPresenter
        isPedometerAvailable ={isPedometerAvailable}
        pastStepCount = {pastStepCount}
        currentStepCount ={currentStepCount}
      ></HealthPresenter>
    );
  }
}