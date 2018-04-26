module.exports = {
    getEndSeeds: function (amt) {
      var extraBlock = 3
      var left = amt
      while (left > 0) {
        extraBlock += left / 2
        left = left / 6
      }
      return Math.round((amt + extraBlock) / 4)
    },
    getAvgBlocks: function (M, x = 1) {
      return Math.floor((3 * (M * 4) + 6) / 16 * x)
    },
    getAvgSeeds: function (R, x) {
      return Math.round(x * 3 / (R + 4))
    },
    getAncestralBonusBlocks: function (amt) {
      var extraBlock = 0
      var left = amt * 1.0
      while (left > 0) {
        extraBlock += (0.8 * left) / 12
        left = (left * 0.1) / 12
      }
      return Math.round((amt + extraBlock) / 4)
    }
  }
