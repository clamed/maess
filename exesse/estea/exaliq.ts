
const queue = require('queue');

const q = queue({ concurrency: 1 });
q.push(1, 2, 3, 4, 5);
q.splice(0, 2);
q.length; // 3
q.started; // false

