// function asyncOperation1(callback) {
//     setTimeout(() => {
//       callback("Result of operation 1");
//     }, 1000);
//   }
  
//   function asyncOperation2(callback) {
//     setTimeout(() => {
//       callback("Result of operation 2");
//     }, 1000);
//   }
  
//   function asyncOperation3(callback) {
//     setTimeout(() => {
//       callback("Result of operation 3");
//     }, 1000);
//   }
  
//   asyncOperation1((result1) => {
//     console.log(result1);
//     asyncOperation2((result2) => {
//       console.log(result2);
//       asyncOperation3((result3) => {
//         console.log(result3);
//         console.log("All operations complete");
//       });
//     });
//   });

function getdata(id,nextdat){
  setTimeout(()=>{
    console.log("getting data",id);
   nextdat();
    
  },2000)
}

getdata(1,()=>{
  getdata(2,()=>{
    console.log("final");
    
  });
});
  