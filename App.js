import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderHeightContext,
} from "@react-navigation/stack";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
  },
  headerButton: {
    width: 100,
  },
  button: {
    flex: 1,
  },
  text: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  innerText: {
    alignSelf: "center",
    textAlign: "center",
  },
});

function ScreenHeader({ title, leftButton, rightButton, style }) {
  return (
    <View style={[style, styles.header]}>
      <View style={styles.headerButton}>{leftButton}</View>
      <View style={styles.text}>
        <Text style={styles.innerText}>{title}</Text>
      </View>
      <View style={styles.headerButton}>{rightButton}</View>
    </View>
  );
}

function ScreenHeaderButton({ onPress }) {
  return <Button title="Sample" onPress={onPress} style={styles.button} />;
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go" onPress={() => navigation.navigate("Inner")} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: ({ children }) => <Text>{children}</Text>,
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerLeft: ({ canGoBack, ...rest }) => {
            console.log(rest);
            return canGoBack ? (
              <Button onPress={() => navigation.goBack()} title="Back" />
            ) : undefined;
          },
          headerBackground: () => (
            <View
              style={[{ backgroundColor: "red" }, StyleSheet.absoluteFill]}
            />
          ),
        })}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Inner"
          component={HomeScreen}
          options={{ title: "Inner" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// header: ({ scene, previous, navigation }) => {
//   const { options } = scene.descriptor;
//   const title =
//     options.headerTitle !== undefined
//       ? options.headerTitle
//       : options.title !== undefined
//       ? options.title
//       : scene.route.name;
//   return (
//     <ScreenHeader
//       title={title}
//       leftButton={
//         previous ? (
//           <ScreenHeaderButton onPress={navigation.goBack} />
//         ) : undefined
//       }
//       style={options.headerStyle}
//     />
//   );
// },
// header: ({ scene, previous, navigation }) => {
//   const { options } = scene.descriptor;
//   const title =
//     options.headerTitle !== undefined
//       ? options.headerTitle
//       : options.title !== undefined
//       ? options.title
//       : scene.route.name;
//   return (
//     <View style={options.headerStyle}>
//       {previous ? <Text>Back</Text> : undefined}
//       <Text>{title}</Text>
//     </View>
//   );
// },
// headerMode: "screen",
// headerStyle: {
//   height: 64,
//   // paddingTop: 20,
// },
