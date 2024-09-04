import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      // next we check ki data kis format me aa rha hai.. for that, use json formatter website.
      // we saw that data is in array form which contains objects.. each representing a product.
      // bass fiir... state update kr do... lekin uske liye state banani hogi.
      // jaake posts wala bana liye..
      setPosts(data);
    } catch (error) {
      console.warn("error aa gaya ji", error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>no products available</div>
      )}
    </div>
  );
}

export default Home;
