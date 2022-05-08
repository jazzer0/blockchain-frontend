"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Blockchain_chain;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
const helpers_1 = require("./helpers");
class Blockchain {
    constructor(dificuldade = 4) {
        this.dificuldade = dificuldade;
        _Blockchain_chain.set(this, []);
        this.proofOfWorkPrefix = '0';
        __classPrivateFieldGet(this, _Blockchain_chain, "f").push(this.createGenesisBlock());
    }
    createGenesisBlock() {
        const payload = {
            sequence: 0,
            timestamp: Number(new Date()),
            data: 'Genesis Block',
            previousHash: ''
        };
        return {
            header: {
                nonce: 0,
                blockHash: (0, helpers_1.hash)(JSON.stringify(payload))
            },
            payload
        };
    }
    get lastBlock() {
        return __classPrivateFieldGet(this, _Blockchain_chain, "f").at(-1);
    }
    get chain() {
        return __classPrivateFieldGet(this, _Blockchain_chain, "f");
    }
    getPreviousBlockHash() {
        return this.lastBlock.header.blockHash;
    }
    createBlock(data) {
        const newBlock = {
            sequence: this.lastBlock.payload.sequence + 1,
            timestamp: +new Date(),
            data,
            previousHash: this.getPreviousBlockHash()
        };
        console.log(`Bloco criado ${newBlock.sequence}: ${JSON.stringify(newBlock, null, 2)}`);
        return newBlock;
    }
    mineBlock(block) {
        let nonce = 0;
        let startTime = +new Date();
        while (true) {
            const blockHash = (0, helpers_1.hash)(JSON.stringify(block));
            const proofingHash = (0, helpers_1.hash)(blockHash + nonce);
            if ((0, helpers_1.isHashProofed)({
                hash: proofingHash,
                difficulty: this.dificuldade,
                prefix: this.proofOfWorkPrefix
            })) {
                const endTime = +new Date();
                const shortHash = blockHash.slice(0, 12);
                const mineTime = (endTime - startTime) / 1000;
                console.log(`Bloco minerado ${block.sequence} em ${mineTime} segundos. Hash: ${shortHash} (${nonce} tentativas)`);
                return {
                    minedBlock: { payload: Object.assign({}, block), header: { nonce, blockHash } },
                    minedHash: proofingHash,
                    shortHash,
                    mineTime
                };
            }
            nonce++;
        }
    }
    verifyBlock(block) {
        if (block.payload.previousHash !== this.getPreviousBlockHash()) {
            console.error(`Bloco inválido #${block.payload.sequence}: Hash do bloco anterior é "${this.getPreviousBlockHash().slice(0, 12)}" not "${block.payload.previousHash.slice(0, 12)}"`);
            return;
        }
        if (!(0, helpers_1.isHashProofed)({
            hash: (0, helpers_1.hash)((0, helpers_1.hash)(JSON.stringify(block.payload)) + block.header.nonce),
            difficulty: this.dificuldade,
            prefix: this.proofOfWorkPrefix
        })) {
            console.error(`Bloco inválido #${block.payload.sequence}: Hash não verificado, nonce ${block.header.nonce} não é válido`);
            return;
        }
        return true;
    }
    pushBlock(block) {
        if (this.verifyBlock(block))
            __classPrivateFieldGet(this, _Blockchain_chain, "f").push(block);
        console.log(`Bloco adicionado #${JSON.stringify(block, null, 2)}`);
        return __classPrivateFieldGet(this, _Blockchain_chain, "f");
    }
}
exports.Blockchain = Blockchain;
_Blockchain_chain = new WeakMap();
//# sourceMappingURL=blockchain.js.map