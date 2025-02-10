import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";

export default function DashboardScreen() {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [keywords, setKeywords] = useState("");

  const generateMessage = async () => {
    if (!recipient || !sender || !keywords) {
      alert("All fields are required");
      return;
    }

    const response = await axios.post("http://localhost:5000/api/messages/generate", {
      recipient,
      sender,
      keywords
    });

    setMessage(response.data.message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AutoMessage AI Dashboard</Text>
      <TextInput
        style={styles.input}
        placeholder="Recipient Name"
        value={recipient}
        onChangeText={setRecipient}
      />
      <TextInput
        style={styles.input}
        placeholder="Sender Name"
        value={sender}
        onChangeText={setSender}
      />
      <TextInput
        style={styles.input}
        placeholder="Keywords (e.g., love, happiness)"
        value={keywords}
        onChangeText={setKeywords}
      />
      <TouchableOpacity style={styles.button} onPress={generateMessage}>
        <Text style={styles.buttonText}>Generate Message</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: { width: "80%", padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: "#28A745", padding: 10, borderRadius: 5 },
  buttonText: { color: "white", fontSize: 16 },
  message: { marginTop: 20, padding: 10, borderWidth: 1, borderRadius: 5, backgroundColor: "white" },
});
