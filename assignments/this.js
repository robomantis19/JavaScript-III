/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this accesses the context of the code
* 2. this returns the entire window when used by itself
* 3. this can be used to return new objects
* 4. this can reference other items inside of other objects using its prototype
*
* write out a code example of each explanation above
*/
//1





// Principle 1

// code example for Window Binding

console.log(this)


// Principle 2
const myObject = {
    name: "Jane", 
    height: "5'5",
    feet: "2feet",
    canjump: function(){
        return `${this.name} is ${this.height} tall`
    }
}
console.log(myObject.canjump())
// code example for Implicit Binding

// Principle 3
function jump (feetHigh){
    this.name= "Jane", 
    this.height= "5'5",
    this.High= feetHigh, 
    this.jump1= function(){
        return `${this.name} is ${this.height} and can jump ${this.High} high`;
    }
}
const JumpHeight = new jump('2');

console.log(JumpHeight.jump1())

// code example for New Binding

// Principle 4
const JumpHeight2 = new jump('2.5');
//call
console.log("call: " + JumpHeight.jump1.call(JumpHeight2))
//apply
console.log("apply: " + JumpHeight2.jump1.apply(JumpHeight));

const timer = {
    team: "Heat",
    player: "Wade", 
    time: "8min 42sec"
}





const highlight={
    team : "Mavricks",
    player : "Dirk Newinski",
    gametime : this.time,
    time: '5', 
    game : function(){
        return `${this.player} for ${this.team} dunked at ${this.time}`
    }
}
console.log(highlight.game.call(timer))
console.log(highlight.game.apply(timer))
//dunk('4').call(highlight.game())
//highlight.game().apply(dunk('4'))
//dunk.call(highlight.game())
// code example for Explicit Binding