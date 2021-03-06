import React from "react";
import { Text, Platform } from "react-native";
import styled from "styled-components";
import Layout from "../../constants/Layout";
import Loader from "../../components/Loader";
import Icon from "../../components/TabBarIcon";
import FoodItem from "../../components/FoodItem";

const MainContainer = styled.View`
  flex: 1;
`;

const Container = styled.View`
  height: 13%;
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
  flex-direction: row;
  justify-content: center;
`;

const Input = styled.TextInput`
  background-color: #ededed;
  width: ${Layout.width / 1.4};
  border-radius: 20px;
  padding: 10px;
  margin-left: 10px;
`;

const SearchResults = styled.ScrollView`
  height: 87%;
`;

const Empty = styled.View`
padding-top:50px;
  justify-content:center;
  align-items:center;
`;

const EmptyText = styled.Text`
  font-size:20px;
  font-weight:bold;
`;

const SearchPresenter = ({
  loading,
  searchTerm,
  handleSearchUpdate,
  onSubmitEditing,
  results,
  changePartValue,
  changeValue,
  partNut,
  addFood
}) => (
  <MainContainer>
    <Container>
      <InputContainer>
        <Icon
          size={20}
          name={Platform.OS === "ios" ? "ios-search" : "md-search"}
        />
        <Input
          onChangeText={handleSearchUpdate}
          onSubmitEditing={onSubmitEditing}
          value={searchTerm}
          returnKeyType={"search"}
          placeholder="음식이름을 입력해주세요."
          placeholderTextColor="#cccccc"
        />
      </InputContainer>
    </Container>
    <SearchResults>
      {loading ? (
        <Loader />
      ) : results ? (
        results.map((result, index) => (
          <FoodItem
            key={index}
            result={result}
            changePartValue={changePartValue}
            changeValue={changeValue}
            partNut={partNut}
            addFood={addFood}
            isMine={false}
          />
        ))
      ) : (
        <Empty>
          <EmptyText>
            검색결과가 없습니다.
          </EmptyText>
          </Empty>
      )}
    </SearchResults>
  </MainContainer>
);

export default SearchPresenter;
