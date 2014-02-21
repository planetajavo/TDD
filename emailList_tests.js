chai.should(); // invoking this function creates a "should" object on every object
context = describe;

function filter (list) {
  return list[0];
};

/* TDD TO-DO list
* Test:
* ['test@test.com'] --> ['test@test.com']
* Test:
* ['test@test.com, 'test@test.com'] --> ['test@test.com']
* Test:
* [] --> []
* Test:
*['test(AT)test.com, 'test@test.com'] --> ['test@test.com']
* Test:
*['TEST(AT)TEST.COM, 'test@test.com'] --> ['test@test.com']
* Test:
*['TEST(DOT)TEST.COM, 'test@test.com'] --> ['test@test.com']
*/

describe ("the email list filter", function(){

  it("return the same array if there is no duplicates", function(){
      expect(['test@test.com']).toEqual(filter(['test@test.com']));      
  });

  it("returns always the same even the parameter changes", function(){
      expect(['test2@test.com']).toEqual(filter(['test2@test.com']));      
  });

  it("returns the array without duplicates", function(){
      expect(['test@test.com']).toEqual(filter(['test@test.com','test@test.com']));      
  });


});