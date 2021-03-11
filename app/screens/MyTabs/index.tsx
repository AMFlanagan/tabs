import React from "react";
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import { Card } from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import TileList from "../../components/TileList";
import { IState } from "../../state/reducers";
import AddCategoryForm from "../../components/AddCategoryForm";
import Modal from "react-native-modal";

const MyTabs: React.FC = () => {
  const categories: string[] = useSelector(
    (state: IState) => state.categories.categories
  );

  let [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Card.Title title={"My Tabs"} />
      </View>
      <Modal
        isVisible={modalVisible}
        swipeDirection="down"
        onSwipeComplete={() => {
          setModalVisible(false);
        }}
        style={styles.modal}
      >
        <View style={styles.modalInner}>
          <AddCategoryForm setModalVisible={setModalVisible} />
        </View>
      </Modal>
      <ScrollView style={styles.categoryList}>
        {categories.map((category, i) => (
          <View key={i} style={styles.tileListContainer}>
            <TileList title={category} />
          </View>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.button}
      >
        <Ionicons name="ios-add-circle" size={70} color="#e09f3e" />
      </Pressable>
    </SafeAreaView>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "scroll",
    backgroundColor: "#fff",
    marginTop: Platform.OS === "ios" ? 20 : 20 + StatusBar.currentHeight,
  },
  categoryList: {
    overflow: "scroll",
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 50,
  },
  tileListContainer: {
    height: 200,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalInner: {
    bottom: 0,
    width: "100%",
    height: "75%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
