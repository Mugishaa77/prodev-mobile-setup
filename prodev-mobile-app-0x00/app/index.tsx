import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First App Created</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 20, fontWeight: "600" },
});
