import React from "react";
import { InputMessageTypeUnion, InputProps } from "./Input";

export default function useInput({ msg }: InputProps) {
  const [messageType, setMessageType] =
    React.useState<InputMessageTypeUnion>(null);
  const [messageText, setMessageText] = React.useState("");

  const renderMessage = () => {
    switch (msg?.type) {
      case "info":
        setMessageType("info");
        break;
      case "error":
        setMessageType("error");
        break;
      case "pass":
        setMessageType("pass");
        break;

      default:
        setMessageType(null);
        break;
    }
    setMessageText(msg ? msg.title : "");
  };

  React.useEffect(() => {
    renderMessage();
  }, [msg]);

  return { messageType, messageText };
}
