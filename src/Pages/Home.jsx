import React from "react";
import "../assets/Css/Home.css";

function Home() {
  return (
    <div className="vibrant-wrapper">
      <nav className="vibrant-nav">
        <h2>Home Page</h2>
        <button>Join Us</button>
      </nav>

      <section className="vibrant-hero">
        <h1>Build Big With Make Lots</h1>
        <p>Web magic for small businesses 🌐✨</p>
      </section>

      <section className="vibrant-grid">
        <div className="grid-item">💡 Ideas That Convert</div>
        <div className="grid-item">🛠 Solid Development</div>
        <div className="grid-item">☎ Contact Us</div>
        <div className="grid-item">📈 About Us</div>
      </section>

      <footer className="vibrant-footer">
        <p>&copy; {new Date().getFullYear()} Make Lots. Your future starts here.</p>
      </footer>
    </div>
  );
}

export default Home;
