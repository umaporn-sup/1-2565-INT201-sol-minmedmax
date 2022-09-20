const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min = n1,
    mid = n1,
    max = n1

  if (n2 < min) min = n2
  if (n3 < min) min = n3
  if (n2 > max) max = n2
  if (n3 > max) max = n3

  if (n1 === n2 && n1 < n3) mid = n1
  if (n1 === n3 && n1 < n2) mid = n1
  if (n2 === n3 && n2 < n1) mid = n2
  if (n2 > min && n2 < max) mid = n2
  if (n3 > min && n3 < max) mid = n3

  return { min: min, mid: mid, max: max }
}
module.exports = minMedMax
