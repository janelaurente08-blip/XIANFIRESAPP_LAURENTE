// import express from "express";
// const router = express.Router();

// router.get("/user/:id", (req, res)=> {
//     const id = req.params.id;
//     res.send(`hello id: #${id}`);
    // console.log("test");
     // res.json("hello jane");
// });
// export default router;
// 

import express from "express";

const janeRoutes = express.Router();

janeRoutes.get("/", (req, res) => {
    res.json({
        route: "Jane Home",
        message: "Welcome to Jane's XianFire Application!"
    });
});

janeRoutes.get("/about", (req, res) => {
    res.json({
        route: "Jane About",
        message: "This is the About page of Jane's XianFire Application!"
    });
});

janeRoutes.get("/contact", (req, res) => {
    res.json({
        route: "Jane Contact",
        message: "Welcome to the Contact page of Jane's XianFire Application!"
    });
});

janeRoutes.get("/projects", (req, res) => {
    res.json({
        route: "Jane Projects",
        message: "Welcome to Jane's Projects!"
    });
});

janeRoutes.get("/profile", (req, res) => {
    res.json({
        route: "Jane Profile",
        message: "Welcome to Jane's Profile!"
    });
});

export default janeRoutes;