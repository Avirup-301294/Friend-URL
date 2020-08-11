// // Initializing packages
// const express = require("express");
// const app = express();
// // Importing database model
// const Url = require("../models/Url");
// app.set('view engine', 'ejs');
// // Initializing router object
// const router = express.Router();
//
// //@route    GET /
// //@desc     Show Index page
// router.get("/", (req, res) => {
//     res.render("index");
// });
//
// //@route    GET /:code
// //@desc     Redirect to long URL
// router.get('/:code', async (req, res) => {
//   try{
//     const url = await Url.findOne({ urlCode: req.params.code });
//     if(url){
//       return res.redirect(url.longUrl);
//     } else {
//       return res.status(404).json('No url found');
//     }
//   }catch(err){
//     console.log(err);
//     res.status(500).json('server error');
//   }
//   });
//
// module.exports = router;
// Initializing packages
const express = require("express");

// Importing database model
const Url = require("../models/Url");

// Initializing router object
const router = express.Router();

//@route    GET /
//@desc     Show Index page
router.get("/", (req, res) => {
    res.render("index");
});

//@route    GET /:code
//@desc     Redirect to long URL
router.get("/:code", (req, res) => {
    Url.findOne({ urlCode: req.params.code })
        .then(url => {
            if (url) {
                return res.redirect(url.longUrl);
            } else {
                res.status(404).redirect("/");
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "Internal Server Error", err });
        });
});

module.exports = router;
