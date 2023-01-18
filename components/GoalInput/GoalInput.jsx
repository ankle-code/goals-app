import { useState } from "react";
import { View, TextInput, Button, Image } from "react-native";

import styles from "./styles.js";

const GoalInput = ({ onAddGoal, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const onPress = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/goal.png")}
      />
      <TextInput
        placeholder="Your course goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={onPress} color="#b180f0" />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancel} color="#f30282" />
        </View>
      </View>
    </View>
  );
};

export default GoalInput;
