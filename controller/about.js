import express from 'express';
const router = express.Router();
const getAbout = (req, res) => {
   res.send('This is the about page of the website.');
   router.get('/about', getAbout);
};
 
export default getAbout;