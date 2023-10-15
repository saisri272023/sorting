function sort(){
    let arr=[130,20,320,1,10,2]
    console.log(arr.sort((a,b)=>{
    return b-a
    }));
}
sort()