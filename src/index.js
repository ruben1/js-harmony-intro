require('babel-runtime/core-js/promise').default = require('bluebird');
const _ = require('lodash');

describe('Class', function() {
  it('should create prototype-based functions with the "class" keyword', () => {
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    const person = new Person('Ruben');
    expect(person.name).toEqual('Ruben');
  });
  it('should allow to create instance methods', () => {
    class Person {
      constructor(name) {
        this.name
      }
      talk() {
        console.log('talking');
      }
    }
    const person = new Person('Ruben');
    expect(person.talk).toBeDefined();
  });
  it('should allow to extend from a super class', () => {
    class Animal {
      constructor() {
        this.isBorn = true;
      }
      birth() {

      }
      die() {

      }
    }
    class Person extends Animal {
      constructor(name) {
        super();
        this.name = name;
      }
      talk() {
        console.log('duuuuuuuurrr');
      }
    }
    const person = new Person('Ruben');
    expect(person.isBorn).toEqual(true);
    expect(person.die).toBeDefined();
    expect(person.name).toEqual('Ruben');
    expect(person.talk).toBeDefined();
  }); 
});
describe('Function', () => {
  describe('with Arrow Syntax and no "function" keyword', () => {
    it('should allow the declaration of functions with the arrow syntax and without "function" keyword', () => {
      var func = (x) => {
        return x;
      };
      expect(func.constructor).toEqual(jasmine.any(Function))
    });
    it('should bind "this" to the outer scope', function(done) {
      this.name = 'Ruben';

      setTimeout(() => {
        expect(this.name).toEqual('Ruben');
        done()
      });
    });
    it('should allow one-line expressions with implicit return', () => {
      var sum = (x, y) => x + y
      expect(sum(1,2)).toEqual(3);
    });
    it('should allow function statements', () => {
      var substract = (x, y) => {
        return x - y;
      };
      expect(substract(3,1)).toEqual(2);
    });
    it('should allow no parens when there is only 1 argument', () => {
      var triple = x => x * 3
      expect(triple(10)).toEqual(30);
    });
  });
  describe('with default argument values', () => {
    beforeEach(() => {
    });
    it('should allow to set default argument values', () => {
      var sum = (x=1, y=2) => {
        return x + y;
      };
      expect(sum()).toEqual(3);
    });
    it('should allow to set certain default argument values', () => {
      var sum = (x = 1, y) => {
        return x + y;
      };
      var substract = (x, y = 1) => {
        return x - y;
      };
      expect(sum(undefined, 2)).toEqual(3);
      expect(substract(3)).toEqual(2);
    })
  });
  describe('with spread operator', () => {
    it('should pass an array of values just like .apply()', () => {
      const data = ['mexican', 'taco'];
      var eat = (place, food) => {
        return {
          place,
          food
        };
      };
      expect(eat(...data).place).toEqual('mexican');
      expect(eat(...data).food).toEqual('taco');
    });
  });
  describe('with rest parameter', () => {
    it('should have an array of values passed', () => {
      const data = ['mexican', 'taco', 'burrito']
      var eat = (place, ...food) => {
        return {
          place,
          food
        };
      };
      expect(eat(...data).place).toEqual('mexican');
      expect(eat(...data).food).toEqual(jasmine.any(Array));
      expect(eat(...data).food).toEqual(['taco', 'burrito']);
    });
  });
});
describe('Array', () => {
  it('should destructure an array', () => {
    var visits = [30, 34, 40];
    var [mondayVisits, tuesdayVisits, wednesdayVisits] = visits;
    expect(mondayVisits).toEqual(30);
    expect(tuesdayVisits).toEqual(34);
    expect(wednesdayVisits).toEqual(40);
  });

  describe('Array methods', () => {
    xit('should have Array.from()', () => {
      expect(Array.from).toBeDefined();
      const divs = document.querySelector('div');
      expect(Array.from(divs) instanceof Array).toBe(true);
    });
    xit('should have Array.to()', () => {
      expect(Array.to).toBeDefined();      
    })
    xit('should have Array.entries()', () => {
      expect(Array.prototype.entries).toBeDefined();    
    });
    xit('should have Array.keys()', () => {
      expect(Array.prototype.keys).toBeDefined();    
    });
    xit('should have Array.values()', () => {
      expect(Array.prototype.values).toBeDefined();    
    });

  });
});

describe('Object', () => {
  it('should destructure an object', () => {
    var person = {firstName: 'Ruben', lastName: 'Vicario'};
    var {firstName: name} = person;
    expect(name).toEqual('Ruben');
  });
  it('should allow to specify just attribute if it matches a variable name', () => {
    var title = 'Titulo';
    var description = 'Descripcion';

    var newPost = {
      title,
      description
    };
    expect(newPost.title).toEqual('Titulo');
    expect(newPost.description).toEqual('Descripcion');    
  });
  xit('should have Object.assign', () => {
    expect(Object.assign).toBeDefined();
  });
  describe('Object.prototype', () => {
  });
});

describe('Symbol', () => {
  // describe('')
});
describe('Set', () => {

});
describe('Map', () => {
  it('should expose a get and a set method', () => {
    const map = new Map();
    map.set('one', 1);
    expect(map.get('one')).toEqual(1);
  });
  it('should expose a clear method', () => {
    const map = new Map();
    map.set('one', 1);
    map.clear();
    expect(map.get('one')).toBeUndefined();
  });
  it('should expose a has method', () => {
    const map = new Map();
    map.set(1);
    expect(map.has(1)).toBe(true);
  });
  it('should expose a size property', () => {
    const map = new Map();
    map.set('one', 1);
    expect(map.size).toEqual(1);
  });
  it('should expose an entries method', () => {
    const map = new Map();
    map.set('one', 1);
    for(let [key, value] of map.entries()) {
      expect(key).toEqual('one');
      expect(value).toEqual(1);
    }
  });
  it('should expose a keys method', () => {
    const map = new Map();
    map.set('one', 1);
    for(let key of map.keys()) {
      expect(key).toEqual('one');
    }
  });
  it('should expose a values method', () => {
    const map = new Map();
    map.set('one', 1);
    for(let value of map.values()) {
      expect(value).toEqual(1);
    }
  });
  // object only accepts strings and symbols
  it('should accept any value as key', () => {
    const map = new Map();
    const obj = {};
    const func = function() {};
    const str = 'hola';
    map.set(obj, 'a');
    map.set(func, 'b');
    map.set(str, 'c');
    expect(map.get(obj)).toEqual('a');
    expect(map.get(func)).toEqual('b');
    expect(map.get(str)).toEqual('c');
  });
});
// no references are held to the keys of the map -> available to garbage collection
describe('WeakMap', () => {
  it('should expose get, set, clear, has and size', () => {
    const weakmap = new WeakMap();
    weakmap.set({a: 1}, 'a');
  })
  it('should not expose entries, keys, values methods', () => {
    const weakmap = new WeakMap();
    expect(weakmap.entries).toBeUndefined();
    expect(weakmap.keys).toBeUndefined();
    expect(weakmap.values).toBeUndefined();
  })
  it('should only accept objects as keys', () => {
    const weakmap = new WeakMap();
    const obj = {a: 1};
    weakmap.set(obj, 1);
    expect(weakmap.get(obj)).toEqual(1);
  })
});

describe('Variable Declarations', () => {
  describe('var', () => {
    it('should be constrained to its enclosing function', () => {
      var hungry = true;
      if(hungry) {
        var food = 'taco';
      }
      expect(food).toBeDefined();
    });
  });
  describe('let', () => {
    it('should be constrained to its enclosing block', () => {
      var hungry = true;
      var food; //initialize variable so that it doesn't throw an error on the expect
      if(hungry) {
        let food = 'taco';
      }
      expect(food).toBeUndefined();
    });
  });
  describe('const', () => {
    it('should be constrained to its enclosing block', () => {
      var hungry = true;
      var food; //initialize variable so that it doesn't throw an error on the expect
      if(hungry) {
        const food = 'taco';
      }
      expect(food).toBeUndefined();
    });

    it('should be read-only', () => {
      const browser = 'chrome';
      //browser = 'ie'; //would throw an error
      expect(true).toBe(true);
    });
  });
});


describe('Templates', () => {
  it('should have string interpolation', () => {
    var wine = 'Rioja';
    expect(`My favourite wine is ${wine}`).toEqual('My favourite wine is Rioja'); 
  });
  it('should have multiline strings', () => {
    expect(true).toBe(true);
  });
  it('should have tagged templates', () => {
    expect(true).toBe(true);
  });
});

describe('Promise', () => {
  describe('constructor', () => {
    it('should have a promise constructor', () => {
      expect(Promise).toEqual(jasmine.any(Function));
    });
    describe('#all', () => {
      it('should have .all() method', () => {
        expect(Promise.all).toEqual(jasmine.any(Function));
      });
      it('.all() should return a promise that resolves when all the promises passed into it have resolved', done => {
        var promise1 = new Promise((resolve, reject) => {
          resolve(1);
        });
        var promise2 = Promise.resolve(2);
        var promiseGroup = Promise.all([promise1, promise2])
          .then(values => {
            expect(values).toEqual([1,2]);
            done();
          });
      });
      it('.all() should return a promise that rejects if any promise passed into it have rejected', done => {
        var promise1 = new Promise((resolve, reject) => {
          resolve(1);
        });
        var promise2 = Promise.reject('random error');
        var promiseGroup = Promise.all([promise1, promise2])
          .then(values => {
            //doesn't get here;
          })
          .catch(err => {
            expect(err).toEqual('random error');
            done();
          }); 
      });
    });
    describe('#resolve', () => {
      it('should have .resolve() method', () => {
        expect(Promise.resolve).toEqual(jasmine.any(Function));
      });
      it('should return a promise that will be resolved with the value passed', done => {
        var promise1 = Promise.resolve(1);

        promise1.then(value => {
          expect(value).toEqual(1);
          done();
        });
      });
      it('should return a promise that will be resolved with the promise passed', done => {
        var promise2 = Promise.resolve(new Promise(resolve => {
          setTimeout(() => {
            resolve(2);
          }, 100);
        }));
        
        promise2.then(value => {
          expect(value).toEqual(2);
          done();
        }); 
      });
      it('should return a promise that will be resolved with the "thenable" object passed', done => {
        var obj = {
          then: (onFulfill, onReject) => {
            onFulfill(3);
          }
        };
        var promise3 = Promise.resolve(obj);

        promise3.then(value => {
          expect(value).toEqual(3);
          done();
        });
      });
    });
    describe('#reject', () => {
      it('should have reject method', function() {
        expect(Promise.reject).toEqual(jasmine.any(Function));
      });
      it('should return a promise that will be reject with the error passed', done => {
        var promise = Promise.reject(new Error('random error'));

        promise.catch(err => {
          expect(err.constructor).toEqual(Error);
          done();
        });
      });
    });
  });
  describe('instance', () => {
    it('should be able to create a new promise', () => {
      var promise = new Promise((resolve, reject) => {
        resolve(1);
      });
      expect(promise.constructor).toEqual(Promise);
    });
    it('should be able to resolve a promise', done => {
      var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1);
        }, 100);
      });

      promise.then(value => {
        expect(value).toEqual(1);
        done();
      });
    });
    it('should be able to reject a promise', done => {
      var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(2);
        }, 100);
      });

      promise.catch(err => {
        expect(err).toEqual(2);
        done();
      });
    });
  });
});
describe('Iterator', () => {
  // for of loop with arrays, sets, maps will call the iterator method(Symbol.iterator) on the object(only if it's iterable -> has an iterator method)
  // An iterator object can be any object with a .next() method. The for-of loop will call this method repeatdly, once each time through the loop
  // they are not a single class but an extension point of the language
  // objects -> for in or for of with Object.keys()
  var zeroesForeverIterator = {
    [Symbol.iterator]: function () {
      return this;
    },
    next: function () {
      return {done: false, value: 0};
    }
  };

  // pseudocode
  var $iterator = ITERABLE[Symbol.iterator]();
  var $result = $iterator.next();
  while (!$result.done) {
    VAR = $result.value;
    STATEMENTS
    $result = $iterator.next();
  }
  // PYTHON EXAMPLE
  // # An iterable is an object that knows how to create an iterator.
  // our_iterator = iter(our_iterable)

  // # Our iterator is an object that can remember the state as we traverse through it.
  // # We get the next object with "next()".
  // next(our_iterator)  #=> "one"

  // # It maintains state as we iterate.
  // next(our_iterator)  #=> "two"
  // next(our_iterator)  #=> "three"

  // # After the iterator has returned all of its data, it gives you a StopIterator Exception
  // next(our_iterator) # Raises StopIteration

  // # You can grab all the elements of an iterator by calling list() on it.
  // list(filled_dict.keys())  #=> Returns ["one", "two", "three"]
});
describe('Generator', () => {
  // yield pauses execution until next call 
  // the generator function will return a paused generator object
  // each time you call .next() on it, it will run until the next yield statement and will 'return' what's been yielded
  function* quips(name) {
    yield "hello " + name + "!";
    yield "i hope you are enjoying the blog posts";
    if (name.startsWith("X")) {
      yield "it's cool how your name starts with X, " + name;
    }
    yield "see you later!";

    // var iter = quips("jorendorff");
    //   [object Generator]
    // > iter.next()
    //   { value: "hello jorendorff!", done: false }
    // > iter.next()
    //   { value: "i hope you are enjoying the blog posts", done: false }
    // > iter.next()
    //   { value: "see you later!", done: false }
    // > iter.next()
    //   { value: undefined, done: true }
    //   
    //   In technical terms, each time a generator yields, its stack frame—the local variables, 
    //   arguments, temporary values, and the current position of execution within the generator body—is 
    //   removed from the stack. However, the Generator object keeps a reference to (or copy of) this stack frame, 
    //   so that a later .next() call can reactivate it and continue execution.

    function* range(start, stop) {
      for (var i = start; i < stop; i++)
        yield i;
    }
    // generators are iterators. All generators have a built-in implementation 
    // of .next() and [Symbol.iterator]().
  }
});
describe('Proxy', () => {

});



// python generator
// 
/*# Generators help you make lazy code
def double_numbers(iterable):
    for i in iterable:
        yield i + i

# A generator creates values on the fly.
# Instead of generating and returning all values at once it creates one in each
# iteration.  This means values bigger than 15 wont be processed in
# double_numbers.
# We use a trailing underscore in variable names when we want to use a name that
# would normally collide with a python keyword
range_ = range(1, 900000000)
# will double all numbers until a result >=30 found
for i in double_numbers(range_):
    print(i)
    if i >= 30:
        break
*/
