import React, { useEffect, useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <>
      <Header />
      <div className={`container-header center-content slide-from-left ${showAnimation ? 'show' : ''}`}>
        <h1>Welcome to Employee Management System</h1>
      </div>
      <Footer />
    </>
  );
}
