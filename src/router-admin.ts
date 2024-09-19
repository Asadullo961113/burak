import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/*  Restaurant */
routerAdmin.get("/", restaurantController.goHome)

// Login Page
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin)
    
// Sign-up Page
routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post('/signup',restaurantController.processSignup)

// Logout and ChecoutSession
routerAdmin.get("/logout", restaurantController.logout)
routerAdmin.get('/check-me', restaurantController.checkoutSession)

/** PRODUCT */
/** USER */

export default routerAdmin; 