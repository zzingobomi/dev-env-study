module.exports = function myWebpackLoader(content) {
  console.log("my custome loader");
  return content;
  //return content.replace("console.log(", "alert(");
};
