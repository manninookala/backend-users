const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [
    {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
    },
    {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
    },
    {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
    },
    {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
    },
    {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
    },
  ];

app.get("/users", (req,res) =>{
    return res.json({users: users});
});

app.get("/users/:id", (req,res) =>{
    const userId = parseInt(req.params.id);
    let user = users.find(ele => ele.id === userId);
    if(!user){
        return res.status(404).json({message: `No user with Id: ${userId} found.`})
    }
    return res.status(200).json({user: user});
})

const port  = 3000;
app.listen(port, () => console.log("Server is listening to port 3000"));
