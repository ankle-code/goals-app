import { View, Text, Pressable } from "react-native";

import styles from "./styles.js";

const GoalItem = ({ onPress, goal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onPress.bind(this, goal)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
