const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }

    this.chain.push(`( ${value === null ? value : value.toString()} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== "number"
        || position !== parseInt(position)
        || position <= 0 
        || position > this.chain.length)  {
      this.chain = null;
      throw new Error("You can't remove incorrect link!");
    }

    if (this.chain) {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    if (this.chain) {
      this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    const stringChain = this.chain.join("~~");
    this.chain = null;
    return stringChain;
  }
};

module.exports = {
  chainMaker
};
