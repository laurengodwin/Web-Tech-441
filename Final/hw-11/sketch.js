let dudes = [];
let num_of_dudes = 40;
let bg_color;
let ball;
let ball2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg_color = color(48, 48, 48);

    for (let i = 0; i < num_of_dudes; i++) {
        dudes.push( new MarchingDude() );
    }

    // create a new ball object of class type "Ball"
   ball = new Ball(width / 2, height / 2, 50, 'rgb(255, 246, 0)');

   // create a new ball object of class type "Ball"
  ball2 = new Ball2(width / 2, height / 2, 50, 'rgb(153, 120, 237)');
}

function draw() {
    background(bg_color);

    for (var i = 0; i < dudes.length; i++) {
        dudes[i].frame();
    }
    // call the ball's methods
    ball.display();
    ball.move();
    ball.edgeCheck();

    // call the seconds ball's methods
    ball2.display();
    ball2.move();
    ball2.edgeCheck();
}

//////////////////////////////////////////////////
//      BALL CLASS DEFINITION
//////////////////////////////////////////////////
class Ball {
    constructor(x, y, size, color) {
        this.color = color;
        this.size = size;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-2, 2);
        this.deltaY = random(-2, 2);
    }

    display() {
        push();
        // remove the balls outer stroke
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
            this.posX += this.deltaX;
            this.posY += this.deltaY;
        }

        edgeCheck() {
            // check if the ball has hit a vertical wall (left or right walls)
            if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
                this.deltaX *= -1;
            }
            // check if the ball has hit a horizontal wall (top or bottom walls)
            if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
                this.deltaY *= -1;
            }
        }
    }

    //////////////////////////////////////////////////
    //      BALL CLASS DEFINITION
    //////////////////////////////////////////////////
    class Ball2 {
        constructor(x, y, size, color) {
            this.color = color;
            this.size = size;
            this.rad = this.size / 2;
            this.posX = x;
            this.posY = y;
            this.deltaX = random(-2, 2);
            this.deltaY = random(-2, 2);
        }

        display() {
            push();
            // remove the balls outer stroke
            fill(this.color);
            // set the position of the ball
            translate(this.posX, this.posY);
            ellipse(0, 0, this.size);
            pop();
        }

        move() {
                this.posX += this.deltaX;
                this.posY += this.deltaY;
            }

            edgeCheck() {
                // check if the ball has hit a vertical wall (left or right walls)
                if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
                    this.deltaX *= -1;
                }
                // check if the ball has hit a horizontal wall (top or bottom walls)
                if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
                    this.deltaY *= -1;
                }
            }
        }
/////////////////////////////////////////
//     Yelling Marching Dude Class
/////////////////////////////////////////

/**
 * MarchingDude Class. Creates creepy marching things.
 *
 */
class MarchingDude {

    constructor() {
        this.size_w = random(10, 100);
        this.size_h = random(10, 100);
        this.loc_x = random(width);
        this.loc_y = random(height);
        this.move_x = random(-4, 2);
        this.move_y = random(-4, 2);
        this.body_color = color(random(255), random(255), random(255));
        this.size_w = this.size_w;
        this.size_h = this.size_h;
        this.eye_x = this.size_w * 0.200;
        this.eye_y = this.size_h * 0.22 * -1;
        this.eye_size = this.size_w * 0.25;
        this.nose_x = this.size_w * 0.003;
        this.nose_y = this.size_h * 0.003 * -1;
        this.nose_size = this.size_w * 0.07;
        this.mouth_x = this.size_w * 0.09;
        this.mouth_y = this.size_h * 0.09;
        this.mouth_size = this.size_w * 0.3;
        this.feet_x = this.size_w * 0.25 + (this.size_w * 0.25);
        this.feet_y = this.size_h * 0.5;
        this.feet_w = this.size_w * 0.75;
        this.feet_h = this.size_h * 0.4;
        this.left_foot_angle = 0;
        this.right_foot_angle = 0;
        this.foot_angle_delta = random(20);
        this.foot_angle_max = -20;
        this.active_foot = 0;
    }

    // call this method once per frame to update marching dude
    frame() {
        this.feetAngle();
        this.display();
        this.move();
    }

    display() {

        push();

        translate(this.loc_x, this.loc_y);
        fill(this.body_color);

        ellipse(0, 0, this.size_w, this.size_h);


        // eyes
        fill(255);
        ellipse(-this.eye_x, this.eye_y, this.eye_size, this.eye_size);
        ellipse(this.eye_x, this.eye_y, this.eye_size, this.eye_size);

        //nose
        fill(255);
        ellipse(-this.nose_x, this.nose_y, this.nose_size, this.nose_size);

        //mouth
        fill(255)
        rect(-this.mouth_x, this.mouth_y, this.mouth_size, this.mouth_size);


        // feet
        push();
        rotate(PI * (this.right_foot_angle * 0.01));
        translate(this.feet_x, this.feet_y);
        scale(1, -1);
        arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
        pop();
        push();
        rotate(PI * -(this.left_foot_angle * 0.01));
        translate(-this.feet_x, this.feet_y);
        scale(-1, -1);
        arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
        pop();

        pop();
    }

    feetAngle() {

        if (this.active_foot === 0) {
            this.left_foot_angle -= this.foot_angle_delta;
            if (this.left_foot_angle <= this.foot_angle_max) {
                this.foot_angle_delta *= -1;
            }
            if (this.left_foot_angle >= 0) {
                this.active_foot = 1;
                this.foot_angle_delta *= -1;
            }
        } else if (this.active_foot === 1) {
            this.right_foot_angle -= this.foot_angle_delta;
            if (this.right_foot_angle <= this.foot_angle_max) {
                this.foot_angle_delta *= -1;
            }
            if (this.right_foot_angle >= 0) {
                this.active_foot = 0;
                this.foot_angle_delta *= -1;
            }
        }

        // console.log(this.left_foot_angle);
    }

    move() {
        this.loc_x += this.move_x;
        this.loc_y += this.move_y;

        if (this.loc_x >= width) {
            this.move_x *= -1;
            this.loc_x = width - abs(this.move_x);
        } else if (this.loc_x <= 0) {
            this.move_x *= -1;
            this.loc_x = abs(this.move_x);
        } else if (this.loc_y >= height) {
            this.move_y *= -1;
            this.loc_y = height - abs(this.move_y);
        } else if (this.loc_y <= 0) {
            this.move_y *= -1;
            this.loc_y = abs(this.move_y);
        }
    }
}
