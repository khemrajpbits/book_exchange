import React from 'react';
import Avatar from '@/Components/Avatar';

const ChatDisplay = ({ messages, auth , selectedUser}) => {
    return (
        <div class="flex flex-col mt-5 overflow-y-auto max-h-screen-80">
            {messages.data && messages.data.map(message => (
                <div>
                    {message.user_id == auth.user.id && message.sender_id == selectedUser && (
                        <div class="flex justify-end mb-4">
                            <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                {message.message}
                            </div>
                            <Avatar name={message.user.name} />
                        </div>
                    )}
                    {message.sender_id == auth.user.id && message.user_id == selectedUser && (
                        <div class="flex justify-start mb-4">
                            <Avatar name={message.user.name} />
                            <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                {message.message}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
export default ChatDisplay;
