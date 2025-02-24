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

class ExpensiveResource {
    constructor() {
      console.log("Expensive Resource Initialized");
      this.data = "Some heavy data";
    }
  
    fetchData() {
      return this.data;
    }
  }

  
  class ResourceProxy {
    constructor() {
      this.realResource = null;
    }
  
    fetchData() {
      if (!this.realResource) {
        console.log("Creating Expensive Resource...");
        this.realResource = new ExpensiveResource();
      }
      return this.realResource.fetchData();
    }
  }
  
  

  const proxy = new ResourceProxy();
  console.log(proxy.fetchData()); 
  console.log(proxy.fetchData()); 
  console.log(proxy.fetchData()); 
  