var fs=require('fs')
/*fs.readFile('context.txt','UTF-8',function (err,data) {
    if (err){
        console.log(err)
    }else {
        console.log(data);
    }
});
console.log(fs.readFileSync('context.txt'))

var readFileSync = fs.readFileSync('context.txt');
console.log(readFileSync)*/

fs.open('context.txt','r',function (err,data) {
    if (err) {
        console.log(err)
        return ;
    }else{
        console.log(data);
    }

    var  buf=new Buffer(8);

    fs.read(data,buf,0,8,null,function (err,bytesRead,buffer) {
        if (err){
            console.log(err);
            return;
        }

        console.log('bytesRead'+bytesRead);

        console.log(buffer);


    })

});