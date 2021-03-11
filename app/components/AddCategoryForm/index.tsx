import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Text,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { addCategory } from "../../state/actions/categories";

interface IProps {
  setModalVisible: any;
}

const AddCategoryForm: React.FC<IProps> = (props: IProps) => {
  const [value, onChangeText] = React.useState("");

  const dispatch = useDispatch();

  const saveCategory = (value: string) => {
    if (value.length < 1) {
      Alert.alert("Nothing Value Entered");
      return;
    }

    Alert.alert(
      `Add Category "${value}"`,
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(addCategory(value));
            props.setModalVisible(false);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>New Category</Text>
        <TextInput
          style={{
            position: "relative",
            borderRadius: 10,
            height: 50,
            fontSize: 20,
            borderColor: "#540b0e",
            borderWidth: 2,
            paddingHorizontal: 10,
            alignSelf: "stretch",
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
      <View style={styles.buttons}>
        <Pressable
          onPress={() => {
            props.setModalVisible(false);
          }}
          style={styles.cancel}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            saveCategory(value);
          }}
          style={styles.save}
        >
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddCategoryForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
  },
  form: {
    marginTop: 40,
    marginHorizontal: 20,
    color: "#540b0e",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: "#540b0e",
    fontSize: 30,
    margin: 20,
    textAlign: "center",
  },
  cancel: {
    width: 150,
    height: 50,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#540b0e",
  },
  save: {
    width: 150,
    height: 50,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "#540b0e",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelText: {
    color: "#540b0e",
  },
  saveText: {
    color: "white",
  },
});
