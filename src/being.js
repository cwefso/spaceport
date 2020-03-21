class Being {
  constructor(name , species) {
    this.isAlive = true;
    this.name = name;
    this.species = species;
    this.credits = 0;
  }

  updateCredits(credits) {
    if (this.credits > 0) {
      this.credits = this.credits + credits;
    } else {
      this.credits = credits;
    }
  }

}

module.exports = Being;
