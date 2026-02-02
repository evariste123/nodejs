import express from 'express';
const router = express.Router();
const getHome = (req, res) => {
   res.send(`
    <header>
          <h1 style="text-align:center;">Welcome to My Website</h1>
          <nav style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;background-color:#000; padding:10px;
          color:white;justify-content:space-evenly;font-size:20px;
          border-radius:5px;">
          <div style="margin-bottom:10px;">Explore the links below to navigate through the website:</div>
          <div style="display:flex;gap:10px;">
              <a href="/" style="position:relative;text-decoration:none;color:cyan;">Home</a>
              <a href="/about" style="position:relative;text-decoration:none;color:cyan;">about</a>
              <a href="/contact" style="position:relative;text-decoration:none;color:cyan;">contact</a>
              <a href="/product" style="position:relative;text-decoration:none;color:cyan;">product</a>
              <a href="/service" style="position:relative;text-decoration:none;color:cyan;">service</a>
              <a href="/blog" style="position:relative;text-decoration:none;color:cyan;">blog</a>
              <a href="/profile" style="position:relative;text-decoration:none;color:cyan;">profile</a>
              <a href="/login" style="position:relative;text-decoration:none;color:cyan;">login</a>
              <a href="/register" style="position:relative;text-decoration:none;color:cyan;">register</a>
              <a href="/join" style="position:relative;text-decoration:none;color:cyan;">join</a>
              <a href="/search" style="position:relative;text-decoration:none;color:cyan;a:hover:all ease 0.3s;">search</a>
              </div>
          </nav>
      </header>
      <section style="margin-top:20px; background-color:cyan; padding:10px;">
          <h2>Home Page</h2>
          <p>Welcome to the home page of my website. Explore the links above to learn more!</p>
          <h1>register here</h1>
          <div style="width:20vw;height:7vh;">
          <input type="text" placeholder="eneter your name">
          </div>
      </section>

    `);
};
 export default getHome;