import { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const removeGoalHandler = (removableGoal) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== removableGoal.id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem onPress={removeGoalHandler} goal={item} />
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    height: "100%",
  },
  goalsContainer: {
    flex: 5,
  },
});
