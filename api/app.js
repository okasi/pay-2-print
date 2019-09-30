const express = require("express");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const exec = require("child_process").exec;
require("dotenv").config();
const { GraphQLServer } = require("graphql-yoga");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const ms = require("ms");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors("*"));
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../view/out")));

const port = process.env.PORT || "3000";
const http = require("http").Server(app);
http.listen(port, () => console.log(`listening on port ${port}`));

const typeDefs = `
type Query {
    description: String
}
`;
// const typeDefs = `
// type Query {
//   description: String
// }

// type File {
//   contentType: String!
//   createdAt: DateTime!
//   id: ID! @isUnique
//   name: String!
//   secret: String! @isUnique
//   size: Int!
//   updatedAt: DateTime!
//   url: String! @isUnique
// }

// type User {
//   createdAt: DateTime!
//   email: String @isUnique
//   id: ID! @isUnique
//   name: String!
//   password: String
//   updatedAt: DateTime!
// }

// type Query {
//   isLogin: Boolean!
// }
// type Mutation {
//   signinUser(name: String!, pwd: String!): Boolean!
//   createUser(name: String!, pwd: String!): Boolean!
// }
// `;

const resolvers = {
  Query: {
    description: () => `This is the API for a simple blogging application`
  },
  // createUser: async args => {
  //   try {
  //     const existingUser = await User.findOne({ email: args.userInput.email });
  //     if (existingUser) {
  //       throw new Error("User exists already.");
  //     }
  //     const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

  //     const user = new User({
  //       email: args.userInput.email,
  //       password: hashedPassword
  //     });

  //     const result = await user.save();

  //     return { ...result._doc, password: null, _id: result.id };
  //   } catch (err) {
  //     throw err;
  //   }
  // },
  // signinUser: async ({ email, password }) => {
  //   const user = await User.findOne({ email: email });
  //   if (!user) {
  //     throw new Error("User does not exist!");
  //   }
  //   const isEqual = await bcrypt.compare(password, user.password);
  //   if (!isEqual) {
  //     throw new Error("Password is incorrect!");
  //   }
  //   const token = jwt.sign(
  //     { userId: user.id, email: user.email },
  //     "somesupersecretkey",
  //     {
  //       expiresIn: "1h"
  //     }
  //   );
  //   return { userId: user.id, token: token, tokenExpiration: 1 };
  // }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(
  (options = {
    port: Number(port) + 1
  }),
  () => console.log(`graphql listening on port ${Number(port) + 1}`)
);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "upload");
  },
  filename: function(req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
    console.log("trying to print: " + fileName);
    exec(`lp ./upload/${fileName}`, (error, stdout, stderr) => {
      error ? console.log("Error: " + error) : null;
      stdout ? console.log("stdout: " + stdout) : null;
      stderr ? console.log("stderr: " + stderr) : null;
    });
  }
});

const upload = multer({ storage: storage }).single("file");

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

module.exports = app;
