class Ship {
  constructor(model) {
    this.name = model.name;
    this.type = model.type;
    this.maxCrew = model.maxCrew;
    this.odometer = 0;
  }
}

module.exports = Ship;
