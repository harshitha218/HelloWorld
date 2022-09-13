myObject = require('./harika')

test('message received', ()=>{
    expect(myObject.msg()).toBe('Hello harshitha kuruba');
});