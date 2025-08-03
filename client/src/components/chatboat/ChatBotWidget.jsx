// client/src/components/ChatBotWidget.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatBotWidget = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [greeted, setGreeted] = useState(false); // Track if greeted already

  const toggleChat = () => setIsOpen(!isOpen);

  // Only show greeting when chat is opened the first time
  useEffect(() => {
    if (isOpen && !greeted && user) {
      setChatLog([
        {
          sender: "bot",
          message: `👋 Hello${user?.name ? ", " + user.name : ""}! I'm Acash Tech's assistant.\nHow can I help you today?`,
        },
      ]);
      setGreeted(true);
    }
  }, [isOpen, greeted, user]);

  // Don't show chatbot if user not logged in
  if (!user) return null;

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newUserMsg = { sender: "user", message: userInput };
    setChatLog((prev) => [...prev, newUserMsg]);
    setUserInput("");
    setLoading(true);

    try {
      console.log("Current user:", user);

      const res = await axios.post("http://127.0.0.1:8000/chat", {
        user_query: userInput,
        user_id: user?._id || null,
        user_name: user?.name || null,  
      });

      setChatLog((prev) => [
        ...prev,
        { sender: "bot", message: res.data.response },
      ]);
    } catch (err) {
      console.error(err);
      setChatLog((prev) => [
        ...prev,
        { sender: "bot", message: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        title="Chat with Acash Assistant"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={toggleChat}
      >
        🤖
      </button>


      {isOpen && (
        <div className="mt-2 w-80 max-h-[75vh] bg-white border rounded-lg shadow-xl flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg font-semibold">
            Acash Tech Assistant
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {chatLog.map((msg, idx) => (
              <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
                {chatLog.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    {msg.sender === "bot" && (
                      <div className="flex items-start space-x-2 max-w-[80%]">
                        <div className="w-6 h-6 rounded-full bg-blue-200 text-center text-xs">
                          🤖
                        </div>
                        <div className="bg-gray-100 text-left px-3 py-2 rounded-lg">
                          {msg.message}
                        </div>
                      </div>
                    )}

                    {msg.sender === "user" && (
                      <div className="flex items-start space-x-2 max-w-[80%]">
                        <div className="bg-blue-100 text-right px-3 py-2 rounded-lg">
                          {msg.message}
                        </div>
                        <div className="w-6 h-6 rounded-full bg-blue-400 text-white text-xs flex items-center justify-center">
                          🙋‍♂️
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {loading && <div className="text-gray-400">Typing...</div>}
              </div>

            ))}
            {loading && <div className="text-gray-400">Typing...</div>}
          </div>

          <div className="flex items-center border-t p-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 px-2 py-1 text-sm border rounded mr-2 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotWidget;
