import {T} from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { MemberInput,LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};

restaurantController.goHome = (req:Request, res: Response) => {
    try {
        console.log("goHome")
        res.send("home page");
        // send , end, render, redirect, json
    }catch(err) {
       console.log("error go home:", err)
    }
}


restaurantController.getSignup = (req:Request, res: Response) => {
    try {
        console.log("getSignup")
        res.send("signup page");
    }catch(err) {
       console.log("error getSignup: ", err)
    }
}

restaurantController.getLogin = (req:Request, res: Response) => {
    try {
        console.log("getLogin")
        res.send("login page");
    }catch(err) {
       console.log("error getLogin:", err)
    }
}

restaurantController.processSignup = async (req:Request, res: Response) => {
    try {
        console.log("processSignup");

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        res.send(result);
    }catch(err) {
       console.log("error processSignup: ", err)
       res.send(err);
    }
}

restaurantController.processLogin =  async (req:Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);

        res.send(result);
    }catch(err) {
       console.log("error processLogin: ", err)
       res.send(err);
    }
}

export default restaurantController;