
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var targetFPS = 60;

const car_img = document.getElementById("car");

class Car {
    constructor(brain){
        this.position = new Vector(400, 50);
        this.rotation = 0;
        this.velocity = new Vector(0,0);
        this.scale = new Vector(32,16);
        this.halfScale = new Vector(this.scale.x/2, this.scale.y/2);
        
        this.passedPoints = 0;
        
        if (brain){
            this.brain = new NeuralNetwork(brain);
            this.brain.mutate(mutation);
        } else {
            this.brain = new NeuralNetwork(6+2, 4, 2);
        }
        
        this.crashed = false;
        
        this.pointIndex = 0;
        
        this.fitness = 0;
    }
    
    draw(){
        ctx.save();
        ctx.globalAlpha = (this.passedPoints / recordPoints) + 0.1;
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(car_img, -this.halfScale.x, -this.halfScale.y, this.scale.x, this.scale.y);
        ctx.restore();
    }
    
    drive(){
        var nextPoint = targetPoints[this.pointIndex % targetPoints.length];
        
        var distances = this.getDistances();
        distances.push(Math.atan2(nextPoint.y - this.position.y, nextPoint.x - this.position.x)/(2*Math.PI));
        distances.push(this.velocity.Mag() / 20);
        
        if (Vector.Distance(nextPoint, this.position) < 75){
            this.pointIndex++;
            this.passedPoints++;
            recordPoints = Math.max(recordPoints, this.passedPoints);
        }
        
        var decision = this.brain.feedforward(distances);
        
        var TURN_SPEED = 0.4;
        
        this.rotation += (decision[1] * 2 - 1) * TURN_SPEED;
        
        var forwardVector = Vector.FromAngle(1, this.rotation);
        
        //var acceleration = Vector.FromAngle(decision[1] * 0.1, this.rotation);
        //this.velocity = Vector.Add(this.velocity, acceleration);
        
        this.velocity = Vector.Add(this.velocity, Vector.FromAngle(0.3 * decision[0], this.rotation));
        this.velocity = Vector.Mult(this.velocity, 0.95);
        
        this.position = Vector.Add(this.position, this.velocity);
    }
    
    getDistances(){
        var segments = 6;
        var fovAngle = 60 * Deg2Rad;
        
        var distances = [];
        
        for (var i = 0; i < segments; i++){
            var angle = Lerp(-fovAngle/2, fovAngle/2, i/segments);
            
            var ray = Raycast({
                startX: this.position.x,
                startY: this.position.y,
                dirX: Math.cos(angle + this.rotation),
                dirY: Math.sin(angle + this.rotation)
            })
            
            if (ray != null){
                distances.push(Math.sqrt(ray.x * ray.x + ray.y * ray.y) / 1200);
            } else {
                distances.push(1);
            }
        }
        
        return distances;
    }
    
    getRotatedVertices(){
        var m1 = new Matrix(4,2);
        
        var pos = this.position;
        var scale = this.scale;
        var hScale = this.halfScale;
        
        m1.data = [
            [-hScale.x, -hScale.y],
            [ hScale.x,  hScale.y],
            [-hScale.x,  hScale.y],
            [ hScale.x, -hScale.y]
        ]
        
        var cos = Math.cos(-this.rotation);
        var sin = Math.sin(-this.rotation);
        
        var rotationMatrix = new Matrix(2,2);
        rotationMatrix.data = [
            [cos, -sin],
            [sin, cos]
        ];
        
        var points = Matrix.multiply(m1, rotationMatrix);
        
        var output = [];
        
        for (var point of points.data){
            var offset = new Vector(point[0], point[1]);
            output.push(Vector.Add(offset, this.position));
        }
        return output;
    }
    
    checkCollision(){
        var squaresAround = GetMapSquaresAround(this.position);
        
        var vertices = this.getRotatedVertices();
        
        for (var vertex of vertices){
            for (var square of squaresAround){
                if (PointInsideRect(vertex, square, tileSize)){
                    this.crashed = true;
                }
            }
        }
    }
}

var cars = [];

for (var i = 0; i < 500; i++){
    cars.push(new Car());
}

const Rad2Deg = 180 / Math.PI;
const Deg2Rad = 1 / Rad2Deg;

var targetPoints = [
    new Vector(725, 75),
    new Vector(725, 200),
    new Vector(575, 200),
    new Vector(575, 300),
    new Vector(250, 300),
    new Vector(250, 200),
    new Vector(75, 200),
    new Vector(75, 75)
]

const MUTATION_CHANCE = 0.3;
const MUTATION_AMOUNT = 0.5;

var recordPoints = 0;

function mutation(x){
  if (Math.random() < MUTATION_CHANCE){
    var offset = Math.random() * MUTATION_AMOUNT - MUTATION_AMOUNT/2;
    return x + offset;
  }
  return x;
}

var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
    
var tileSize = new Vector(25, 25);

function GetMapSquaresAround(point){
    var index = new Vector(point.x/tileSize.x, point.y/tileSize.y);
    index.x = index.x | 0;
    index.y = index.y | 0;
    
    var out = [];
    
    for (var i = -1; i <= 1; i++){
        for (var j = -1; j <= 1; j++){
            var point = new Vector(index.x + i, index.y + j);
            
            try {
                var mapPoint = map[point.y | 0][point.x | 0];
                if (mapPoint > 0){
                    out.push(new Vector(point.x * tileSize.x, point.y * tileSize.y));
                }
            } catch (e) {}
        }
    }
    
    return out;
}

function Lerp(a, b, t){
    return a + (b-a) * t;
}

function Raycast(ray){
    if (ray.dirX == 0) ray.dirX += 0.01;
    if (ray.dirY == 0) ray.dirY += 0.01;
    
    var dirSignX = Math.sign(ray.dirX);
    var dirSignY = Math.sign(ray.dirY);
    
    var tileOffsetX = dirSignX - 1;
    var tileOffsetY = dirSignY - 1;
    
    var curX = ray.startX,
        curY = ray.startY;
    
    var tileX = (curX / tileSize.x) | 0,
        tileY = (curY / tileSize.y) | 0;
    
    var t = 0;
    
    var gridWidth = map[0].length;
    var gridHeight = map.length;
    
    var safe = 0;
    
    if (ray.dirX * ray.dirX + ray.dirY * ray.dirY > 0){
        while (tileX > 0 && tileX < gridWidth && tileY > 0 && tileY < gridHeight){
            if (map[tileY][tileX] > 0){
                return new Vector(tileX * tileSize.x, tileY * tileSize.y);
            }
            
            var dtX = ((tileX + tileOffsetX) * tileSize.x - curX) / ray.dirX;
            var dtY = ((tileY + tileOffsetY) * tileSize.y - curY) / ray.dirY;
            
            if (dtX < dtY){
                t += dtX;
                tileX += dirSignX;
            } else {
                t += dtY;
                tileY += dirSignY;
            }
            
            curX = ray.startX + ray.dirX * t;
            curY = ray.startY + ray.dirY * t;
            
            if (safe++ > 500) break;
        }
        
        return new Vector(tileX * tileSize.x, tileY * tileSize.y);
    }
    
    return null;
}

function IsBetween(num, min, max){
    if (num > max) return false;
    if (num < min) return false;
    return true;
}

function PointInsideRect(point, squareTopLeft, squareSize){
    var x_axis = IsBetween(point.x, squareTopLeft.x, squareTopLeft.x + squareSize.x);
    var y_axis = IsBetween(point.y, squareTopLeft.y, squareTopLeft.y + squareSize.y);
    
    return x_axis && y_axis;
}

function DrawMap(){    
    ctx.fillStyle = "black";
    for (var y = 0; y < map.length; y++){
        for (var x = 0; x < map[y].length; x++){
            if (map[y][x] > 0){
                ctx.fillRect(x * tileSize.x, y * tileSize.y, tileSize.x, tileSize.y);
            }
        }
    }
}

function PickRandom(){
    var index = 0;
    var rand = Math.random();
    while (rand > 0 && index < cars.length){
        rand -= cars[index].fitness;
        index++;
    }
    index--;
    return cars[index];
}

function NewPopulation(){
    recordPoints = 0;
    
    // calculate fitness
    var sum = 1;
    
    for (var car of cars){
        car.fitness = Math.pow(car.passedPoints+1, 20);
        if (car.crashed){
            car.fitness = Math.sqrt(car.fitness);
        }
        sum += car.fitness;
    }
    
    // normalize fitness
    for (var car of cars){
        car.fitness /= sum;
    }
    
    // sort cars
    cars.sort(function(a,b){
        return b.fitness - a.fitness;
    })
    
    // pick cars randomly (weighted random)
    var newPopulation = [];
    
    for (var i = 0; i < cars.length; i++){
        var randomCar = PickRandom();
        newPopulation.push(new Car(randomCar.brain));
    }
    
    cars = newPopulation;
}

canvas.addEventListener('mousemove', event =>
{
    let bound = canvas.getBoundingClientRect();

    let x = event.clientX - bound.left - canvas.clientLeft;
    let y = event.clientY - bound.top - canvas.clientTop;
    
    mouse = new Vector(x,y);
});

var mouse = new Vector(0,0);

function Loop(){
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    DrawMap();
    
    for (var point of targetPoints){
        ctx.fillStyle = "lime";
        ctx.fillRect(point.x, point.y, 5, 5);
    }
    
    var allDead = true;
    
    var simSpeed = document.getElementById("simSpeed").value;
    
    for (var i = 0; i < simSpeed; i++){
        for (var car of cars){
            if (!car.crashed){
                allDead = false;
                car.drive();
                car.checkCollision();
            }
        }
    }
    
    for (var car of cars){
        if (!car.crashed){
            car.draw();
        }
    }
    
    if (allDead){
        NewPopulation();
    }
    
    setTimeout(Loop, 1000/targetFPS);
}
Loop();