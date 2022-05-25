const { memoryUsage } = require('process');
const { getHeapStatistics } = require('v8');

function allocateMemory(size) {
  // Simulate allocation of bytes
  const numbers = size / 8;
  const arr = [];
  arr.length = numbers;
  for (let i = 0; i < numbers; i++) {
    arr[i] = i;
  }
  return arr;
}


const memoryLeakAllocations = [];

function leakMemory() {
  const allocationStep = 10000 * 1024; // 10MB
  const TIME_INTERVAL_IN_MSEC = 2000;

  setInterval(() => {
    const allocation = allocateMemory(allocationStep);
    memoryLeakAllocations.push(allocation);
    console.log('memoryUsage :', memoryUsage());
    console.log("getHeapStatistics : ", getHeapStatistics());
    console.log(`getHeapStatistics heap_size_limit: ${getHeapStatistics().heap_size_limit / (1024 * 1024)} mb`);
  }, TIME_INTERVAL_IN_MSEC);
  
}


module.exports = {
  allocateMemory,
  leakMemory
}