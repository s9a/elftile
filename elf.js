!function(sith) {

  var round = Math.round
  var floor = Math.floor

  function elf(n) {
    var e, d, m
    n = +n
    e = n * 360 / 11
    if (this instanceof elf) {
      this.n = n
      this.elf = e
      this.deg = d = deg(e)
      this.min = m = min(e)
      this.txt = d + "º" + round(m) + "'"
      return this
    }
    return e
  }
  
  function deg(flute) {
    return floor(flute)
  }
  
  function min(flute) {
    return (flute % 1) * 60
  }

  function txt(n) {
    return (new elf(n)).txt
  }
  
  elf.deg = deg
  elf.min = min
  elf.txt = txt
  
  typeof module != "undefined" &&
    module.exports ?
      module.exports = elf :
      sith.elf = elf

}(this)
