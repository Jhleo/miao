
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
            return matches(predicate)
        }
        if (typeof predicate === "boolean") {
            return predicate
        }
    }
    function matches(src) {                                
        return bind(isMatch, null, window, src)
    }

    function isMatch(obj, src) {                      
        for (var key in src) {
            if (src[key] && typeof src[key] == 'object') {
                if (!isMatch(src[key], obj[key])) {
                    return false
                }
            } else {
                if (obj[key] !== src[key]) {
                    return false
                }
            }

        }
        return true
    }
    function bind(f, thisArg, ...partials) {
        return function (...args) {
            var copy = partials.slice()
            for (var i = 0; i < copy.length; i++) {
                if (copy[i] === window) {
                    copy[i] = args.shift()
                }
            }
            return f.call(thisArg, ...copy, ...args)
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
         }
         return -1
    }
    function findLastIndex(array, predicate, fromIndex=array.length-1){
        predicate=iteratee(predicate)
        for(var i = fromIndex;i>=0;i--){
            if(predicate(array[i])){
                return i
            }
        }
        return -1
    }
    function flattenDepth(array,depth=1){
        while(depth){
            array=flatten(array)
            depth--
        }
        return array
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
    function differenceWith(array,value,comparator){
        let result=[]
        for(let i of array){
            for(let j of value){
                if(!comparator(i,j)){
                    result.comparator(i)
                }
            }
        }
        return result
    }
    function dropWhile(array,predicate){
        let func=iteratee(predicate)
        for(let i=0;i<array.length;i++){
            if(!func(array[i])){
                return array.slice(i)
            }
        }
        return array
    }
    function dropRightWhile(array,predicate){
        let arr=array.slice()
        let func=iteratee(predicate)
        for(let i=arr.length-1;i>=0;i--){
            if(!func(arr[i])){
                break
            }else{
                arr.pop(arr[i])
            }
        }
        return arr
    }
    function fromPairs(pairs){
        let result={}
        for(let i=0;i<pairs.length;i++){
            result[pairs[i][0]]=pairs[i][1]
        }
        return result
    }
   function head(array){       
        return array[0]
    }
    function initial(array){
        let arr = array.slice()
        arr.pop()
        return arr
    }
    function intersection(...args){
        let arr = args[0]
        for(let i =0;i<args.length;i++){
            arr=arr.filter(val=>args[i].includes(val))
        }
        return arr
    }
    function intersectionBy(...array){
        
    }
    function intersectionWith(array,array2,comparator){
        let res=[]
        for(let i =0;i<array.length;i++){
            let itemA=array[i]
            for(let j=0;j<array2.length;j++){
                let itemB=array2[j]
                if(comparator(itemA,itemB)&&!res.includes(itemA)){
                    res.push( itemA)
                }
            }
        }
        return res
    }
    function isEqual(value, other){
        if(value==other){
            return true
        }
        if(value!=value&&other!=other){
            return true
        }
        if (value=== null || other === null || typeof value !== 'object' || typeof other !== 'object') {
            return false
        }
        if(Object.keys(value).length!=Object.keys(other).length){
            return false
        }
        for(let key in value){
            if(!(key in other)||!isEqual(value[key],other[key])){
                return false
            }
        }
        return true

    }
    function includes(collection,value,fromIndex=0){
        if(Array.isArray(collection)){
            for(let i=fromIndex;i<collection.length;i++){
                if(collection[i]==value){
                    return true
                }
                else{
                    return false
                }
            }
            
        }
        else if(typeof collection=="string"){
            if(collection.indexOf(value)!==-1){
                return true
            }else{
                return false
            }
        }
        else if(typeof collection=="object"){
            for(let key of collection){
                if(collection[key]){
                    return true
                }
                else{
                    return false
                }
            }
        }
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
    function pull(array,...value){
        let res=[]
        for(let i=0;i<array.length;i++){
            if(!value.includes(array[i])){
                res.push(array[i])
            }
        }
        return res
    }
    function pullAll(array,value){
        let res=[]
        for(let i of array){
            if(!value.includes(array[i])){
                res.push(array[i])
            }
        }
        return res
    }
    function reverse(array){
        let s=0
        let len=array.length-1
        while(s<array.length/2){
            let x=array[s]
            array[s]=array[len]
            array[len]=x
            s++
            len--
        }
        return array
    }
    function slice(array,start=0,end=array.length){
        let res=[]
        for(let i=start;i<end;i++){
            res.push(array[i])
        }
        return res
    }
    function sortedIndex(array,value){
        for(let i=0;i<array.length;i++){
            if(value<=array[0]){
                return 0
            }
            if(value>=i&&array[i+1]>=value){
                return i+1
            }
        }
        return array.length
    }
    function sortedIndexBy(array,value,predicate){
        predicate=iteratee(predicate)
        let res=array.map(it=>predicate(it))
        let val=predicate(value)
        return sortedIndex(res,val)
    }
    function sortedIndexOf(array, value){
        for(let i=0;i<array.length;i++){
            if(array[i]==value){
                return i
            }
        }
        return -1
    }
    function sortedLastIndex(array,value){
        let len=array.length-1
        for(let i=len;i>=0;i--){
            if(value>=array[len]){
                return array.length
            }
            if(value<array[i]&&value>=array[i-1]){
                return i
            }
        }
        return 0
    }
    function sortedLastIndexBy(array,value,predicate){
        predicate=iteratee(predicate)
        let res=array.map(it=>predicate(it))
        let val=predicate(value)
        return sortedLastIndex(res,val)
    }
    function sortedLastIndexOf(array, value){
        for(let i=array.length-1;i>=0;i--){
            if(array[i]==value){
                return i
            }
        }
        return -1
    }
    function sortedUniq(array){
        let res=[]
        for(let i=0;i<array.length;i++){
            if(!res.includes(array[i])){
                res.push(array[i])
            }
        }
        return res
    }
    function tail(array){
        return array.slice(1)
    }
    function take(array,n=1){
        let res=[]
        if(array.length<=1||array.length<=n)return array
        for(let i=0;i<n;i++){
            res.push(array[i])
        }
        return res
    }
    function takeRight(array,n=1){
            return array.slice(-n)
    }
    function takeRightWhile(array,predicate){
        let pred=iteratee(predicate)
        let res=[]
        for(let i=array.length-1;i>=0;i--){
            if(pred(array[i])){
                res.unshift(array[i])
            }
            else{
                return res
            }
        }
    }
    function takeWhile(array,predicate){
        let pred=iteratee(predicate)
        let res=[]
        for(let i=array.length-1;i>=0;i--){
            if(pred(array[i])){
                res.push(array[i])
            }
            else{
                break
            }
        }
        return res
    }
    function union(...args){
        let res=[]
        for(let x of args){
            for(let y of x){
                if(!res.includes(y)){
                    res.push(y)
                }
            }
        }
        return res
    }
    function uniq(array){
       return Array.from(new Set(array))
    }
    function uniqBy(array,predicate){
        pred=iteratee(predicate)
        let arr=new Set()
        let res=[]
        let i=0
        for(let val of array){
            arr.add(pred(val))
            if(arr.size>i){
                res.push(val)
            }
            i=arr.size
        }
        return res
    }
    function zip(...array){
        let res=[]
        for(let i=0;i<array[0].length;i++){
            res.push([])
        }
        for(let i=0;i<array.length;i++){
            for(let j=0;j<array[i].length;j++){
                res[j][i]=array[i][j]
            }
        }
        return res
    }
    function unzip(array){
        return zip(...array)
    }
    function unzipWith(array,func){
        array=unzip(array)
        return array.map(it=>func(...it))
    }
    function without(array,...value){
        let res=[]
        for(let val of array){
            if(!value.includes(val)){
                res.push(val)
            }
        }
        return res
    }
    function xor(...arrays){
        let res=[]
        let map={}
        let array=flatten(arrays)
        for(let i of array){
            map[i]=!map[i] ? 1:map[i]+1
        }
        for(let key of arrays){
            key.forEach(it=>{
                if(map[it]==1)return res.push(it)
            })
        }
        return res
    }
    function zipObject(props,value){
        let res={}
        for(let i=0;i<props.length;i++){
            res[props[i]]=value[i]
        }
        return res
    }
    function zipWith(...array){
        let iteratee=array.pop()
        return zip(...array).map(it=>iteratee(...it))
    }
    function map(collection,iteratee){
        let array=[]
        if(Array.isArray(collection)){
            for(let i=0;i<collection.length;i++){
                let x=collection[i]
                if(typeof(iteratee)=="function"){
                    array.push(iteratee(x,i,collection))
                }else if(typeof(iteratee)=="string"){
                    let y=iteratee.split('.')
                    let z=x
                    for(let j=0;j<y.length;j++){
                        z=z[y[j]]
                    }
                    array.push(z)
                }
            }
        }else if(typeof(collection)=="object"){
            for(let val in collection){
                if(typeof(iteratee)=='function'){
                    array.push(iteratee(collection[val]))
                }
            }
        }
        return array
    }
    function countBy(collection,predicate){
        let pred=iteratee(predicate)
        let res={}
        collection=collection.map(it=>pred(it))
        for(let val of collection){
            if(res[val]){
                res[val]++
            }else{
                res[val]=1
            }
        }
        return res
    }
    function forEach(collection,func){
        for(let val of collection){
            func(collection[val],val,collection)
        }
        return collection
    }
    function forEachRight(collection,func){
        for(let i=collection.length-1;i>=0;i--){
            func(collection[i],i,collection)
        }
        return collection
    }
    function every(collection,predicate){
        let pred=iteratee(predicate)
        for(let val of collection){
            if(!pred(val)){
                return false
            }
        }
        return true
    }
    function filter(collection,predicate){
        let pred=iteratee(predicate)
        let res=[]
        for(let val of collection){
            if(pred(val)){
                res.push(val)
            }
        }
        return res
    }
    function flatMap(collection,predicate){
        let res=[]
        pred=iteratee(predicate)
        for(let val of collection){
            res.push(pred(val))
        }
        return flatten(res)
    }
    function add(augend, addend){
        return augend+addend
    }
    function pullAllWith(array, values,comparator){
        return array.filter(item=>!comparator(...values,item))
    }
    function pullAt(array,...arg){
        let len=arg.length
        let res=[]
        let x=0
        for(let i =0;i<arg.length;i++){
            res.push(array[arg[i]-x])
            array.splice(arg[i]-x,1)
            x++
        }
        return res
    }
    function flatMapDeep(collection,predicate){
        return flattenDeep(flatMap(collection,predicate))
    }
    function flatMapDepth(collection,predicate,depth=1){
        return flattenDepth(flatMap(collection,predicate,depth))
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
    function invokeMap(collection, path,...arg){
        let res=[]
        if(typeof path=='string'){
            res=collection.map(it=>it[path](...arg))
        }
        if(typeof path=='function'){
            res=collection.map(it=>path.call(it,...arg))
        }
        return res
    }
    function keyBy(collection,predicate){

    }
    function reject(collection,predicate){

    }
    function size(collection){
        if(Array.isArray(collection)||typeof collection =='string'){
            return collection.length
        }
        if(typeof collection =='object'){
            let i=0
            for(let key in collection){
                i++
            }
            return i
        }
    }
    function sortBy(collection,predicate){
        
    }
    function identity(value){
        return value
    }
    function sample(collection){
        return collection[Math.random()*collection.length|0]
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
        flattenDepth,
        dropRightWhile,
        fromPairs,
        differenceWith,
        initial,
        intersection,
        includes,
        intersectionWith,
        isEqual,
        pull,
        pullAll,
        pullAllWith,
        pullAt,
        reverse,
        slice,
        sortedIndex,
        sortedIndexBy,
        map,
        sortedIndexOf,
        sortedLastIndex,
        sortedLastIndexBy,
        sortedLastIndexOf,
        sortedUniq,
        tail,
        take,
        takeRight,
        takeRightWhile,
        takeWhile,
        union,
        uniq,
        uniqBy,
        zip,
        unzip,
        unzipWith,
        add,
        without,
        xor,
        zipObject,
        zipWith,
        countBy,
        forEach,
        forEachRight,
        isMatch,
        matches,
        bind,
        every,
        filter,
        flatMap,
        flatMapDeep,
        invokeMap,
        sample,
        size,

    }
}()