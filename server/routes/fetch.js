const express = require("express");
const client = require("../db/database");

const router = express.Router();

// fetching all visitors in the table---
router.get("/viewvisitors", async (req, res) => {
  const { database } = await client.databases.createIfNotExists({
    id: "democosmos",
  });
  const { container } = await database.containers.createIfNotExists({
    id: "Container1",
  });

  const allData = await (await container.items.readAll().fetchAll()).resources;

  res.json(allData);
//   const data = {
//     viewVisitor: [
//       {
//         pass_num: 432970,
//         name: "Sai Kiran",
//         mob_num: 9821114007,
//         to_meet: "Sudarshan Sharma",
//         dept: "IT-Lorem Ipsum",
//         visit_status: "Pending",
//         visitor_type: "Trainee",
//         purpose: "Official",
//       },
//       {
//         pass_num: 432971,
//         name: "Saveen Kamboj",
//         mob_num: 9821114087,
//         to_meet: "Sudarshan Sharma",
//         dept: "IT-Lorem Ipsum",
//         visit_status: "Pending",
//         visitor_type: "Consultant",
//         purpose: "Official",
//       },
//       {
//         pass_num: 432971,
//         name: "Kush Marvania",
//         mob_num: 9821114087,
//         to_meet: "Yashpal",
//         dept: "IT-Lorem Ipsum",
//         visit_status: "Completed",
//         visitor_type: "Trainee",
//         purpose: "Official",
//       },
//     ],
//   };
//   res.json(data);
});

// fetching each visitor---
router.get("/viewsinglevisitor?:id", async (req, res) => {
    const { id } = req.query;
    console.log(id);
    const { database } = await client.databases.createIfNotExists({
      id: "democosmos",
    });
    const { container } = await database.containers.createIfNotExists({
      id: "Container1",
    });
  
    const allData = await (await container.item(id).read()).resource;
    console.log(allData);
    res.json(allData);
  });

module.exports = router;
