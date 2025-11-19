import React, { useState } from "react";
import { Box, List, ListItemButton, ListItemText, Divider } from "@mui/material";
import ChatWindow from "./ChatWindow";

const ChatApp = () => {
  const [activeChat, setActiveChat] = useState(0);
  const chats = ["Chat 1", "Chat 2", "Chat 3"];

  return (
    <Box
      sx={{
        display: "flex",
        width: "90%",
        height: "600px",
        margin: "30px auto",
        border: "1px solid #ccc",
        borderRadius: "12px",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "25%",
          borderRight: "1px solid #ddd",
          bgcolor: "#fafafa",
        }}
      >
        <List>
          {chats.map((chat, index) => (
            <React.Fragment key={index}>
              <ListItemButton
                selected={activeChat === index}
                onClick={() => setActiveChat(index)}
              >
                <ListItemText primary={chat} />
              </ListItemButton>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Chat Window */}
      <ChatWindow chatId={activeChat} />
    </Box>
  );
};

export default ChatApp;
