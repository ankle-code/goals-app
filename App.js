import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Modal } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    modalVisibilityHandler();
  };

  const removeGoalHandler = (removableGoal) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== removableGoal.id));
  };

  const modalVisibilityHandler = () => setIsModalVisible((prev) => !prev);

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={modalVisibilityHandler}
      />
      <Modal visible={isModalVisible} animationType="slide">
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={modalVisibilityHandler}
        />
      </Modal>
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
