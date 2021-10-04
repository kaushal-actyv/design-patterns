// We have 3 different algorithms for calculating delivery charges according to the company. Using strategy pattern we can swap different algorithms easily.

function Delhivery(pkg)
{
  this.calculate = () =>
  {
    // Delhivery calculations ...
    return 50
  }
}

function BlueDart(pkg)
{
  this.calculate = () =>
  {
    // BlueDart calculations ...
    return 70
  }
}

function DHL(pkg)
{
  this.calculate = () =>
  {
    // DHL calculations ...
    return 85
  }
}



function Shipping()
{
  this.company = ''
  this.setStrategy = company =>
  {
    this.company = company
  }
  this.calculate = pkg => {
    return this.company.calculate(pkg)
  }
}

const delhivery = new Delhivery()
const bluedart = new BlueDart()
const dhl = new DHL()
const shipping = new Shipping()
const pkg = { from: "Ahmedabad", to: "Bengalore", weight: 10 } // Dummy package

shipping.setStrategy(delhivery)
console.log("Delhivery: " + shipping.calculate(pkg))

shipping.setStrategy(bluedart)
console.log("BlueDart: " + shipping.calculate(pkg))

shipping.setStrategy(dhl)
console.log("DHL: " + shipping.calculate(pkg))
