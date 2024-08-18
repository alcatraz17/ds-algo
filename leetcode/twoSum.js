const arr = [1,2,3,4,5,6,7,8,9];

function twoSum (arr, target) {
    const map = new Map();
    for(let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if(map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(arr[i], i);
    }

    return "Not found!☹️"
}

console.log(twoSum(arr, 20));