const promise=new Promise((resolve, reject) => {
console.log("first");
resolve("Promise Resolved");
reject("Promise Rejected");
});
promise.then(() => {
console.log("This is my Promise");
}).catch(()=>{
console.log("This is my Error page")
})