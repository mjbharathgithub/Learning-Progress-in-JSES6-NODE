const EventEmitter= require('events');
class Test extends EventEmitter{
  message(data){

    this.emit('message',data);

  }
  greeting(data){
  this.emit('greeting',data);
  }
}

const test=new Test();
test.once('message',(data)=>{
    console.log(`message : ${data}`);
});

test.on('greeting',(data)=>console.log(`greeting : ${data}`));

test.message("hello nodejs How are you");

test.greeting("Happy morning");
test.message("I am fine joseph");

// on(event, listener): Adds a listener for an event.
// once(event, listener): Adds a one-time listener for an event.
// emit(event, [args]): Triggers an event, optionally passing arguments.
// removeListener(event, listener): Removes a specific listener.
// removeAllListeners([event]): Removes all listeners for an event.
// listenerCount(emitter, event): Returns the number of listeners for an event.