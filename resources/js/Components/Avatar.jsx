import React from 'react';

// Function to generate a color based on the string
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
}

const Avatar = ({ name }) => {
  // Generate a color based on the first two characters of the name
  const bgColor = stringToColor(name.slice(0, 4));

  return (
    <div className={`h-12 w-12 p-2 rounded-full flex items-center justify-center`} style={{ backgroundColor: bgColor }}>
      <span className="text-white font-semibold">
        {name ? name.slice(0, 2).toUpperCase() : ''}
      </span>
    </div>
  );
};

export default Avatar;
