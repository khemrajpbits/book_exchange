import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import UserList from '@/Components/UserList';
import MessageInput from '@/Components/MessageInput';
import ChatDisplay from '@/Components/ChatDisplay';

export default function index({ auth, error }) {
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetch('/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching user:', error));
    }, []);

    const fetchMessages = (userId) => {
        // Fetch messages for the selected user
        fetch(`/api/messages/fetch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),
        })
            .then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error('Error fetching messages:', error));
    };

    const sendMessage = (message) => {
        fetch(`/api/messages/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message, sender_id: selectedUser, user_id: auth.user.id }),
        })
            .then(response => response.json())
            .then(data => {
                setMessages([messages, data]);
                setNewMessage('');
            })
            .catch(error => console.error('Error sending message:', error));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Messages</h2>
            }
        >
            <Head title="Messages" />
            <div class="container mx-auto shadow-lg rounded-lg">
                <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <div class="font-semibold text-2xl">Chat</div>
                    <div class="w-1/2">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="search IRL"
                            class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
                        />
                    </div>
                    <div
                        class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
                    >
                        {auth.user.name ? auth.user.name.charAt(0) + auth.user.name.charAt(1) : ''}
                    </div>
                </div>
                <div class="flex flex-row justify-between bg-white">
                    <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                        <div class="border-b-2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="search chatting"
                                class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                            />
                        </div>
                        <div className="overflow-y-auto max-h-screen-80">
                            <UserList users={users} setSelectedUser={setSelectedUser} fetchMessages={fetchMessages} />
                        </div>
                    </div>
                    <div class="w-full px-5 flex flex-col justify-between">
                        <ChatDisplay auth={auth} messages={messages} />
                        <MessageInput newMessage={newMessage} setNewMessage={setNewMessage} sendMessage={sendMessage} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
