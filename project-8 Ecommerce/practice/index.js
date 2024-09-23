
function divide(x,y) {

let result = x/y;

let z=result.value;

try{
    console.log("result is :" ,result) 
}catch(error) {
    console.error("An error is occurred :" ,error) 
}
 finally{
    console.log("this is always happened at the end")
 }

}

divide(25,5)

divide(20,0.5)




