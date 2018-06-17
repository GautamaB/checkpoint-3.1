import React from "react";
// import App from "./App";

const deadorAlive = [
  {
    status: "alive"
  }
];

const valueButton = ({ status }) => {
  const deadorAlive = status;
  // return <button>kill</button>;
  return (
    <button src="./public/icone/dead.png" alt="dead">
      dead
    </button>
  );
};

export default valueButton;

// const deadorAlive = [
//   {
//     status: "alive"
//   }
// ];

// export const deadorAlive = alive => {
//   if ((status = alive)) {
//     return <button>kill</button>;
//   } else {
//     return (
//       <button src="./public/icone/dead.png" alt="dead">
//         dead
//       </button>
//     );
//   }
// };
