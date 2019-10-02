import React from "react";
import { Text, Platform } from "react-native";
import styled from "styled-components";
import propType from "prop-types";
import { withNavigation } from "react-navigation";

const Container = styled.View``;

const Btn = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: red;
`;

const LunchPresenter = ({ navigation, nut, changeValue }) => (
  <Container>
    <Text>점심</Text>
    {/* <Btn onPress={()=>navigation.navigate("SearchScreen")}/> */}
    <Btn
      onPress={() => changeValue({ kcal: 10, carbs: 20, protein: 30, fat: 40 })}
    />
    <Btn onPress={() => navigation.navigate("SearchDetailScreen")} />
  </Container>
);

export default withNavigation(LunchPresenter);
