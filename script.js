// ----------------------------------------State design pattern---------------------------
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

// --------------------------------------------The Prototype design pattern--------------------
//  is a creational pattern that allows you to create new objects by copying an existing object (a prototype) rather than instantiating a new one from scratch.

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

// ---------------------------------- Strategy Design Pattern (Behavioral Pattern)-------------------
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

//  ----------------------------------Proxy Pattern-------------------------------------
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

// --------------------------------------Observer pattern---------------------------
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

// ----------------------------------------Decorator Pattern-----------------------------------
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

//  -----------------------------------------Coupling---------------------------------------
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

// class ConsoleLogger {
//   log(message) {
//     console.log(`[Console]: ${message}`);
//   }
// }

// class FileLogger {
//   log(message) {
//     console.log(`[File]: ${message} (pretend this is written to a file)`);
//   }
// }

// class MahdiGol {
//   log(message) {
//     console.log(`[File222]: ${message} (this is make sure its going right)`);
//   }
// }

// class App {
//   constructor(logger) {
//     this.logger = logger; // No hardcoded dependency
//   }

//   run() {
//     this.logger.log('App is running');
//   }
// }

// // Swap loggers easily
// const consoleLogger = new ConsoleLogger();
// const fileLogger = new FileLogger();
// const mahdigole = new MahdiGol();

// const app1 = new App(consoleLogger);
// app1.run(); // Logs: [Console]: App is running

// const app2 = new App(fileLogger);
// app2.run(); // Logs: [File]: App is running (pretend this is written to a file)

// const app3 = new App(mahdigole);
// app3.run();

// --------------------------------------- Facade Pattern--------------------------------
// The Facade Pattern is a structural design pattern that provides a simplified interface to a complex system of classes, libraries, or APIs.
// Think of it as a wrapper that hides the complexity of multiple subsystems and provides a cleaner, more user-friendly API.

// //  Without Facade (Complex System)
// class TV {
//   on() {
//     console.log('TV is turned ON');
//   }
//   setInput(input) {
//     console.log(`TV input set to ${input}`);
//   }
// }

// class SoundSystem {
//   on() {
//     console.log('Sound system is turned ON');
//   }
//   setVolume(level) {
//     console.log(`Sound system volume set to ${level}`);
//   }
// }

// class DVDPlayer {
//   on() {
//     console.log('DVD Player is turned ON');
//   }
//   play(movie) {
//     console.log(`Playing movie: ${movie}`);
//   }
// }

// // Usage without a Facade
// const tv = new TV();
// const sound = new SoundSystem();
// const dvd = new DVDPlayer();

// tv.on();
// tv.setInput('DVD');
// sound.on();
// sound.setVolume(10);
// dvd.on();
// dvd.play('Inception');

// With Facade (Simplified Interface)

// class HomeTheaterFacade {
//   constructor(tv, sound, dvd) {
//     this.tv = tv;
//     this.sound = sound;
//     this.dvd = dvd;
//   }

//   watchMovie(movie) {
//     console.log('Setting up home theater for movie night...');
//     this.tv.on();
//     this.tv.setInput('DVD');
//     this.sound.on();
//     this.sound.setVolume(10);
//     this.dvd.on();
//     this.dvd.play(movie);
//     console.log('Enjoy your movie! 🍿');
//   }
// }

// // Usage with Facade
// const homeTheater = new HomeTheaterFacade(
//   new TV(),
//   new SoundSystem(),
//   new DVDPlayer()
// );
// homeTheater.watchMovie('Inception');

// ------------------------------------------Abstract Factory------------------------------------
// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

// Abstract Product: Button
// class Button {
//   render() {
//     throw new Error('render() must be implemented');
//   }
// }

// // Abstract Product: Textbox
// class Textbox {
//   render() {
//     throw new Error('render() must be implemented');
//   }
// }

// // Concrete Product: Dark Themed Components
// class DarkButton extends Button {
//   render() {
//     console.log('Rendering Dark Button 🖤');
//   }
// }

// class DarkTextbox extends Textbox {
//   render() {
//     console.log('Rendering Dark Textbox 🖤');
//   }
// }

// // Concrete Product: Light Themed Components
// class LightButton extends Button {
//   render() {
//     console.log('Rendering Light Button 🤍');
//   }
// }

// class LightTextbox extends Textbox {
//   render() {
//     console.log('Rendering Light Textbox 🤍');
//   }
// }

// // Abstract Factory
// class ThemeFactory {
//   createButton() {
//     throw new Error('createButton() must be implemented');
//   }

//   createTextbox() {
//     throw new Error('createTextbox() must be implemented');
//   }
// }

// // Concrete Factory: Dark Theme
// class DarkThemeFactory extends ThemeFactory {
//   createButton() {
//     return new DarkButton();
//   }

//   createTextbox() {
//     return new DarkTextbox();
//   }
// }

// // Concrete Factory: Light Theme
// class LightThemeFactory extends ThemeFactory {
//   createButton() {
//     return new LightButton();
//   }

//   createTextbox() {
//     return new LightTextbox();
//   }
// }

// function createUI(factory) {
//   const button = factory.createButton();
//   const textbox = factory.createTextbox();

//   button.render();
//   textbox.render();
// }

// // Example usage
// const darkTheme = new DarkThemeFactory();
// console.log('Dark Theme UI:');
// createUI(darkTheme);

// const lightTheme = new LightThemeFactory();
// console.log('\nLight Theme UI:');
// createUI(lightTheme);

// //    -------------------another example for Abstract factory-------------------------
// // Abstract Product: Engine
// class Engine {
//   start() {
//     throw new Error('start() must be implemented');
//   }
// }

// // Abstract Product: Wheels
// class Wheels {
//   roll() {
//     throw new Error('roll() must be implemented');
//   }
// }

// // Concrete Product: Car Engine
// class CarEngine extends Engine {
//   start() {
//     console.log('Car engine starts with a roar!');
//   }
// }

// // Concrete Product: Car Wheels
// class CarWheels extends Wheels {
//   roll() {
//     console.log('Car wheels are rolling smoothly on the road.');
//   }
// }

// // Concrete Product: Motorcycle Engine
// class MotorcycleEngine extends Engine {
//   start() {
//     console.log('Motorcycle engine starts with a vroom!');
//   }
// }

// // Concrete Product: Motorcycle Wheels
// class MotorcycleWheels extends Wheels {
//   roll() {
//     console.log('Motorcycle wheels are rolling fast and sleek.');
//   }
// }

// // Abstract Factory
// class VehicleFactory {
//   createEngine() {
//     throw new Error('createEngine() must be implemented');
//   }

//   createWheels() {
//     throw new Error('createWheels() must be implemented');
//   }
// }

// // Concrete Factory: Car Factory
// class CarFactory extends VehicleFactory {
//   createEngine() {
//     return new CarEngine();
//   }

//   createWheels() {
//     return new CarWheels();
//   }
// }

// // Concrete Factory: Motorcycle Factory
// class MotorcycleFactory extends VehicleFactory {
//   createEngine() {
//     return new MotorcycleEngine();
//   }

//   createWheels() {
//     return new MotorcycleWheels();
//   }
// }

// function buildVehicle(factory) {
//   const engine = factory.createEngine();
//   const wheels = factory.createWheels();

//   engine.start();
//   wheels.roll();
// }

// // Example usage
// console.log('Building a Car:');
// const carFactory = new CarFactory();
// buildVehicle(carFactory);

// console.log('\nBuilding a Motorcycle:');
// const motorcycleFactory = new MotorcycleFactory();
// buildVehicle(motorcycleFactory);

// ----------------------------------Encapsulation----------------------------
// Encapsulation is the practice of bundling data (properties) and methods that operate on that data into a single unit (object or class) while restricting direct access to some of the object's details. This helps maintain control over how data is modified.

class BankAccount {
  #balance; // Private property

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
    console.log(balance);
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log('Insufficient funds');
    }
  }

  getBalance() {
    return `Balance: $${this.#balance}`;
  }
}

const myAccount = new BankAccount('Ali', 500);
console.log(myAccount.owner);
myAccount.deposit(200);
console.log(myAccount.getBalance());
myAccount.withdraw(100);
console.log(myAccount.getBalance());

//  -----------------------------------------Polymorphism----------------------
// allows objects to be treated as instances of their parent class, enabling method overriding where a subclass provides a specific implementation of a method from its superclass.
// Polymorphism is the ability for objects of different classes to respond to the same method in their own unique ways
class Animal {
  makeSound() {
    console.log('Some generic animal sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof! Woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow! Meow!');
  }
}

// Function demonstrating polymorphism
function makeAnimalSound(animal) {
  animal.makeSound();
}

const myDog = new Dog();
const myCat = new Cat();
const randomAnimal = new Animal();

makeAnimalSound(myDog); // Output: Woof! Woof!
makeAnimalSound(myCat); // Output: Meow! Meow!
makeAnimalSound(randomAnimal); // Output: Some generic animal sound

//  -----------------------------Adapter Design Pattern-----------------------
//  is a structural design pattern that allows incompatible interfaces to work together.
// It acts as a bridge between two incompatible interfaces by converting one interface into another that is expected by the client.
// Legacy system
class OldPrinter {
    printText(text) {
        console.log("Printing from Old Printer: " + text);
    }
}
// New system that expects a different interface
class NewPrinter {
    print(message) {
        console.log("New Printer printing: " + message);
    }
}
// Adapter class
class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;  // The old printer is passed to the adapter
    }

    print(message) {
        // Adapter makes the OldPrinter compatible with NewPrinter's expected interface
        this.oldPrinter.printText(message);  // Use the old printer's printText method
    }
}
// Creating an instance of the old printer
const oldPrinter = new OldPrinter();

// Using the adapter to make the old printer compatible with the new system
const adapter = new PrinterAdapter(oldPrinter);

// Now we can use the adapter as if it's a NewPrinter
adapter.print("Hello, Adapter Pattern!");  // Output: Printing from Old Printer: Hello, Adapter Pattern!
