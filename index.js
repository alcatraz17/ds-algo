const nums = [
  2, 7, 11, 16, 3, 6, 9, 12, 18, 20, 1, 4, 5, 8, 15, 13, 14, 10, 17, 19,
];

// const check = (nums, target) => {
//   const myMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];

//     const diff = target - num;
//     if (myMap.has(diff)) {
//       return [myMap.get(diff), i];
//     }

//     myMap.set(num, i);
//   }
//   return [];
// };

// const result = check(nums, 17);
// console.log(result);

// const twoSum = (nums, target) => {
//   const numMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];

//     const compliment = target - num;

//     if (numMap.has(compliment)) {
//       return [numMap.get(compliment), i];
//     }

//     numMap.set(num, i);
//   }

//   return [];
// };

// const twoSum = (nums, target) => {
//   const numberMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const difference = target - num;

//     if (numberMap.has(difference)) {
//       return [numberMap.get(difference), i];
//     }

//     numberMap.set(num, i);
//   }

//   return [];
// };

// const photonboxxMandateExecution = (totalInvoices, finalPrice) => {
//   const photonboxxInvoices = new Map();

//   for (let i = 0; i < totalInvoices.length; i++) {
//     const invoiceAmount = totalInvoices[i];
//     const discountAmount = finalPrice - invoiceAmount;

//     if (photonboxxInvoices.has(discountAmount)) {
//       return [photonboxxInvoices.get(discountAmount), i];
//     }

//     photonboxxInvoices.set(invoiceAmount, i);
//   }
// };

// const photonboxxSubscriptionCheckout = (charges, total) => {
//   const subscriptionBreakup = new Map();

//   for (let i = 0; i < charges.length; i++) {
//     const currentCharges = charges[i];

//     const discountAmount = total - currentCharges;

//     if (subscriptionBreakup.has(discountAmount)) {
//       return [subscriptionBreakup.get(discountAmount), i];
//     }

//     subscriptionBreakup.set(currentCharges, i);
//   }

//   return [];
// };

// const isMandateExecuted = (mandates, mandateId) => {
//   const allMandateMap = new Map();

//   for (let i = 0; i < mandates.length; i++) {
//     const currentMandateAmount = mandates[i];

//     const isMandateExecuted = mandateId - currentMandateAmount;

//     if (allMandateMap.has(isMandateExecuted)) {
//       return [allMandateMap.get(isMandateExecuted), i];
//     }

//     allMandateMap.set(currentMandateAmount, i);
//   }

//   return [];
// };

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - i;

    if (numMap.has(difference)) {
      return [numMap.get(difference), i];
    }

    numMap.set(num, i);
  }

  return [];
}

// console.log(twoSum(nums, 40));

// const result = isMandateExecuted(nums, 17);
// console.log(result);

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   append(data) {
//     const newNode = new Node(data);
//     if (this.head === null) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }

//   remove(data) {
//     if (this.head === null) {
//       return;
//     }

//     let current = this.head;

//     while (current.next !== null && current.next.data !== data) {
//       current = current.next;
//     }
//     {
//       if (current.next !== null) {
//         current.next = current.next.next;
//       }
//     }
//   }

//   display() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.display();
// list.remove(30);
// list.display();

// Binary search

// Sorted random first 30 numbers from 1 to 100 below
const sortedNums = [1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 14, 15];
// const sortedNums = [
//   1, 2, 4, 7, 9, 11, 13, 15, 17, 22, 24, 26, 28, 31, 33, 35, 37, 40, 42, 45, 50,
//   52, 55, 60, 63, 71, 75, 82, 95, 99
// ];

// const findNum = (arr, num) => {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let guess = arr[mid];
//     if (guess === num) {
//       return mid;
//     } else if (guess > num) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return 'Not Found';
// };

// console.log(findNum(sortedNums, 10));

// const photonboxxSearch = (arr, target) => {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] > target) {
//       high = mid - 1;
//     } else low = mid + 1;
//   }
//   return 'Not Found';
// };

// console.log(photonboxxSearch(sortedNums, 5));

const photonBoxxSearch = (customerList, customerId) => {
  let firstCustomer = 0;
  let lastCustomer = customerList.length - 1;

  while (firstCustomer <= lastCustomer) {
    let midCustomer = Math.floor((firstCustomer + lastCustomer) / 2);
    if (customerList[midCustomer] === customerId) {
      return midCustomer;
    } else if (customerList[midCustomer] > customerId) {
      lastCustomer = midCustomer - 1;
    } else firstCustomer = midCustomer + 1;
  }
  return "Not found";
};

console.log(photonBoxxSearch(sortedNums, 5));
