import React from "react";
import Person from "./Person";

export default function App() {
  return (
    <div className="App">
      <Person
        products={[
          { id: 1, name: "Mayur", lname: "Lalwani" },
          { id: 2, name: "BBB", lname: "CCC" },
          { id: 3, name: "Brad", lname: "Dev" },
          { id: 4, name: "Nick", lname: "Doe" },
          { id: 5, name: "Rose", lname: "Xyz" },
          { id: 6, name: "Mary", lname: "Asdf" },
          { id: 7, name: "Atul", lname: "Shrivastava" },
          { id: 8, name: "DDD", lname: "EEE" },
          { id: 9, name: "XYZ", lname: "YYY" }
        ]}
      />
    </div>
  );
}
