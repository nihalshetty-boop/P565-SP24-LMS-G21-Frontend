import React, { useEffect, useRef, useState } from "react";
import { FirebaseApp } from "../lib/helper/firebaseClient";
import { db } from "../lib/helper/firebaseClient";
import { addDoc, collection, onSnapshot, orderBy, query, limit, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth(FirebaseApp);

const VapidKey = "BC0GtCYQzxxp4Y-HFrsQprkxb98-5BrQAHF13TLRf1_-lo8KkPQhSxjZnywU0sYtTA5dRGB_uW_X9h-5kzuCZek";

function CourseChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
      // Scroll to the bottom when new messages arrive
      if (scroll.current) {
        scroll.current.scrollIntoView({ behavior: "smooth" });
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      alert("Enter valid message");
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error gracefully, e.g., show error message to the user
    }
  };

  const handleKeyPress = (e) => {
    // Check if Enter key is pressed
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto 0', // Added marginTop
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        marginBottom: '20px'
      }}>University wide Chat</h2>
      <div className="messages-wrapper">
        {messages.map((message) => (
          <div key={message.id} style={{ marginBottom: '10px' }}>
            <strong style={{ fontWeight: 'bold', marginRight: '5px' }}>{message.name}:</strong> 
            <span style={{ display: 'inline-block' }}>{message.text}</span>
          </div>
        ))}
        {/* Dummy element for scrolling to bottom */}
        <span ref={scroll}></span>
      </div>
      {/* Text input for new message */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Call handleKeyPress function on key press
          style={{ flex: '1', marginRight: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          placeholder="Type your message here..."
        />
        {/* Button for sending new message */}
        <button onClick={handleSendMessage} style={{ padding: '8px', borderRadius: '50%', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#fff"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CourseChat;
