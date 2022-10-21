const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

/* GET /api/viewvisitor */
app.get("/viewvisitor", function (req, res, next) {
  res.json({
    "viewVisitor": [
      {
        pass_num: 432970,
        name: "Sai Kiran",
        mob_num: 9821114007,
        to_meet: "Sudarshan Sharma",
        dept: "IT-Lorem Ipsum",
        visit_status: 'pending',
        visitor_type: 'trainee',
        purpose: 'Official'
      },
      {
        pass_num: 432971,
        name: "Saveen Kamboj",
        mob_num: 9821114087,
        to_meet: "Sudarshan Sharma",
        dept: "IT-Lorem Ipsum",
        visit_status: 'pending',
        visitor_type: 'trainee',
        purpose: 'Official'
      },
      {
        pass_num: 432971,
        name: "Sudarshan Sharma",
        mob_num: 9821114087,
        to_meet: "Yashpal",
        dept: "IT-Lorem Ipsum",
        visit_status: 'pending',
        visitor_type: 'trainee',
        purpose: 'Official'
      },
    ],
  });
});

app.listen(5000, () => console.log("Server started on 5000"));

//   module.exports = router;
