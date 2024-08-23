import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const BookmarkButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
      </Svg>
      <Text style={styles.buttonText}>Add Task</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#488aec",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

export default BookmarkButton;
