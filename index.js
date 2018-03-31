'use strict';

var potcore = module.exports;

// module information
potcore.version = 'v' + require('./package.json').version;
potcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of potcore-lib found. ' +
      'Please make sure to require potcore-lib and check that submodules do' +
      ' not also include their own potcore-lib dependency.';
    throw new Error(message);
  }
};
potcore.versionGuard(global._potcore);
global._potcore = potcore.version;

// crypto
potcore.crypto = {};
potcore.crypto.BN = require('./lib/crypto/bn');
potcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
potcore.crypto.Hash = require('./lib/crypto/hash');
potcore.crypto.Random = require('./lib/crypto/random');
potcore.crypto.Point = require('./lib/crypto/point');
potcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
potcore.encoding = {};
potcore.encoding.Base58 = require('./lib/encoding/base58');
potcore.encoding.Base58Check = require('./lib/encoding/base58check');
potcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
potcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
potcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
potcore.util = {};
potcore.util.buffer = require('./lib/util/buffer');
potcore.util.js = require('./lib/util/js');
potcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
potcore.errors = require('./lib/errors');

// main bitcoin library
potcore.Address = require('./lib/address');
potcore.Block = require('./lib/block');
potcore.MerkleBlock = require('./lib/block/merkleblock');
potcore.BlockHeader = require('./lib/block/blockheader');
potcore.HDPrivateKey = require('./lib/hdprivatekey.js');
potcore.HDPublicKey = require('./lib/hdpublickey.js');
potcore.Networks = require('./lib/networks');
potcore.Opcode = require('./lib/opcode');
potcore.PrivateKey = require('./lib/privatekey');
potcore.PublicKey = require('./lib/publickey');
potcore.Script = require('./lib/script');
potcore.Transaction = require('./lib/transaction');
potcore.URI = require('./lib/uri');
potcore.Unit = require('./lib/unit');

// dependencies, subject to change
potcore.deps = {};
potcore.deps.bnjs = require('bn.js');
potcore.deps.bs58 = require('bs58');
potcore.deps.Buffer = Buffer;
potcore.deps.elliptic = require('elliptic');
potcore.deps._ = require('lodash');
potcore.deps.scryptsy = require('scryptsy');

// Internal usage, exposed for testing/advanced tweaking
potcore.Transaction.sighash = require('./lib/transaction/sighash');
