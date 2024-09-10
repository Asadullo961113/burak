import {T} from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";

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

restaurantController.getLogin = (req:Request, res: Response) => {
    try {
        console.log("getLogin")
        res.send("login page");
    }catch(err) {
       console.log("error getLogin:", err)
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

restaurantController.processLogin = (req:Request, res: Response) => {
    try {
        console.log("processLogin")
        res.send("DONE");
    }catch(err) {
       console.log("error processLogin: ", err)
    }
}

restaurantController.processSignup = (req:Request, res: Response) => {
    try {
        console.log("processSignup")
        res.send("DONE");
    }catch(err) {
       console.log("error processSignup: ", err)
    }
}

export default restaurantController;