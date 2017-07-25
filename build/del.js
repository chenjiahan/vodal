/**
 * 清理 build 的文件
 */

const del = require("del");

del(["*.css"]).then(paths => {
  console.log("Deleted files and folders:\n", paths.join("\n"));
});
