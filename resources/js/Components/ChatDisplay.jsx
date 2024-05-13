import React from 'react';
import Avatar from '@/Components/Avatar';

const ChatDisplay = ({ messages, auth, selectedUser }) => {
    return (
        <div class="flex flex-col mt-5 overflow-y-auto max-h-screen-80">
            {messages.data && messages.data.map(message => (
                <div>
                    {message.user_id == auth.user.id && message.sender_id == selectedUser && (
                        <div class="flex justify-end mb-4">
                            <div class="mr-2 py-3 px-4 bg-blue-900 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <span class="text-sm font-semibold text-gray-900 dark:text-white">{message.user.name}</span>
                                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{message.created_at}</span>
                                </div>
                                <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message.message}</p>
                                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>

                            </div>
                            <Avatar name={message.user.name} />
                        </div>
                    )}
                    {message.sender_id == auth.user.id && message.user_id == selectedUser && (
                        <div class="flex justify-start mb-4">
                            <Avatar name={message.user.name} />
                            <div class="ml-2 py-3 px-4 bg-blue-900 rounded-br-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <span class="text-sm font-semibold text-gray-900 dark:text-white">{message.user.name}</span>
                                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{message.created_at}</span>
                                </div>
                                <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message.message}</p>
                                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>

                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
export default ChatDisplay;
