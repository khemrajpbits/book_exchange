import{j as e}from"./app-BkcKZ2ns.js";import{A as t}from"./AuthenticatedLayout-DDJp9JY8.js";import"./transition-C9lfqj3C.js";function x({auth:s}){return e.jsx(t,{user:s.user,header:e.jsx("h2",{class:"font-semibold text-xl text-gray-800 leading-tight",children:"Exchange Request List"}),children:e.jsxs("div",{className:"container mx-auto pt-8 pb-8",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold"}),e.jsx("a",{href:route("exchange_requests.create"),className:"bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded",children:"Create Exchange"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2",children:"SENDER_ID"}),e.jsx("th",{className:"px-4 py-2",children:"RECEIVER_ID"}),e.jsx("th",{className:"px-4 py-2",children:"BOOK_ID"}),e.jsx("th",{className:"px-4 py-2",children:"REQUEST_STATUS"}),e.jsx("th",{className:"px-4 py-2",children:"DELIVERY_METHOD"}),e.jsx("th",{className:"px-4 py-2",children:"ADDRESS"}),e.jsx("th",{className:"px-4 py-2",children:"DURATION"})]})}),e.jsx("tbody",{})]})})]})})}export{x as default};