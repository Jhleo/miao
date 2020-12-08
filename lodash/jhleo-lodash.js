
var jhleo={
    max:function  max(){
        var result=-Infinity
        for(i=0;i<arguments.length;i++){
            if(arguments[i]>result){
                 result=arguments[i]
            }
        }
        return result
    }
}