myObject = require('./harika')

test('message received', ()=>{
    expect(myObject.Test_msg_hello()).toBe('Hello harshitha kuruba');
});
