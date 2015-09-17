function pairwise(arr, arg) {
    var modifArray = arr.slice();
    var result = 0;
    for (var i=0; i<arr.length; i++){
        for (var z=i+1; z<arr.length; z++){
            if (modifArray[i] + modifArray[z] === arg){
                result += i + z;
                modifArray[i] = "";
                modifArray[z] = "";
            }
        }
    }
    return result;
}

console.log(pairwise([1,4,2,3,0,5], 7));