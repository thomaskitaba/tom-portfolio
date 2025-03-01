import React, { useState, useContext } from "react";
import axios from "axios";
import MyContext from "./MyContext";

const Gemini = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { endpoint, myApiKey } = useContext(MyContext); // Removed myApiKey since we're using backend-side key
  
  const handleSubmit = async (prompt) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${endpoint}/api/ask-gemini`,
        { prompt },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": myApiKey
          },
          timeout: 15000
        }
      );
  
      setResponse(response.data.response);
    } catch (error) {
      console.error("Full Error Object:", error);
      const serverMessage = error.response?.data?.error || error.message;
      const detailedMessage = error.response?.data?.details 
        ? JSON.stringify(error.response.data.details, null, 2)
        : '';
      setResponse(`Error: ${serverMessage} ${detailedMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={5}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={() => handleSubmit(inputText)}
        disabled={isLoading}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>
      {response && (
        <div style={{ marginTop: "20px" }}>
          <p style={{ 
            whiteSpace: "pre-wrap", 
            background: "#f5f5f5", 
            padding: "10px", 
            borderRadius: "5px" 
          }}>
            {response}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gemini;