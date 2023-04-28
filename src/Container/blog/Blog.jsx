import React from "react";
import { Article } from "../../Components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="react__blog section__padding" id="blog">
    <div className="react__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="react__blog-container">
      <div className="react__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Oct 31, 2023"
          text="React Quantum: The Future of UI Development is Here - A Sneak Peek at Meta's Latest Breakthrough"
        />
      </div>
      <div className="react__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="May 3, 2022"
          text="Get started with React Context API: A simple guide to sharing state across components"
        />
        <Article
          imgUrl={blog03}
          date="Nov 12, 2022"
          text="React Server Components: A game changer for server-rendered web applications"
        />
        <Article
          imgUrl={blog04}
          date="S Feb 8, 2023"
          text="Debouncing and throttling with React: Improve performance and optimize your UI"
        />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="React Suspense: A new way to manage asynchronous data fetching and rendering"
        />
      </div>
    </div>
  </div>
);

export default Blog;
