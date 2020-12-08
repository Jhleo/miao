
var jhleo={
    max:function max(ary){
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
    },
    compact:function(ary){
        var result=[]
        for(i=0;i<ary.length;i++){
            if(ary[i]){
                result.push(ary[i])
            }
        }
        return result
    },
    min:function min(ary){
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
    },
    join:function join(ary,it){
        var result=''
        for(i=0;i<ary.length;i++){
            if(i==ary.length-1){
                result=result+ary[i]
            }else{
                result=result+ary[i]+it
            }           
        }
        return result
    },
    last:function last(ary){
        for(i=0;i<ary.length;i++){
            if(i==ary.length-1)return ary[i]
        }
    },
    lastIndexOf:function lastIndexOf(ary,val,it=ary.length-1){
        for(i=it;i>=0;i--){
            if(ary[i]==val){
                return i
            }
        }
        return -1
    },
    chunk:function chunk(ary,size=1){
        var result =[]
        if(ary.length==0)return ary
        for(i=0;i<ary.length;i+=size){
            result.push(ary.slice(i,i+size))
        }
        return result
    },
    drop:function drop(array,n=1){
        let result=[]
        for(i=0;i<array.length;i++){
            if(i-n+1>0){
                result.push(array[i])
            }
        }
        return result
    },
    dropRight:function dropRight(array,n=1){
        let result=[]
        for(i=0;i<array.length-n;i++){
           result.push(array[i])
        }
        return result
    },
    fill:function fill(array,value, start=0, end=array.length){
        let result =[]
        for(i=0;i<array.length;i++){
            if(i>=start&&i<end){
                result.push(value)
            }else{
                result.push(array[i])
            }
        }
        return result
    },
}