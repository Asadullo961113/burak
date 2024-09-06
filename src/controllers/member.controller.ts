import {T} from "../libs/types/common";
import { Request, Response } from "express";

const memberController: T = {};

memberController.goHome = (req:Request, res: Response) => {
    try {
        res.send("home page");
    }catch(err) {
       console.log("error go home:", err)
    }
}

memberController.getLogin = (req:Request, res: Response) => {
    try {
        res.send("login page");
    }catch(err) {
       console.log("error getLogin:", err)
    }
}

memberController.getSignup = (req:Request, res: Response) => {
    try {
        res.send("signup page");
    }catch(err) {
       console.log("error getSignup: ", err)
    }
}

export default memberController;