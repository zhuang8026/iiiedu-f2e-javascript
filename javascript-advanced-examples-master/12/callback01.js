const fs = require('fs');

//讀取 source.txt 的檔案內容
fs.readFile("source.txt", function(err, contents){  // contents 成功读取资料
    if(err){ // err 错误先行 ，如果没有错误，就继续执行
        throw err;
    }
    console.log("讀取 source.txt 完成!");

    // 若是讀取沒問題，則寫入 destination.txt 檔案
    // writeFile 是直接创建 文件 “destination.txt”，并写入资料
    fs.writeFile("destination.txt", contents + ' Hello III!',  function(error){
        if(error){
            throw error;
        }
        console.log("寫入 destination.txt 成功!");
    });
});