import React from 'react';
import Avatar from '@/Components/Avatar';

const UserList = ({ users, auth ,selectedUser, setSelectedUser, fetchMessages }) => {
    return (
        <div className="overflow-y-auto max-h-screen-80">
            {users.data && users.data.map(user => (
                // {user.id !== auth.user.id && ()}
                <div   className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 ${selectedUser === user.id ? 'border-l-8 border-t-2 border-blue-400' : ''}`} key={user.id} onClick={() => { setSelectedUser(user.id); fetchMessages(user.id); }}>
                    <div class="w-1/4">
                        {/* <img src="https://source.unsplash.com/_7LbC5J-jw4/600x600" class="object-cover h-12 w-12 rounded-full" alt="" />
                         */}
                    <Avatar name={user.name} />

                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">{user.name}</div>
                        <div class="text-lg font-semibold">{user.email}</div>
                        <span class="text-gray-500">Active</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
