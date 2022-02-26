import express from 'express';
import asyncHandler from 'express-async-handler';
import userModel from "../models/userModel.js";

const router = express.Router();


// 회원가입 API
router.post('/register', asyncHandler(async(req, res)=> {
    const {name, email, password} = req.body;
    const userExists = await userModel.findOne({email})
    if(userExists) {
        return res.status(404).json({
            msg:'User already exists',
        })
    }

    const user = new userModel({
        name,
        email,
        password,
    });

    const createdUser = await user.save();
    res.json({
        msg:'유저 생성 완료',
        userInfo:createdUser,
    })
}))

// 로그인 API
router.post('/login', asyncHandler(async(req, res) => {
    res.json({msg:'login'});
}))



export default router;