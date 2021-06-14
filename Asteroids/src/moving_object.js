// MovingObject.prototype.move, 
// MovingObject.prototype.draw(ctx), 
// MovingObject.prototype.isCollidedWith(otherMovingObject)

function MovingObject(args){ //{}
    this.pos = args.pos
    this.vel = args.vel
    this.radius = args.radius
    this.color = args.color
}

module.exports = MovingObject