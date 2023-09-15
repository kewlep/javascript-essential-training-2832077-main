/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 * 
 * 
 * this class contains the properties of in iPhone - model, type colour and capcity
 * and has a toggle for the power status - on or off
 */

class Iphone {
  constructor(
    // Defines parameters:
    model,
    type,
    color,
    capacityGBNum,
    powerStatus,
  ) {
    // Define properties:
    this.model = model;
    this.type = type;
    this.color = color;
    this.capacityGBNum = capacityGBNum;
    this.powerStatus = powerOn;
};
  }
  // Add methods like normal functions:
  togglePower(powerStatus) {
    this.powerOn = powerStatus;
 
}

export default Backpack;
