import React from "react";

const Blogs = () => {
  return (
    <div className=" mx-10 h-screen">
      
      <h1 className=" font-serif text-xl font-bold text-gray-800">
        1. When should you use nodejs and when should you use mongodb
      </h1>
      <p>
        Nodejs is a Javascript engine that can be used to create any application
        (by programming in the Javascript language). It executes Javascript
        code. It is most typically used to create web servers, but it may also
        be used to create a variety of other types of programming. MongoDB is a
        database management system. MongoDB is used by code within an
        application or server to save, query, and update data in a database.
        Many web servers developed with Node.js will store data in MongoDB.
      </p>{" "}
      <br />
      <hr />
      <h1 className=" font-serif text-xl font-bold text-gray-800">
        2. Difference between javascript and nodejs
      </h1>
      <p>
        For one online application, JavaScript is typically utilized for any
        client-side activities. Node JS, on the other hand, is mostly used for
        non-blocking operations on any operating system. JavaScript is a simple
        programming language that runs on the JavaScript Engine in any browser.
        Node JS, on the other hand, is a runtime environment for the JavaScript
        programming language. Therefore has several flaws, and it necessitates
        libraries that can be easily accessed from JavaScript programming to
        make it work better.
      </p>
      <br />
      <hr />
      <h1 className=" font-serif text-xl font-bold text-gray-800">
        3. Differences between sql and nosql databases.
      </h1>
      <p>
        SQL databases scale vertically, but NoSQL databases scale horizontally.
        NoSQL databases are document, key-value, graph, or wide-column stores,
        whereas SQL databases are table-based. SQL databases excel in multi-row
        transactions, while NoSQL excels at unstructured data like documents and
        JSON.
      </p>
    </div>
  );
};

export default Blogs;
