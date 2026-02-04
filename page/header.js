import express from 'express';
const router = express.Router();
const getHeader = (req, res) => {
    res.send(`
         <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Node-only-website</title>
      <style>
       .quick{
       position:fixed;
       width:100vw;
       justify-self:center;
       background-color:skyblue;
       padding:10px;
       justify-items:end;
       top:0px;
       overflow:break-words;
       }
       .logo{
       position:relative;
       justify-self:left;
       margin-left:10px;
       text-align:center;
       }
       .logo span{
       position:relative;
       color:green;
       text-transform:capitalize;
       }
       .social{
       display:flex;
       gap:15px;
       flex-wrap:wrap;
       }
       .social a{
       position:relative;
       cursor:pointer;
       margin-right:10px;
       overflow:break-words;
       font:20px bold;
       text-decoration:none;
       color:darkorange;
       bottom:20px;
       flex-wrap:wrap;
       }
       .social a:hover{
       position:relative;
       transition:all ease 0.3s;
       color:purple;
       }
       .headers{
       position:relative;
       background:linear-gradient(to top,skyblue,cyan);
       width:100vw;
       height:90vh;
       justify-self:center;
       top:90px;
       }
       .header{
       position:relative;
       width:160px;
       height:160px;
       justify-self:center;
       border-radius:60px 0 60px 0;
       background-color:wheat;
       top:50px;
        animation-name:head2;
       animation-duration:8s;
       animation-delay:10s;
       animation-timing-function:300ms;
       animation-iteration-count:infinite;
       }
       @keyframes head{
       from{
       transform:rotate(0deg);
       color:purple;
    }
       to{ transform:rotate(360deg);
       background-color:darkorange;
       }
       }
       .paza h2{
       position:relative;
       text-align:center;
       top:30px;
       overflow-wrap:break-word;
       }
       .head{
       position:relative;
       width:160px;
       height:160px;
       justify-self:center;
       border-radius:60px 0 60px 0;
       overflow-wrap:break-word;
       background-color:olive;
       top:50px;
       transform:translate(-50%);
        animation-name:head2;
       animation-duration:15s;
       animation-delay:10s;
       animation-timing-function:300ms;
       animation-iteration-count:infinite;
       }
       @keyframes head{
       from{
       transform:rotate(0deg);
       color:purple;
    }
       to{ transform:rotate(360deg);
       background-color:skyblue;
       }
       }
       .head1 h2{
       position:relative;
       text-align:center;
       top:50px;
       color:white;
       }
       .head2{
       position:absolute;
       width:160px;
       height:160px;
       justify-self:center;
       border-radius:0 60px 0 60px;
       overflow-wrap:break-word;
       background-color:violet;
       bottom:190px;
       transform:translate(50%);
       animation-name:head2;
       animation-duration:10s;
       animation-delay:15s;
       animation-timing-function:300ms;
       animation-iteration-count:infinite;
       }
       @keyframes head2{
       from{
       transform:rotate(0deg);
       color:white;
    }
       to{ transform:rotate(360deg);
       background-color:transparent;
       }
       }
       .head3 h2{
        position:relative;
       text-align:center;
       top:30px;
       }
            </style>
      </head>
      <body>
<div class="quick">
        <div class="logo"><h2>Nodejs <span>website</span></h2></div>
        <div class="social">
         <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/product">product</a>
        <a href="/service">service</a>
       <a href="/blog">blog</a>
        <a href="/register">register</a>
         <a href="/login">login</a>
        <a href="/join">join</a>
        <a href="/search">search</a>
        </div>
        </div>
        <section class="headers">
        <div class="header">
        <div class="paza">
        <h2>HTML5,CSS,JS,react+vite(front-end)</h2>
        </div>
        </div>
        <div class="head">
        <div class="head1">
        <h2>NODEjs,Mongodb(back-end)</h2>
        </div>
        </div>
        <div class="head2">
        <div class="head3">
        <h2>ReactNative,C++,C,PhP,C#</h2>
        </div>
        </div>
        </section>
</body>
    </html>
    `);
};
router.get('/header', getHeader);
export default getHeader;