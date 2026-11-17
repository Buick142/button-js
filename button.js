function setup(){
    createCanvas(400, 400);
    background(255);
}
    
function draw(){
    btn();
}

function btn(){
    fill(255, 0, 0);
    rect(50, 50, 100 ,50);
}

function mousePressed(){
    if(
        mouseX > 50 && mouseX < 150 &&
        mouseY > 50 && mouseY < 100
    ){
        console.log("Click!");
    }
}
