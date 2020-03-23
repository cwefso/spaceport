var Being = require('../src/being');
var Part = require('../src/part');
var validTypes = ['military' , 'passenger' , 'cargo']

class Ship {
  constructor(model) {
    this.name = model.name;
    this.type = undefined;
    this.maxCrew = model.maxCrew;
    this.odometer = 0;
    this.fuelCapacity = 10;
    this.captain = model.captain;
    this.parts = {};

    if(validTypes.includes(model.type)) {
      this.type = model.type;
    } else {
      return undefined;
    };

    if(model.odometer === undefined) {
      this.odometer = 0;
    } else {
      this.odometer = model.odometer;
    };

    if(model.fuelCapacity === undefined) {
      this.fuelCapacity = 10;
    } else {
      this.fuelCapacity = model.fuelCapacity;
    };

    if(model.fuel === undefined) {
      this.fuel = 0;
    } else {
      this.fuel = model.fuel;
    };

    if (model.crew === undefined) {
      this.crew = [];
    } else {
      this.crew.push(crew) ;
    };

    if (model.cargo === undefined) {
      this.cargo = [];
    } else {
      this.cargo = model.cargo;
    };

    if(model.parts === undefined) {
      this.parts = {};
    } else {
      this.parts = model.parts;
    };
  };

  addCrew(crew) {
    for (var i = 0; i < this.maxCrew; i++) {
      if (crew[i] instanceof Being) {
        this.crew.push(crew[i]);
      } else {
        return [];
      }
    };
  };

  loadCargo(partCargo) {
    if (partCargo instanceof Part) {
      this.cargo.push(partCargo);
    } else {
      this.cargo === undefined;
    };
  };
};

module.exports = Ship;
