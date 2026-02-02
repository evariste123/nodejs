import express from 'express';
const getBlog = (req, res) => {
   res.send('This is the blog page of the website.');
};
    
 export default getBlog;