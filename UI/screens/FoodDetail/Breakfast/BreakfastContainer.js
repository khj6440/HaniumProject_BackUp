import React from "react";
import BreakfastPresenter from "./BreakfastPresenter";

export default class BreakfastContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { nutrient, changeValue, BreakfastNut },
        },
      },
    } = props;

    this.state = {
      nutrient,
      changeValue,
      BreakfastNut,
      newNut: { kcal: 0, carbs: 0, protein: 0, fat: 0 },
      // BreakfastNut: { kcal: 0, carbs: 0, protein: 0, fat: 0 },
    };
  }

  changeBreakfast = (BreakfastNut, newNut) => {
    const Sum = {
      kcal: parseInt(BreakfastNut.kcal) + parseInt(newNut.kcal),
      carbs: parseInt(BreakfastNut.carbs) + parseInt(newNut.carbs),
      protein: parseInt(BreakfastNut.protein) + parseInt(newNut.protein),
      fat: parseInt(BreakfastNut.fat) + parseInt(newNut.fat),
    };
    this.setState({
      // BreakfastNut:this.funca(BreakfastNut)
      BreakfastNut: Sum,
    });
    this.state.changeValue(BreakfastNut);
  };

  render() {
    const { BreakfastNut, changeValue, nutrient, newNut } = this.state;
    return (
      <BreakfastPresenter
        nutrient={nutrient}
        BreakfastNut={BreakfastNut}
        changeValue={changeValue}
        changeBreakfast={this.changeBreakfast}
        newNut={newNut}
      />
    );
  }
}
