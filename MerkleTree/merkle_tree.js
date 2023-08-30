import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

// All Whitelisted Address
let whiteistedaddress = [
 '0x00000000000000',
 '0x00000000000000',
'0x00000000000000',
 '0x00000000000000',
'0x00000000000000',
'0x00000000000000'
]

// Address you want to find merkle HexProof
let addr = '0xD0a9f83a5f7A0D95BB5C14F69E2E5E57f50C5BC5';

const findMerkleRoot = () => {
    let leafNode = whiteistedaddress.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNode, keccak256, {sortPairs: true});
    const rootHash = merkleTree.getHexRoot();
    console.log(rootHash,'roothash');
}


// Find Hex Proof
const findHexProof = async() => {
    let indexOfArray = await whiteistedaddress.indexOf(addr);
    let leafNode = whiteistedaddress.map(addr => keccak256(addr));
    const merkleTree = await new MerkleTree(leafNode, keccak256, {sortPairs: true});
    const clamingAddress = leafNode[indexOfArray];
    const hexProof = merkleTree.getHexProof(clamingAddress);
    console.log("[" + String(hexProof)+ "]" , 'hexProof');
}

findMerkleRoot();
 findHexProof();
