import React from "react";
import SearchDetailPresenter from "./SearchDetailPresenter";

export default class SearchDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { changeBreakfast,BreakfastNut, result,newNut },
        },
      },
    } = props;

    this.state = {
      changeBreakfast,
      BreakfastNut,
      result,
      newNut
    };
  }

  render() {
    const { result, BreakfastNut,changeBreakfast,newNut } = this.state;
    return (
      <SearchDetailPresenter
        result={result}
        changeBreakfast={changeBreakfast}
        BreakfastNut={BreakfastNut}
        newNut={newNut}
      />
    );
  }
}
