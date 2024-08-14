import React, { useState, useEffect } from "react";

export default function FetchingData() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // fetch data using fetch API

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
      // .catch((error) => console.error("API error", error));
  }, []);

  return (
    <>
      <div>
        <h2>Posts from free API </h2>

        <ul>
          {posts?.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p></li>
          ))}
        </ul>
      </div>

    </>
   
  );
}


// API is application programming interfaces

// APIs are set if rules that define how different software applications can communicate or interact with each other

// Define methods, data formats that apps can use to request and exchange information

// RestFUL APIs involves fetching data from endpoints (urls) and handles the responses they provides

// fetch() or axios

// useeffect hook is a built in hook that allows us to perform side effects in your components

// takes tow arguments - callback function that contains the side effec code the dependency array that tells reavt when to run the effect