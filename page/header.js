import express from 'express';
const router = express.Router();
const getHeader = (req, res) => {
    res.send(`
This is the header section of the website.
    `);
};
router.get('/header', getHeader);
export default getHeader;