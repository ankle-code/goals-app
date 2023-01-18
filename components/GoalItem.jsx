import { StyleSheet, View, Text, Pressable } from "react-native";

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

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});
