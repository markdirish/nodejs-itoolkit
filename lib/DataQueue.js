
const { Toolkit } = require('./Toolkit');

class DataQueue {
  constructor(conn, name, lib) {
    this.conn = conn;
    this.name = name;
    this.lib = lib;
    this.toolkit = new Toolkit(conn);
  }

  create(maxLength, callback) {
    this.toolkit.createDataQueue(this.name, this.lib, maxLength, callback);
  }

  delete(callback) {
    this.toolkit.deleteDataQueue(this.name, this.lib, callback);
  }

  receive(length, callback) {
    this.toolkit.receiveFromDataQueue(this.name, this.lib, length, callback);
  }

  peek(length, callback) {
    this.toolkit.peekAtDataQueue(this.name, this.lib, length, callback);
  }

  send(data, callback) {
    this.toolkit.sendToDataQueue(this.name, this.lib, data, callback);
  }

  clear() {
    return this;
  }

  getDescription() {
    return this;
  }

  getName() {
    return this;
  }
}

module.exports = DataQueue;
