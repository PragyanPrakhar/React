import React from "react";
import ReactDOM from "react-dom/client";

//React Element-> It is basically an object.

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);

//JSX-> This jsx code is tramnspliled before it reaches the JS.It is done by Parcel.
//This below code is basically converted into the React.createElement before going to the browser.It is done by babel.
const element=<span>React Element</span>
const Title = () => <h1 className="head">Namaste React Using JSX</h1>;

// console.log(Heading);

//React Functional Component
const HeadingComponent = () => (
    <div id="container">
        {/* <h2>{100+200}</h2>   we can also put js code into the jsx */}

        {/* //if we want to simply write js code inside the component then we will simply write into the curly braces */}
        {/* The below three codes of Title is same.   */}
        {/* {Title()} */}
        {/* <Title></Title> */}
        <Title/>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
//when we want to render HeadingComponent then we can't do like root.render(HeadingComponent) because this was was for reactElement but when we want to render component then we will render like root.render(<HeadingComponent/>)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
