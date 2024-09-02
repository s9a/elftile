let fs = require("fs")
let elf = require("./elf")
let nth = [1, 2, 3, 4, 5]
let path = require("path")
let file = "elf.txt"

let elves = nth.reduce(function(s, n) {
  let o = new elf(n)
  return s + o.txt + " ≈ " + o.elf +  "º\n"
}, "")

function done(err) {
  if (err) throw err
  console.log("\nendtroducing.....")
  console.log(file)
  console.log(elves)
}

fs.writeFile(path.resolve(file), elves, done)
