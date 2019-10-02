import React from "react";
import LunchPresenter from "./LunchPresenter";

export default class LunchContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { nut,changeValue },
        },
      },
    } = props;

    this.state = {
      nut,
      changeValue,
    };
  }

  changeValueB = (kcal, carbs, protein, fat) => {
    this.setState({
      kcal,
      carbs,
      protein,
      fat,
    });
  };
  render() {
    const {nut,changeValue}= this.state;
    return <LunchPresenter nut={nut} changeValue={changeValue} />;
  }
}
