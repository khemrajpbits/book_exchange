import{j as i}from"./app-CVokGI1I.js";import{A as s}from"./AuthenticatedLayout-P3mKfpc2.js";import"./ApplicationLogo-CYPN0XXS.js";import"./transition-D4_h9Iwk.js";const d=({book:r})=>i.jsx(s,{children:i.jsxs("div",{children:[i.jsx("h1",{children:r.title}),i.jsxs("p",{children:[i.jsx("strong",{children:"Author:"})," ",r.author]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Genre:"})," ",r.genre]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Book Condition:"})," ",r.book_condition]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Availability Status:"})," ",r.availability_status]}),i.jsxs("p",{children:[i.jsx(InertiaLink,{href:route("books.edit",{book:r.id}),children:"Edit"})," |",i.jsx(InertiaLink,{href:route("books.index"),children:"Back to all books"})]})]})});export{d as default};