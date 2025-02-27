// State design pattern
// behavioral pattern that allows an object to change its behavior when its internal state changes.
//  Example : Traffic Light System

// class RedLight {
//     constructor (trafficLight) {
//         this.trafficLight = trafficLight
//     }

//     change() {
//         console.log('Red -> Green')
//         this.trafficLight.setState(this.trafficLight.green)
//     }
// }
// class GreenLight {
//     constructor (trafficLight) {
//         this.trafficLight = trafficLight
//     }
//         change() {
//             console.log('Green -> Yellow')
//             this.trafficLight.setState(this.trafficLight.yellow)

//         }
// }

// class YellowLight {
//     constructor (trafficLight) {
//         this.trafficLight = trafficLight
//     }

//     change() {
//         console.log('Yellow -> Red')
//         this.trafficLight.setState(this.trafficLight.red)
//     }
// }

// // context class
// class TrafficLight {
//     constructor() {
//         this.red = new RedLight(this);
//         this.green = new GreenLight(this);
//         this.yellow = new YellowLight(this);
//         this.currentState = this.red;
//     }

//     setState(state) {
//         this.currentState = state;
//       }

//       change() {
//         this.currentState.change();
//       }

// }

// const trafficLight = new TrafficLight();
// trafficLight.change();
// trafficLight.change();
// trafficLight.change();

// The Prototype design pattern is a creational pattern that allows you to create new objects by copying an existing object (a prototype) rather than instantiating a new one from scratch.

// class Prototype {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     clone() {
//       return new Prototype(this.name, this.age);
//     }
//   }

//   const original = new Prototype("Alice", 25);
//   const clone = original.clone();

//   console.log(clone.name);
//   console.log(clone.age);

// //   Example Without Prototype (Tightly Coupled)

// class Car {
//     constructor(brand, model) {
//       this.brand = brand;
//       this.model = model;
//     }
//   }

//   const carNew = new Car("Toyota", "Corolla");
//   console.log(carNew)

//   Example With Prototype (Loosely Coupled)

// class Vehicle {
//     clone() {
//       return Object.create(this);
//     }
//   }

//   class Car2 extends Vehicle {
//     constructor(brand, model) {
//       super();
//       this.brand = brand;
//       this.model = model;
//     }
//   }

//   const car1 = new Car2("Benz", "Newtrolla");

//   const car3 = car1.clone();
//   console.log(car3.brand);
//   console.log(car3.model);

// class Prototype {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     clone() {
//       return new Prototype(this.name, this.age);
//     }
//   }

//   const original = new Prototype("Alice", 25);

//   const clone1 = original.clone();
//   const clone2 = original.clone();

//   clone1.name = "Bob";
//   clone1.age = 30;

//   clone2.name = "Charlie";
//   clone2.age = 35;

//   console.log(original.name, original.age);
//   console.log(clone1.name, clone1.age);
//   console.log(clone2.name, clone2.age);

//   console.log(original === clone1);
//   console.log(original === clone2);
//   console.log(clone1 === clone2);

//  Strategy Design Pattern (Behavioral Pattern)
//  The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms, put them in separate classes, and make them interchangeable at runtime. This pattern is useful when you need to dynamically change an object's behavior without modifying its code.

//  Define the Strategy Interface
// class PaymentStrategy {
//   pay(amount) {
//     throw new Error("This method should be overridden!");
//   }
// }

//   Create Concrete Strategies
// class CreditCardPayment extends PaymentStrategy {
//   pay(amount) {
//     console.log(`Paid $${amount} using Credit Card.`);
//   }
// }

// class PayPalPayment extends PaymentStrategy {
//   pay(amount) {
//     console.log(`Paid $${amount} using PayPal.`);
//   }
// }

// class BitcoinPayment extends PaymentStrategy {
//   pay(amount) {
//     console.log(`Paid $${amount} using Bitcoin.`);
//   }
// }

//  Create a Context Class
// class PaymentContext {
//   constructor(strategy) {
//     this.strategy = strategy;
//   }

//   setStrategy(strategy) {
//     this.strategy = strategy;
//   }

//   executePayment(amount) {
//     this.strategy.pay(amount);
//   }
// }

// const paymentContext = new PaymentContext(new CreditCardPayment());

// paymentContext.executePayment(100);

// paymentContext.setStrategy(new PayPalPayment());
// paymentContext.executePayment(200);

// paymentContext.setStrategy(new BitcoinPayment());
// paymentContext.executePayment(300);


//  Proxy Pattern 
// The Proxy Pattern is a structural design pattern used to provide a surrogate or placeholder for another object to control access to it. The proxy acts as an intermediary between the client and the real object, adding an additional layer of control such as lazy initialization, access control, logging, or caching.

// class ExpensiveResource {
//     constructor() {
//       console.log("Expensive Resource Initialized");
//       this.data = "Some heavy data";
//     }
  
//     fetchData() {
//       return this.data;
//     }
//   }

  
//   class ResourceProxy {
//     constructor() {
//       this.realResource = null;
//     }
  
//     fetchData() {
//       if (!this.realResource) {
//         console.log("Creating Expensive Resource...");
//         this.realResource = new ExpensiveResource();
//       }
//       return this.realResource.fetchData();
//     }
//   }
  
  

//   const proxy = new ResourceProxy();
//   console.log(proxy.fetchData()); 
//   console.log(proxy.fetchData()); 
//   console.log(proxy.fetchData()); 
  

// Observer pattern
// is a behavioral design pattern 
// that establishes a one-to-many dependency between objects.
// ensuring that when one object (the subject) changes its state,
// all its dependent objects (observers) are automatically notified and updated.

// class Subject {
//     constructor() {
//         this.observers = [];
//     }

//     addObserver(observer) {
//         this.observers.push(observer);
//     }

//     removeObserver(observer) {
//         this.observers = this.observers.filter(obs => obs !== observer);
//     }

//     notifyObservers(data) {
//         this.observers.forEach(observer => observer.update(data));
//     }

    
// }

// class Observer {
//     constructor(name) {
//         this.name = name;
//     }

//     update(data) {
//         console.log(`${this.name} received update: ${data}`);
//     }
// }

// const subject = new Subject();

// const observer1 = new Observer("Observer 1");
// const observer2 = new Observer("Observer 2");
// const observer3 = new Observer("Observer 3");
// const observer4 = new Observer("Observer 4");

// subject.addObserver(observer1);
// subject.addObserver(observer2);
// subject.addObserver(observer3);
// subject.addObserver(observer4);

// subject.notifyObservers("New data available!");



// Decorator Pattern
// allows you to dynamically add new behaviors or functionalities to an object without modifying its original structure.

// class Coffee {
//     cost() {
//         return 5; 
//     }
// }

// const myCoffee = new Coffee();
// console.log(myCoffee.cost()); 

// function withMilk(coffee) {
//     const cost = coffee.cost();
//     coffee.cost = function () {
//         return cost + 2; 
//     };
//     return coffee;
// }

// function withSugar(coffee) {
//     const cost = coffee.cost();
//     coffee.cost = function () {
//         return cost + 1; 
//     };
//     return coffee;
// }

// let myCoffee = new Coffee();
// myCoffee = withMilk(myCoffee);
// myCoffee = withSugar(myCoffee);

// console.log(myCoffee.cost());

// Base class
// class Coffee {
//     cost() {
//         return 5; 
//     }
// }

// class MilkDecorator {
//     constructor(coffee) {
//         this.coffee = coffee;
//     }

//     cost() {
//         return this.coffee.cost() + 20; 
//     }
// }


// class SugarDecorator {
//     constructor(coffee) {
//         this.coffee = coffee;
//     }

//     cost() {
//         return this.coffee.cost() + 10; 
//     }
// }

// // Usage
// let myCoffee = new Coffee();
// console.log(myCoffee.cost()); 

// myCoffee = new MilkDecorator(myCoffee);
// console.log(myCoffee.cost()); 

// myCoffee = new SugarDecorator(myCoffee);
// console.log(myCoffee.cost()); 

// let baseCoffee = new Coffee();
// let sugarOnly = new SugarDecorator(baseCoffee);
// console.log(sugarOnly.cost());



//  Coupling 
// class Logger {
//     log(message) {
//       console.log(message);
//     }
//   }
  
//   class App {
//     constructor(logger) {
//       this.logger = logger;
//     }
  
//     run() {
//       this.logger.log("App is running");
//     }
//   }
  
//   const logger = new Logger();
//   const writting = new Logger();
//   const speak = new Logger();

//   const app = new App(logger);
//   const app2 = new App(writting);
//   const app3 = new App(speak);
//   app.run();
//   app2.run();
//   app3.run();



  class ConsoleLogger {
    log(message) {
      console.log(`[Console]: ${message}`);
    }
  }
  
  class FileLogger {
    log(message) {
      console.log(`[File]: ${message} (pretend this is written to a file)`);
    }
  }

  class MahdiGol {
    log(message) {
      console.log(`[File222]: ${message} (this is make sure its going right)`);
    }
  }


  
  class App {
    constructor(logger) {
      this.logger = logger; // No hardcoded dependency
    }
  
    run() {
      this.logger.log("App is running");
    }
  }
  
  // Swap loggers easily
  const consoleLogger = new ConsoleLogger();
  const fileLogger = new FileLogger();
  const mahdigole = new MahdiGol()

  const app1 = new App(consoleLogger);
  app1.run(); // Logs: [Console]: App is running
  
  const app2 = new App(fileLogger);
  app2.run(); // Logs: [File]: App is running (pretend this is written to a file)

  const app3 = new App(mahdigole)
  app3.run()
  
