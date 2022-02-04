const _ = require("lodash")
const items = [1,2,[3,4,[2342,234,23],[23],[[[234,234,[123]]]]]]
const newItems =_.flattenDeep(items)
console.log(newItems)