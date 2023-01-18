import { useState } from "react";
import { View, FlatList, Button, Modal } from "react-native";
import GoalInput from "./components/GoalInput/GoalInput";
import GoalItem from "./components/GoalItem/GoalItem";
import { StatusBar } from "expo-status-bar";

import styles from "./styles.js";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText) {
      setGoals((prev) => [
        ...prev,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      modalVisibilityHandler();
    }
  };

  const removeGoalHandler = (removableGoal) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== removableGoal.id));
  };

  const modalVisibilityHandler = () => setIsModalVisible((prev) => !prev);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
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
    </>
  );
}
