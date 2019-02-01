// Copyright (c) International Business Machines Corp. 2019
// All Rights Reserved

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
// associated documentation files (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge, publish, distribute,
// sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or
// substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
// NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */ // mocha needs 'this' context

const assert = require('assert');
const xt = require('../lib/itoolkit');

const connection = new xt.Connection('*LOCAL', 'mirish', 'my27pass');
const toolkit = new xt.Toolkit(connection);

// const hint = 'check the "success" property in return value';
// // Need change based on your server configurations
// const opt = {
//   db: '*LOCAL',
//   user: 'YOURNAME',
//   pwd: 'PASSWORD',
//   host: '0.0.0.0',
//   port: 8080,
//   path: '/cgi-bin/xmlcgi.pgm',
// };

// describe('Basic Function Test', () => {
//   describe('Test iCmd()', () => {
//     it(hint, (done) => {
//       const conn = new xt.Connection(opt.db);
//       conn.add(xt.iCmd('RTVJOBA USRLIBL(?) SYSLIBL(?)'));
//       conn.run((str) => {
//         const results = xt.xmlToJson(str);
//         results.forEach((result) => {
//           if (Object.prototype.hasOwnProperty.call(result, 'success')) {
//             assert(result.success === true);
//           }
//         });
//         done();
//       });
//     });
//   });

//   describe('Test iSh()', () => {
//     it(hint, (done) => {
//       const conn = new xt.Connection(opt.db);
//       conn.add(xt.iSh('system -i wrksyssts'));
//       conn.run((str) => {
//         const results = xt.xmlToJson(str);
//         results.forEach((result) => {
//           if (Object.prototype.hasOwnProperty.call(result, 'success')) {
//             assert(result.success === true);
//           }
//         });
//         done();
//       });
//     });
//   });

//   describe('Test iQsh()', () => {
//     it(hint, (done) => {
//       const conn = new xt.Connection(opt.db);
//       conn.add(xt.iQsh('system wrksyssts'));
//       conn.run((str) => {
//         const results = xt.xmlToJson(str);
//         results.forEach((result) => {
//           if (Object.prototype.hasOwnProperty.call(result, 'success')) {
//             assert(result.success === true);
//           }
//         });
//         done();
//       });
//     });
//   });

//   describe('Test iPgm()', () => {
//     it(hint, (done) => {
//       const conn = new xt.Connection(opt.db);
//       const pgm = new xt.ProgramCall('QWCRSVAL', { lib: 'QSYS' });
//       const outBuf = [
//         [0, '10i0'],
//         [0, '10i0'],
//         ['', '36h'],
//         ['', '10A'],
//         ['', '1A'],
//         ['', '1A'],
//         [0, '10i0'],
//         [0, '10i0'],
//       ];
//       pgm.addParam(outBuf, { io: 'out' });
//       pgm.addParam(66, '10i0');
//       pgm.addParam(1, '10i0');
//       pgm.addParam('QCCSID', '10A');
//       pgm.addParam(this.errno, { io: 'both', len: 'rec2' });
//       conn.add(pgm);
//       conn.run((str) => {
//         const results = xt.xmlToJson(str);
//         results.forEach((result) => {
//           if (Object.prototype.hasOwnProperty.call(result, 'success')) {
//             assert(result.success === true);
//           }
//         });
//         done();
//       });
//     });

//     it('Should return arbitrarily named parameter', (done) => {
//       const conn = new xt.Connection(opt.db);
//       const pgm = new xt.ProgramCall('QWCRSVAL', { lib: 'QSYS' });
//       const outBuf = [
//         [0, '10i0'],
//         [0, '10i0'],
//         ['', '36h'],
//         ['', '10A'],
//         ['', '1A'],
//         ['', '1A'],
//         [0, '10i0'],
//         [0, '10i0'],
//       ];
//       pgm.addParam(outBuf, { io: 'out' });
//       pgm.addParam(66, '10i0');
//       pgm.addParam(1, '10i0');
//       pgm.addParam('QCCSID', '10A');
//       const paramValue = 'errno';
//       pgm.addParam(this.errno, { io: 'both', len: 'rec2', name: paramValue });
//       conn.add(pgm);
//       conn.run((str) => {
//         const results = xt.xmlToJson(str);
//         results.forEach((result) => {
//           if (Object.prototype.hasOwnProperty.call(result.data[11], 'name')) {
//             assert(result.data[11].name === paramValue);
//           }
//         });
//         done();
//       });
//     });
//     /** * Refer to test/rpg/zzsrv6.rpgle
//     it('Should return success with addReturn arbitrary attribute specified', (done) => {
//       let conn = new xt.Connection(opt.db);
//       let pgm = new xt.iPgm("ZZSRV6", {"lib":"XMLSERVICE", "func":"ZZVARY4"});
//       pgm.addParam("Gill", "10A", {"letying":"4"});
//       let test_value = "NEW_NAME";
//       pgm.addReturn("0", "20A", {"letying":"4","name":test_value});
//       conn.add(pgm);
//       conn.run((str) => {
//         let results = xt.xmlToJson(str);
//         if(results[0].data[1].name === test_value) done();
//         else done(new Error(JSON.stringify(results)));
//       });
//     });
//     ** */
//   });

//   describe('Test iSql()', () => {
//     it(hint, (done) => {
//       const conn = new xt.Connection(opt.db);
//       const sql = new xt.SqlCall(); /* Test iSql Class */
//       sql.prepare('call qsys2.tcpip_info()');
//       sql.execute();
//       sql.fetch();
//       sql.free();
//       conn.add(sql);
//       conn.run((str) => {
//         const results = xt.xmlToJson(str);
//         results.forEach((result) => {
//           if (Object.prototype.hasOwnProperty.call(result, 'success')) {
//             assert(result.success === true);
//           }
//         });
//         done();
//       });
//     });

//     it('should return SQL result set', (done) => {
//       const conn = new xt.Connection(opt.db);
//       const sql = new xt.SqlCall();
//       sql.addQuery('SELECT LSTNAM, STATE FROM QIWS.QCUSTCDT');
//       sql.fetch();
//       sql.free();
//       conn.add(sql);
//       conn.run((str) => {
//         const results = xt.xmlToJson(str);
//         results.forEach((result) => {
//           if (Object.prototype.hasOwnProperty.call(result, 'success')) {
//             assert(result.success === true);
//           }
//           result.result.forEach((row) => {
//             assert(Object.prototype.hasOwnProperty.call(row[0], 'desc'));
//           });
//         });
//         done();
//       });
//     });

//     it('should parse SQL result set empty data tags correctly', (done) => {
//       const conn = new xt.Connection(opt.db);
//       const sql = new xt.SqlCall();
//       sql.addQuery("SELECT '' AS BLANK, STATE FROM QIWS.QCUSTCDT");
//       sql.fetch();
//       sql.free();
//       conn.add(sql);
//       conn.run((str) => {
//         const results = xt.xmlToJson(str);
//         results.forEach((result) => {
//           if (Object.prototype.hasOwnProperty.call(result, 'success')) {
//             assert(result.success === true);
//           }
//           result.result.forEach((row) => {
//             assert(row[0].value === '');
//           });
//         });
//         done();
//       });
//     });
//   });
// });

describe('API Tests', function () {
  this.slow(1000);
  describe('Data Queue (DTAQ) Tests', () => {
    describe('createDataQueue()...', () => {
      it('...should create a new data queue on the system.', (done) => {
        // this.slow(1000);
        toolkit.createDataQueue('QBERT', 'MARK', 100, (createResult) => {
          assert.strictEqual(createResult, true);
          toolkit.deleteDataQueue('QBERT', 'MARK', (deleteResult) => {
            assert.strictEqual(deleteResult, true);
            done();
          });
        });
      });
    }); // 'createDataQueue()...'

    describe('sendToDataQueue()...', () => {
      it('...should send data to the data queue.', (done) => {
        toolkit.createDataQueue('QBERT', 'MARK', 100, (createResult) => {
          assert.strictEqual(createResult, true);
          toolkit.sendToDataQueue('QBERT', 'MARK', 'Test data to send', (sendResult) => {
            assert.strictEqual(sendResult, true);
            toolkit.deleteDataQueue('QBERT', 'MARK', (deleteResult) => {
              assert.strictEqual(deleteResult, true);
              done();
            });
          });
        });
      });
    }); // 'sendToDataQueue()...'

    describe('receiveFromDataQueue()...', () => {
      it('...should send data to the data queue.', (done) => {
        toolkit.createDataQueue('QBERT', 'MARK', 100, (createResult) => {
          assert.strictEqual(createResult, true);
          toolkit.sendToDataQueue('QBERT', 'MARK', 'Test data to send', (sendResult) => {
            assert.strictEqual(sendResult, true);
            toolkit.receiveFromDataQueue('QBERT', 'MARK', 100, (receiveResult) => {
              assert.strictEqual(receiveResult, 'Test data to send');
              toolkit.deleteDataQueue('QBERT', 'MARK', (deleteResult) => {
                assert.strictEqual(deleteResult, true);
                done();
              });
            });
          });
        });
      });
    }); // 'receiveFromDataQueue()...'

    describe('peekAtDataQueue()...', () => {
      it('...should return data.', (done) => {
        toolkit.createDataQueue('QBERT', 'MARK', 100, (createResult) => {
          assert.strictEqual(createResult, true);
          toolkit.sendToDataQueue('QBERT', 'MARK', 'Test data to send', (sendResult) => {
            assert.strictEqual(sendResult, true);
            toolkit.peekAtDataQueue('QBERT', 'MARK', 100, (peekResult) => {
              assert.strictEqual(peekResult, 'Test data to send');
              toolkit.deleteDataQueue('QBERT', 'MARK', (deleteResult) => {
                assert.strictEqual(deleteResult, true);
                done();
              });
            });
          });
        });
      });

      it('...shouldn\'t remove data.', (done) => {
        toolkit.createDataQueue('QBERT', 'MARK', 100, (createResult) => {
          assert.strictEqual(createResult, true);
          toolkit.sendToDataQueue('QBERT', 'MARK', 'Test data to send', (sendResult) => {
            assert.strictEqual(sendResult, true);
            toolkit.peekAtDataQueue('QBERT', 'MARK', 100, (peekResult) => {
              assert.strictEqual(peekResult, 'Test data to send');
              toolkit.receiveFromDataQueue('QBERT', 'MARK', 100, (receiveResult) => {
                assert.strictEqual(receiveResult, 'Test data to send');
                toolkit.deleteDataQueue('QBERT', 'MARK', (deleteResult) => {
                  assert.strictEqual(deleteResult, true);
                  done();
                });
              });
            });
          });
        });
      });
    }); // 'receiveFromDataQueue()...'

    describe('deleteDataQueue()...', () => {
      it('...should delete the data queue.', (done) => {
        toolkit.createDataQueue('QBERT', 'MARK', 100, (createResult) => {
          assert.strictEqual(createResult, true);
          toolkit.deleteDataQueue('QBERT', 'MARK', (deleteResult) => {
            assert.strictEqual(deleteResult, true);
            toolkit.sendToDataQueue('QBERT', 'MARK', 'Shouldn\t send', (sendResult) => {
              const sendResultJson = xt.xmlToJson(sendResult);
              assert.deepStrictEqual(sendResultJson, [
                {
                  type: 'pgm',
                  success: false,
                  pgm: 'QSNDDTAQ',
                  lib: 'QSYS',
                },
              ]);
              done();
            });
          });
        });
      });
    }); // 'receiveFromDataQueue()...'
  }); // 'Data Queue (DTAQ) Tests'
}); // 'API Tests'

describe('Object Tests', () => {
  describe('DataQueue', () => {
    describe('constructor()...', () => {
      it('...should create a DataQueue object with passed name and lib', (done) => {
        const dataqueue = new xt.DataQueue(connection, 'QBERT', 'MARK');
        assert.strictEqual(dataqueue.name, 'QBERT');
        assert.strictEqual(dataqueue.lib, 'MARK');
        assert.deepStrictEqual(dataqueue.conn.conn, {
          I_TRANSPORT_DB2_DATABASE: '*LOCAL',
          I_TRANSPORT_DB2_USER: 'mirish',
          I_TRANSPORT_DB2_PASSWORD: 'my27pass',
          iXml_SERVICE_LIB: 'QXMLSERV',
          I_TRANSPORT_CTL: '*here',
          I_TRANSPORT_IPC: '*NA',
          I_TRANSPORT: 'DB2',
        });
        done();
      });
    }); // 'constructor()...'

    // describe('create(maxLength, callback)...', (done) => {
    //   it('...should create a DTAQ object on the IBM i.', () => {
    //     const dataqueue = new xt.DataQueue(connection, 'QBERT', 'MARK');
    //     dataqueue.create(100, (createResult) => {
    //       assert.strictEqual(createResult, true);
    //       dataqueue.delete((deleteResult) => {
    //         assert.strictEqual(deleteResult, true);
    //         done();
    //       });
    //     });
    //   });
    // }); // 'create(maxLength, callback)...'

    describe('delete(callback)...', () => {
      it('...should create a DTAQ object on the IBM i.', (done) => {
        const dataqueue = new xt.DataQueue(connection, 'QBERT', 'MARK');
        dataqueue.create(100, (createResult) => {
          assert.strictEqual(createResult, true);
          dataqueue.delete((deleteResult) => {
            assert.strictEqual(deleteResult, true);
            dataqueue.delete((delete2Result) => {
              const delete2ResultJson = xt.xmlToJson(delete2Result);
              assert.deepStrictEqual(delete2ResultJson, [
                {
                  type: 'cmd',
                  success: false,
                },
              ]);
              done();
            });
          });
        });
      });
    }); // 'create(maxLength, callback)...'
  }); // 'DataQueue'
}); // 'Object Tests'
