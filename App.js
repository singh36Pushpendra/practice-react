document.write("<h2>Piku Darbar</h2>");

// Creating a React element.
const heading2 = React.createElement("h2", {}, "JSX");
console.log(heading2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);
