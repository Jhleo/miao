
var jhleo={
    max:function max(ary){
        var result=-Infinity
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
    }
}