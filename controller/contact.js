import express from 'express';
const getContact = (req, res) => {
const contact=['0785786547'];
const email=['bapfekureraevariste','@gmail.com'].join('');
console.log("my contact" +contact);
console.log("my email" +email);
};
 
export default getContact;