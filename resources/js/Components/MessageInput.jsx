import { useState, createContext, useContext, Fragment } from 'react';


const MessageInput = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            sendMessage(message);
            // fetchMessages();
            setMessage('');
        }
    };
    return (
        <div class="py-5">
            <form onSubmit={handleSubmit}>
                <input type="text" class="w-full bg-gray-300 py-5 px-3 rounded-xl" value={message} onChange={handleMessageChange} placeholder="Type your message..." />
            </form>
        </div>
    );
};

export default MessageInput;
