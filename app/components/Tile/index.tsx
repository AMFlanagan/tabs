import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export interface IProps {
  tile: string;
  placeHolder?: boolean;
}

const Tile: React.FC<IProps> = (props: IProps) => {
  return props.placeHolder ? (
    <View style={styles.placeHolderTile}>
      <Ionicons name="ios-add-circle" size={70} color="#fff" />
      <Text style={styles.placeHolderText}>Add New List</Text>
    </View>
  ) : (
    <View style={styles.tile}></View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "#fff",
    width: 300,
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  placeHolderTile: {
    backgroundColor: "#540b0e",
    width: 300,
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  placeHolderText: {
    color: "#fff",
  },
});
