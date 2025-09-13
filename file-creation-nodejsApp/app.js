const readline = require("node:readline");
const fs = require("node:fs/promises");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// const arr = [];
async function createFile()
{
    try{
        rl.question("Enter file name:",(fileName)=>{
            rl.question("Enter file contents:",(text)=>{
             fs.appendFile (`${fileName}.txt`,text,'utf-8');
            console.log("file created successfully");

             rl.close();
        })
            
        })
        
    }catch(err)
    {
        console.log(err);
    }

        

}

createFile();