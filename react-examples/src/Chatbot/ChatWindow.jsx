import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const initialChats = {
  0: [{ sender: "bot", text: "Hello! How can I help you today?" }],
  1: [{ sender: "bot", text: "Welcome to Chat 2!" }],
  2: [{ sender: "bot", text: "This is Chat 3 — ask anything!" }],
};

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState(initialChats);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };

    const botMsg = {
      sender: "bot",
      text: input.toLowerCase().includes("hours")
        ? "Our hours are 9 AM to 5 PM, Monday through Friday."
        : "Thanks for your message!",
    };

    setMessages((prev) => ({
      ...prev,
      [chatId]: [...prev[chatId], userMsg, botMsg],
    }));

    setInput("");
  };

  return (
    <Box sx={{ flex: 1, padding: 2, display: "flex", flexDirection: "column" }}>
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          paddingBottom: 1,
          borderBottom: "1px solid #ddd",
          marginBottom: 2,
        }}
      >
        Chatbot
      </Typography>

      {/* Chat Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          paddingRight: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {messages[chatId].map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              maxWidth: "70%",
            }}
          >
            <Paper
              elevation={1}
              sx={{
                padding: "10px 15px",
                bgcolor: msg.sender === "user" ? "grey.700" : "grey.200",
                color: msg.sender === "user" ? "white" : "black",
                borderRadius: 2,
              }}
            >
              {msg.text}
            </Paper>
            <Typography
              variant="caption"
              sx={{ marginTop: "4px", alignSelf: "flex-end" }}
            >
              {msg.sender === "user" ? "You" : "Bot"}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Input Area */}
      <Box sx={{ display: "flex", marginTop: 2, gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <Button
          variant="contained"
          onClick={sendMessage}
          sx={{ paddingX: 3 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
