import React from 'react';

const ChatDisplay = ({ messages, auth }) => {
    return (
        <div class="flex flex-col mt-5">
            {messages.data && messages.data.map(message => (
                <div>
                    {message.user_id == auth.user.id && (
                        <div class="flex justify-end mb-4">
                            <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                {message.message}
                            </div>
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                class="object-cover h-8 w-8 rounded-full"
                                alt=""
                            />
                        </div>
                    )}
                    {message.sender_id == auth.user.id && (
                        <div class="flex justify-start mb-4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                class="object-cover h-8 w-8 rounded-full"
                                alt=""
                            />
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
