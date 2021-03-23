
var jhleo =function (){

    function iteratee(predicate) {
        if (typeof predicate === 'function') {
            return predicate
        }
        if (typeof predicate === "string") {
            return (item) => item[predicate];
        }
        if (Array.isArray(predicate)) {
            return (item) => item[predicate[0]] == predicate[1];
        }
        if (typeof predicate === "object") {
            return function(obj){
                for(let i of obj){
                    if(predicate[i] !== undefined && obj[i] != predicate[i]) {
                        return false;
                      }
                }
                return true
            }
        }
        if (typeof predicate === "boolean") {
            return predicate
        }
    }
    //------------------------------
    function max(ary){
        var result=-Infinity
        if(ary.length==0){
            return undefined
        }
        for(i=0;i<ary.length;i++){
            if(ary[i]>result){
                 result=ary[i]
            }
        }
        return result
    }
    function compact(ary){
        var result=[]
        for(i=0;i<ary.length;i++){
            if(ary[i]){
                result.push(ary[i])
            }
        }
        return result
    }
    function min(ary){
        var result=Infinity
        if(ary.length==0){
            return undefined
        }
        for(i=0;i<ary.length;i++){
            if(ary[i]<result){
                 result=ary[i]
            }
        }
        return result
    }
    function join(ary,it){
        var result=''
        for(i=0;i<ary.length;i++){
            if(i==ary.length-1){
                result=result+ary[i]
            }else{
                result=result+ary[i]+it
            }           
        }
        return result
    }
    function last(ary){
        for(i=0;i<ary.length;i++){
            if(i==ary.length-1)return ary[i]
        }
    }
    function lastIndexOf(ary,val,it=ary.length-1){
        for(i=it;i>=0;i--){
            if(ary[i]==val){
                return i
            }
        }
        return -1
    }
   function chunk(ary,size=1){
        var result =[]
        if(ary.length==0)return ary
        for(i=0;i<ary.length;i+=size){
            result.push(ary.slice(i,i+size))
        }
        return result
    }
    function drop(array,n=1){
        let result=[]
        for(i=0;i<array.length;i++){
            if(i-n+1>0){
                result.push(array[i])
            }
        }
        return result
    }
    function dropRight(array,n=1){
        let result=[]
        for(i=0;i<array.length-n;i++){
           result.push(array[i])
        }
        return result
    }
    function fill(array,value, start=0, end=array.length){
        let result =[]
        for(i=0;i<array.length;i++){
            if(i>=start&&i<end){
                result.push(value)
            }else{
                result.push(array[i])
            }
        }
        return result
    }
    function find(array,predicate,fromIndex=0){
        predicate=iteratee(predicate)
        for(i=fromIndex;i<array.length;i++){
            if(predicate(array[i])){
                return array[i]
            }
        }
    }
    function findLast(array,predicate,fromIndex=array.length-1){
        predicate = iteratee(predicate)
        for(i=fromIndex;i>0;i--){
            if(predicate(array[i]))
            return array[i]
        }
    }
     function findIndex(array, predicate, fromIndex=0){
         predicate = iteratee(predicate)
         for(var i =fromIndex;i<array.length;i++){
             if(predicate(array[i])){
                 return i
             }
             return -1
         }
    }
    function findLastIndex(array, predicate, fromIndex=array.length-1){
        predicate=iteratee(predicate)
        for(var i = fromIndex;i>=0;i--){
            if(predicate(array[i])){
                return i
            }
            return -1
        }
    }
    function concat(array,...arg){
        let result =[...array]
        for(i=0;i<arg.length;i++){
            if(Array.isArray(arg[i])){
                result.push(...arg[i])
            }else{
                result.push(arg[i])
            }
        }
        return result
    }
   function difference(array,...arg){
        var result=[]
        var cur=concat(...arg)
        for(x of array){
            if(cur.lastIndexOf(x)==-1){
                result.push(x)
            }
        }
        return result
    }
    function differenceBy(array,...arg){
        var result=[]
        let iteratee=arg[arg.length-1]

    }
    function differenceWith(array,...arg){

    }
    function dropWhile(array,predicate){
        let func=iteratee(predicate)
        for(let i=0;i<array.length;i++){
            if(!func(array[i])){
                return array.slice(i)
            }
        }
    }
    function dropRightWhile(array,predicate){

    }
   function head(array){       
        return array[0]
    }
    function flatten(array){
        let result = []
        for(let i=0;i<array.length;i++){
            if(Array.isArray(array[i])){
                result.push(...array[i])
            }else{
                result.push(array[i])
            }
        }
        return result
    } 
    function flattenDeep(array){
        let result = []
        for(let i =0;i<array.length;i++){
            if(Array.isArray(array[i])){
                result=result.concat(flattenDeep(array[i]))
            }else{
                result.push(array[i])
            }
        }
        return result
    }
    function intersectionBy(){

    }
    function ary(f,n=f.length){
        return function (...args){
            return f(...args.slice(0,n))
        }
    }
    function before(n,fuc){
        let c=0
        let result
        return function (...args){
            if(c<n){
                return result=fuc.call(this,...args)
                c++
            }else{
                return result
            }
        }
    }
    function after(n,fuc){
        let c=0
        return function(...args){
            if(c>n){
                return fuc.call(this,...args)
            }
        }
    }
    function flip(func){
        return function(...args){
            return func(...args.reverse())
        }
    }
    function negate(predicate){
        return function(...args){
            return !predicate(...args)
        }
    }
    function some(ary,predicate){
        predicate=iteratee(predicate)
        for(let it of ary){
            if(predicate(it))return true
        }
        return false
    }
    function nth(array,n=0){
        if(n>=0){
            return array[n]
        }else{
            return array[array.length+n]
        }
    }
    function groupBy(array,predicate){
        let result ={}
        predicate=iteratee(predicate)
        for(let i of array){
            if(result[predicate(i)]){
                result[predicate(i)].push(i)
            }else{
                result[predicate(i)]=[i]
            }
        }
        return result
    }
    function identity(value){
        return value
    }
    function sum(array){
        return array.reduce((val,number)=>val+number)
    }

    return{
        iteratee,
        max,
        compact,
        some,
        negate,
        flip,
        after,
        before,
        ary,
        intersectionBy,
        flattenDeep,
        flatten,
        head,
        differenceBy,
        difference,
        concat,
        chunk,
        fill,
        dropRight,
        drop,
        lastIndexOf,
        last,
        join,
        min,
        nth,
        groupBy,
        identity,
        sum,
        find,
        findIndex,
        findLastIndex,
        findLast,
        dropWhile,
        
    }
}()