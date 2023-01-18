import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

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
      <TextInput
        placeholder="Your course goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={onPress} />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancel} />
        </View>
      </View>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
