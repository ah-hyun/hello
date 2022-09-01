
function Estimate(param) {
    this.unit = param;
    this.getEstimate = function(unitType, width, height) {
        let priceInfo = this.unit.find(val => val.type == unitType);
        return priceInfo.price * width * height;
    }
}

let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', price: 200}
]

let estimate = new Estimate(unitInfo);
let result = estimate.getEstimate('wood', 20, 20);

// estmate.addUnit({type: 'carbon', price: 500});
// result = estimate.getEstimate('carbon', 20, 30);

console.log(`계산결과: ${result}`);