const UserInfo = require("../models/userInfo");

exports.getData = (req, res, next) => {
  // console.log("req", req.body);
  UserInfo.fetchAllData((userinfo) => {
    console.log({ userinfo });
    res.send("this is home page");
  });
};

exports.postData = (req, res, next) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const profilePic =
    req.body.pic ||
    "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png";
  const userinfo = new UserInfo(fName, lName, profilePic);
  userinfo.save();
  const data = { data: "data saved successfully!" };
  res.send(data);
};
