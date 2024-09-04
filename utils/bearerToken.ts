const jwt = require("jsonwebtoken");

import express, { Request, Response, NextFunction } from 'express';

// const User = require("../model/user");


exports.getCurrentUser = async (req:Request, res:Response, next:NextFunction) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];


    //expected out-put: { email: user.email, userId: user._id, status: user.account_type}
  const payload = await jwt.verify(token, process.env.JWT_SIGN);

//   if(payload) {
//     const response = await User.findById(payload.userId)

     
//     if (response) {
//       req.payload = payload;
      
//     }

//   }


  }  
  next();
};
