
var jhleo={
    max:function max(ary){
        var result
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
        var result
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
    
}