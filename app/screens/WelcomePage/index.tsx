import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";

interface IProps {
  setLoggedIn: (val: boolean) => void;
}

const WelcomeScreeen: React.FC<IProps> = (props: IProps) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <Text>Keep Tabs On Your Tabs</Text>
      </View>
      <View style={styles.loginButton}>
        <Button
          title="Login"
          onPress={() => {
            props.setLoggedIn(true);
          }}
        />
      </View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

export default WelcomeScreeen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});
