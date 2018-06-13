

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var emitter = new events.EventEmitter();

emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener1',arg1,arg2);
});


emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
});

emitter.once('someEvent',function (arg1) {
    console.log('listener3',arg1);
})

emitter.removeListener('eventEvent')

//emitter.removeAllListeners();

emitter.emit('someEvent','byvoid',1991)

emitter.emit('error')















