solidity-bytesutil
---
A Solidity library to manipuate bytes.

# Quick start
Import `BytesUtil.sol` and add this line to the beginning of your contract
```
using BytesUtil for bytes;
```

# Functions

## function slice(bytes bs, uint start, uint length)
Copies of a portion of a byte array into a new byte array.
### Example
```solidity
bytes memory bs = new bytes[](3);
bs[0] = 0x01
bs[1] = 0x02
bs[2] = 0x03
bytes sliced = bs.slice(1, 2)
// sliced is array [0x02, 0x03]
```

## function sliceUint(bytes bs, uint start)
Gets an uint from a byte array
### Example
```solidity
bytes memory bs = abi.encode(42, 1337)
uint num = bs.sliceUint(32)
// num is 1337
```

## function sliceUintArray(bytes bs, uint start, uint count)
Gets an uint array from a byte array
### Example
```solidity
bytes memory bs = abi.encode(42, 1337, 9001)
uint[] nums = bs.sliceUintArray(32, 2)
// nums is [1337, 9001]
```

## function toUintArray(bytes bs)
Gets a uint array from the data in a byte array
### Example
```solidity
bytes memory bs = abi.encode(42, 1337, 9001)
uint[] nums = bs.toUintArray()
// nums is [42, 1337, 9001]
```
