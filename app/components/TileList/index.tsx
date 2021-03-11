import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Tile from "../Tile";

export interface IProps {
  title: string;
}

const subCategories = [];

const TileList: React.FC<IProps> = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <ScrollView horizontal={true} style={styles.list}>
        {subCategories.map((tile, i) => (
          <Tile key={i} tile={tile} />
        ))}
        <Tile tile={"PlaceHolder"} placeHolder={true} />
      </ScrollView>
    </View>
  );
};

export default TileList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#540b0e",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  list: {},
});
