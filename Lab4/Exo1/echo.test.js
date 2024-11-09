const exf = require('./echo');

test('exf function', () => {
    console.log = jest.fn(); 
    exf('test', 5)
  
    expect(console.log).toHaveBeenCalledTimes(5);
   
    expect(console.log).toHaveBeenCalledWith('test');
});