// const fs = require("fs");
// const path = require("path");
// module.exports = class UserInfo {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lName = lName;
//     this.fullName = fName + " " + lName;
//   }
//   save() {
//     const filePath = path.join(
//       path.dirname(process.mainModule.filename),
//       "data",
//       "info.json"
//     );

//     fs.readFile(filePath, (err, fileContent) => {
//       // using arrow function is a must, since it points to the "this" object of the class
//       let contents = [];
//       if (!err) {
//         contents = JSON.parse(fileContent);
//       }
//       contents.push(this);
//       fs.writeFile(filePath, JSON.stringify(contents), (err) => {
//         console.log({ err });
//       });
//     });
//   }

//   static fetchAllInfo(cb) {
//     const filePath = path.join(
//       path.dirname(process.mainModule.filename),
//       "data",
//       "info.json"
//     );

//     // fs.access is used to check whether the specified file is there or not.
//     fs.access(filePath, fs.constants.F_OK, (err) => {
//       if (err) {
//         console.log(`${filePath} ${err ? "does not exist" : "exists"}`);
//         cb([]);
//       } else {
//         console.log("inside else");
//         fs.readFile(filePath, (err, fileContent) => {
//           if (err) {
//             console.log({ err });
//             cb([]);
//           }
//           cb(JSON.parse(fileContent));
//         });
//       }
//     });
//   }
// };

const getDb = require("../utils/database").getDb;

class UserDetails {
  constructor(firstName, lastName, profilePic) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
    this.profilePic = profilePic;
  }
  save() {
    console.log(this);
    const db = getDb();
    return db
      .collection("allUserList")
      .insertOne(this)
      .then((result) => {
        console.log({ result });
      })
      .catch((err) => console.log(err));
  }

  static fetchAllData() {
    const db = getDb();
    return db
      .collection("allUserList")
      .find()
      .toArray()
      .then((allUserList) => {
        console.log(allUserList);
        return allUserList;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = UserDetails;
