import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export const CallData = ({
  posts,
  loading,
}: {
  posts: any;
  loading: boolean;
}) => {
  if (loading) {
    return <h2>Loading.....</h2>;
  }
  return (
    <>
      {posts.data.map((post: any) => {
        <h1>{post.title}</h1>;
      })}
    </>
  );
};
