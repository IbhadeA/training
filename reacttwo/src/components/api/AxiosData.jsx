import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AxiosData() {
  const [getPost, setGetPost] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(
        (response) => setGetPost(response.data)
        //   console.log(response.data, "response")
        //   console.log(response.data)
      );
  }, []);
  return (
    <>
      <h2>Data from Axios</h2>

      <ul>
        {getPost?.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}