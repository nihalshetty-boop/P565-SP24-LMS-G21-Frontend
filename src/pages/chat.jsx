import React, { useState } from 'react';



// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase



// Initialize Firebase Cloud Messaging and get a reference to the service

function CourseChat({ messages }) {
  // Sample messages array for testing
  const sampleMessages = [
    { id: 1, sender: 'Alice', content: 'Hello there!' },
    { id: 2, sender: 'Bob', content: 'Hi Alice!' },
    { id: 3, sender: 'Alice', content: 'How are you?' },
    { id: 4, sender: 'Bob', content: 'I\'m good, thanks!' }
  ];

  // Use messages from props if available, otherwise use an empty array
  const messagesToDisplay = messages || sampleMessages;

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Logic for sending a new message
    // This can be implemented based on your requirements
    console.log('New message:', newMessage);
    // Clear the text input after sending the message
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    // Check if Enter key is pressed
    if (e.key === 'Enter') {
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
      }}>Course Chat</h2>
      <ul style={{
        listStyleType: 'none',
        padding: '0'
      }}>
        {messagesToDisplay.map(message => (
          <li key={message.id} style={{ marginBottom: '10px' }}>
            <strong style={{ fontWeight: 'bold', marginRight: '5px' }}>{message.sender}:</strong> 
            <span style={{ display: 'inline-block' }}>{message.content}</span>
          </li>
        ))}
      </ul>
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
