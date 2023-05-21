import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="mx-20 my-20">
      <h1 className=" py-4 text-base text-gray-800 font-bold ">
        Question:What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
      </h1>
      <p className=" py-4 text-base text-gray-800  ">
        Answer:An access token is like a key that gives you permission to access
        certain things, like a special club or a locked room. It is given to you
        when you prove who you are and get permission. it is issued by an
        authentication server or authorization server after a user successfully
        authenticates and grants permission to access specific resources. It is
        a string of characters that represents the user authorization to
        access certain protected resources or perform specific actions.
        <br />A refresh token is a special key that helps you get a new access
        token when the old one expires. It is like having a spare key that you
        keep in a safe place. When your access token is about to expire, you can
        use the refresh token to ask for a new access token without having to
        prove who you are all over again.it is also issued by the authentication
        server or authorization server but serves a different purpose. While an
        access token is short-lived, a refresh token is typically long-lived and
        is used to obtain a new access token when the current one expires. we
        should store them in https cookies or localhost in the client site.
      </p>
      <h1 className=" py-4 text-base text-gray-800 font-bold ">
        Question:Compare SQL and NoSQL databases?
      </h1>
      <p className=" py-4 text-base text-gray-800  ">
        Answers: SQL databases are like organized tables with fixed structures.
        They work well when you have structured data and need to perform complex
        queries. SQL databases use a standardized language called SQL to
        retrieve and manipulate data. it is follow a structured, tabular data
        model, where data is organized into tables with predefined schemas. Each
        table consists of rows and columns, and relationships between tables are
        established using keys (primary keys and foreign keys).
        <br />
        NoSQL databases, on the other hand, are more flexible and can handle
        different types of data. They don not have a fixed table structure and
        allow for dynamic changes. NoSQL databases are great for handling
        unstructured or rapidly changing data. They can scale horizontally by
        adding more servers to handle large amounts of data and traffic. While
        they may sacrifice some consistency, NoSQL databases provide high
        performance and scalability for applications that require flexibility
        and scalability.
      </p>
      <h1 className=" py-4 text-base text-gray-800 font-bold ">
        Question:What is express js?
      </h1>
      <p className=" py-4 text-base text-gray-800  ">
        Answer: Express.js is a popular web application framework for Node.js, a
        runtime environment for executing JavaScript on the server-side. It
        provides a minimal and flexible set of tools and features to build web
        applications and APIs. Express.js simplifies the process of creating
        server-side applications by providing a lightweight and unopinionated
        framework. Express.js allows developers to handle HTTP requests and
        responses, define routes, handle middleware, and implement various
        features needed for web applications. It provides a routing mechanism
        that enables developers to define different routes for different URLs
        and HTTP methods, allowing for easy organization and handling of
        requests.
      </p>

      <h1 className=" py-4 text-base text-gray-800 font-bold ">
        Question:What is Nest JS?
      </h1>
      <p className=" py-4 text-base text-gray-800  ">
        Next.js is a popular open-source framework built on top of React.js, a
        JavaScript library for building user interfaces. It provides a set of
        tools and features to simplify the development of server-rendered React
        applications. Next.js extends React capabilities by adding server-side
        rendering (SSR), static site generation (SSG), and other performance
        optimizations
      </p>
      <h1 className=" py-4 text-base text-gray-800 font-bold ">
        Question:What is MongoDB aggregate and how does it work?
      </h1>
    </div>
  );
};

export default Blog;
