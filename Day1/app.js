//creating an element is the core thing of the react.That;s why we are using React.createElement()
//React.createElement accepts the three arguments 1->What we want to create, 2-> Object 3-> what will be inside the element.
//the empty object is the place where we give attributes to the tags.

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ])
);
//This above code will look like
{
    /* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div> */
}
//When we have to make siblings then we can pass the array containing the tags or elements in the 3rd argument of createElement.

// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World From React!"
// );
//creating a root where we have to render the things is the function of DOM That's why we are using ReactDOM.createRoot
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//Completed till 53 minutes.
