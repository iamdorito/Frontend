import { createContext, useState } from "react";
import axios from "axios";

export const CommentContext = createContext();

export const CommentContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await axios.get("http://localhost:3000/comments");
    setComments(response);
  };

  const value = {
    getComments,
    comments,
    setComments,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};
