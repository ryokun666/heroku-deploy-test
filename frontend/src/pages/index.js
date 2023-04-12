import React, { useState, useEffect } from "react";

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiEndpoint =
        process.env.NODE_ENV === "production"
          ? "/api" // 本番環境の場合
          : "http://localhost:5000/api"; // 開発環境の場合
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Next.js Frontend</h1>
      <p>Backend data: {data ? data.message : "Loading..."}</p>{" "}
      {/* 修正: data.message を表示 */}
    </div>
  );
};

export default Index;
