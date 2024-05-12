import React from 'react';

const UserList = ({ users, setSelectedUser, fetchMessages }) => {
    return (
        // <div className="user-list">
        //     <h3>User List</h3>
        //     <ul>
        //         {users.map(user => (
        //             <li key={user.id} onClick={() => { setSelectedUser(user.id); fetchMessages(user.id); }}>
        //                 {user.name}
        //             </li>
        //         ))}
        //     </ul>
        // </div>

        <div className="overflow-y-auto max-h-screen-80">
            {users.data && users.data.map(user => (
                <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2" key={user.id} onClick={() => { setSelectedUser(user.id); fetchMessages(user.id); }}>
                    <div class="w-1/4">
                        <img src="https://source.unsplash.com/_7LbC5J-jw4/600x600" class="object-cover h-12 w-12 rounded-full" alt="" />
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">{user.name}</div>
                        <div class="text-lg font-semibold">{user.email}</div>
                        <span class="text-gray-500">Pick me at 9:00 Am</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
