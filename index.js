'use strict';

var viacore = module.exports;

// module information
viacore.version = 'v' + require('./package.json').version;
viacore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of viacore-lib found. ' +
      'Please make sure to require viacore-lib and check that submodules do' +
      ' not also include their own viacore-lib dependency.';
    throw new Error(message);
  }
};
viacore.versionGuard(global._viacore);
global._viacore = viacore.version;

// crypto
viacore.crypto = {};
viacore.crypto.BN = require('./lib/crypto/bn');
viacore.crypto.ECDSA = require('./lib/crypto/ecdsa');
viacore.crypto.Hash = require('./lib/crypto/hash');
viacore.crypto.Random = require('./lib/crypto/random');
viacore.crypto.Point = require('./lib/crypto/point');
viacore.crypto.Signature = require('./lib/crypto/signature');

// encoding
viacore.encoding = {};
viacore.encoding.Base58 = require('./lib/encoding/base58');
viacore.encoding.Base58Check = require('./lib/encoding/base58check');
viacore.encoding.BufferReader = require('./lib/encoding/bufferreader');
viacore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
viacore.encoding.Varint = require('./lib/encoding/varint');

// utilities
viacore.util = {};
viacore.util.buffer = require('./lib/util/buffer');
viacore.util.js = require('./lib/util/js');
viacore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
viacore.errors = require('./lib/errors');

// main bitcoin library
viacore.Address = require('./lib/address');
viacore.Block = require('./lib/block');
viacore.MerkleBlock = require('./lib/block/merkleblock');
viacore.BlockHeader = require('./lib/block/blockheader');
viacore.HDPrivateKey = require('./lib/hdprivatekey.js');
viacore.HDPublicKey = require('./lib/hdpublickey.js');
viacore.Networks = require('./lib/networks');
viacore.Opcode = require('./lib/opcode');
viacore.PrivateKey = require('./lib/privatekey');
viacore.PublicKey = require('./lib/publickey');
viacore.Script = require('./lib/script');
viacore.Transaction = require('./lib/transaction');
viacore.URI = require('./lib/uri');
viacore.Unit = require('./lib/unit');

// dependencies, subject to change
viacore.deps = {};
viacore.deps.bnjs = require('bn.js');
viacore.deps.bs58 = require('bs58');
viacore.deps.Buffer = Buffer;
viacore.deps.elliptic = require('elliptic');
viacore.deps._ = require('lodash');
viacore.deps.scryptsy = require('scryptsy');

// Internal usage, exposed for testing/advanced tweaking
viacore.Transaction.sighash = require('./lib/transaction/sighash');
