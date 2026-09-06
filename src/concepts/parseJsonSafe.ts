//example

//todo => parse it and log name
const data = '{"name":"Ali","score":95}';

const parsedData = JSON.parse(data);

console.log(parsedData);

// E:\cmder\react-learning (master -> origin)
// λ npx tsx src\concepts\parseJsonSafe.ts
// { name: 'Ali', score: 95 } => it workes!

// E:\cmder\react-learning (master -> origin)

//--------------------------------------------------------------------------
//example 2 => invalid JSON
const data2 = '{"name":"Ali","score":95';

//const parsedData2 = JSON.parse(data2);

//console.log(parsedData2);

// E:\cmder\react-learning (master -> origin)
// λ npx tsx src\concepts\parseJsonSafe.ts
// { name: 'Ali', score: 95 }
// <anonymous_script>:1
// {"name":"Ali","score":95

// SyntaxError: Expected ',' or '}' after property value in JSON at position 24 (line 1 column 25)
//     at JSON.parse (<anonymous>)
//     at <anonymous> (E:\cmder\react-learning\src\concepts\parseJsonSafe.ts:20:26)
//     at ModuleJob.run (node:internal/modules/esm/module_job:561:25)
//     at async node:internal/modules/esm/loader:647:26
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

// Node.js v24.20.0

// ========================> program crashed ! <===========================
//-------------------------------------------------------------------------------
//example 3 control example 2 to not crash !

try {
  const parsedData2 = JSON.parse(data2);
  console.log(parsedData2);
} catch {
  console.log("Invalid JSON");
}

//E:\cmder\react-learning (master -> origin)
//λ npx tsx src\concepts\parseJsonSafe.ts
//Invalid JSON
