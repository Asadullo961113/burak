import {T} from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import {LoginInput, Member, MemberInput } from "../libs/types/member";

// REACT UCHUN

const memberService = new MemberService();

const memberController: T = {};
memberController.signup = async (req:Request, res: Response) => {
    try {
        console.log("signup");
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);
        res.json({member: result})
    }catch(err) {
       console.log("error signup: ", err)
    //    res.json({})
    }
}

memberController.login =  async (req:Request, res: Response) => {
    try {
        console.log("login");
        const input: LoginInput = req.body,
            result = await memberService.login(input);

        res.json({member: result})
    }catch(err) {
        console.log("error login: ", err)
        //    res.json({})
    }
}


export default memberController;