
const Toolkit = require('./Toolkit');

class DataQueue {
  constructor(conn, name, lib) {
    this.conn = conn;
    this.name = name;
    this.lib = lib;
  }

  create() {
    return this;
  }

  receive(length, callback) {
    Toolkit.receiveFromDataQueue(this.name, this.lib, length, callback)
  }

  send(data, callback) {
    Toolkit.sendToDataQueue(this.name, this.lib, data, callback);
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

exports = DataQueue;
