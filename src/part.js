var validTypes = [
      'shell',
      'hyperdrive',
      'computer',
      'life support',
      'landing gear',
      undefined];

class Part {
  constructor(item) {
    this.name = item.name;
    this.type = item.type === validTypes[0] || item.type === validTypes[1] || item.type === validTypes [2] || item.type === validTypes [3] || item.type === validTypes[4] ? item.type : undefined;
    this.value = item.value;
    this.broken = false;
  }

  isValid() {
     if (this.name!= undefined &&
         this.type != undefined &&
         this.value != undefined)
         { return true; } else { return false; }
            };

  }

module.exports = Part;
