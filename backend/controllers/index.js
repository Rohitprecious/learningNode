const UserInfo = require("../models/userInfo");

exports.getData = (req, res, next) => {
  // console.log("req", req.body);
  UserInfo.fetchAllInfo((userinfo) => {
    console.log({ userinfo });
    res.send(userinfo);
  });
};

exports.postData = (req, res, next) => {
  const userinfo = new UserInfo(req.body.fName, req.body.lName);
  userinfo.save();
  const data = { data: "data saved successfully!" };
  res.send(data);
};
