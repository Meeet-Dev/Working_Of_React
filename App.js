// Part One - Creating Normal Element 

const heading = React.createElement("h1", { id: "heading" || {} }, "Hello World from React!"); 
// You can pass an empty object if you don't have any attributes
// When you console heading it gives an object which is a representation of a DOM element in React world which is called React Element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// render method takes the heading convert it into h1 tag and puts it inside the root element which is the div with id root in index.html file and displays it on the browser window as a DOM element


// Part Two - Creating Nested Elements

const parent = React.createElement(
  "div", { id: "parent" }, 
  React.createElement("div" , {id:"child"} , 
  React.createElement("h1", {}, "I'm an h1 tag")));

// root.render(parent);

// Part Three - Creating Siblings - We can create siblings by passing an array of children

const parent1 = React.createElement(
  "div", 
  { id: "parent1" },
  React.createElement(
    "div", 
    { id: "child1" }, 
    [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
      React.createElement("h3", {}, "I'm an h3 tag")
    ]
  )
);


root.render(parent1);
