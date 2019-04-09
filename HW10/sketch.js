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
    var canvas,
	ctx,
	width,
	height,
	xGravity,
	yGravity,
	friction,
	dots,
	palettes,
	paletteCount,
	paletteCurrent,
	colorCount,
	tick,
	mx,
	my,
	PI,
	TWOPI;

function rand( min, max ) {
	return Math.random() * ( max - min ) + min;
}

function randInt( min, max ) {
	return Math.floor( min + Math.random() * ( max - min + 1 ) );
};

function Dot() {
	this.x = width / 2;
	this.y = height / 2;
	this.vx = rand( -2, 2 );
	this.vy = rand( -2, 2 );
	this.radius = rand( 5, 15 );
	this.color = randInt( 1, colorCount - 1 );
}

Dot.prototype.step = function( i ) {
	// apply forces	
	this.x += this.vx;
	this.y += this.vy;
		
	// handle bounce	
	if( this.vx > 0 && this.x + this.radius >= width ) {
		this.vx *= -0.6;
	}
	
	if( this.vx < 0 && this.x - this.radius <= 0 ) {
		this.vx *= -0.6;
	}
	
	if( this.vy > 0 && this.y + this.radius >= height ) {
		this.vy *= -0.6;
	}
	
	if( this.vy < 0 && this.y - this.radius <= 0 ) {
		this.vy *= -0.6;
	}
	
	// handle bounds and friction	
	if( this.x + this.radius > width ) {
		this.x = width - this.radius;
		this.vy *= friction;
	}
	
	if( this.x - this.radius < 0 ) {
		this.x = this.radius;
		this.vy *= friction;
	}
	
	if( this.y + this.radius > height ) {
		this.y = height - this.radius;
		this.vx *= friction;
	}
	
	if( this.y - this.radius < 0 ) {
		this.y = this.radius;
		this.vx *= friction;
	}
	
	// handle gravity	
	this.vx += xGravity;
	this.vy += yGravity;
};

Dot.prototype.collide = function( otherDot ) {
	// still working on understanding this
	// lots of help from https://lamberta.github.io/html5-animation/
	var dx = otherDot.x - this.x,
		dy = otherDot.y - this.y,
		dist = Math.sqrt( dx * dx + dy * dy ),
		minDist = this.radius + otherDot.radius;
	if( dist < minDist ) {
		var tx = this.x + dx / dist * minDist,
			ty = this.y + dy / dist * minDist,
			ax = ( tx - otherDot.x ) * 0.6,
			ay = ( ty - otherDot.y ) * 0.6;
		this.vx -= ax;
		this.vy -= ay;      
		otherDot.vx += ax;
		otherDot.vy += ay;
		this.vx *= friction * 0.9;
		this.vy *= friction * 0.9;
		otherDot.vx *= friction * 0.9;
		otherDot.vy *= friction * 0.9;
	}
};

Dot.prototype.draw = function() {
	ctx.beginPath();
	ctx.arc( this.x, this.y, this.radius, 0, TWOPI );
	ctx.fillStyle = palettes[ paletteCurrent ][ this.color ];
	ctx.fill();
};

function init() {
	canvas = document.getElementById( 'canvas' );
	ctx = canvas.getContext( '2d' );
	xGravity = 0;
	yGravity = 1;
	friction = 0.99;
	dots = [];
	// palette credits:
	// https://color.adobe.com/Friends-and-foes-color-theme-1175537/
	// https://color.adobe.com/Ocean-Sunset-color-theme-46355/
	// https://color.adobe.com/Gettysburg-color-theme-209416/
	// https://color.adobe.com/vintage-card-color-theme-3165833/
	palettes = [
		[
			'#2e2932',
			'#01a2a6',
			'#37d8c2',
			'#bdf271',
			'#ffffa6'
		],
		[
			'#405952',
			'#9c9b7a',
			'#ffd393',
			'#ff974f',
			'#f35033'
		],
		[
			'#962d3e',
			'#343641',
			'#979c9c',
			'#f2ebc9',
			'#388898'
		],
		[
			'#f2ebbf',
			'#5c4b51',
			'#8dbeb2',
			'#f2b468',
			'#ee6163'
		]
	];
	paletteCount = palettes.length;
	paletteCurrent = 3;	
	colorCount = palettes[ 0 ].length;
	PI = Math.PI;
	TWOPI = PI * 2;
	
	reset();
	loop();
}

function reset() {
	width = window.innerWidth;
	height = window.innerHeight;
	dots.length = 0;
	tick = 0;
	mx = width / 2;
	my = height / 2;
	
	canvas.width = width;
	canvas.height = height;
}

function create() {
	if( tick && dots.length < 500 ) {
		dots.push( new Dot() );	
	}
}

function step() {
	var i = dots.length;
	while( i-- ) {
		dots[ i ].step( i );	
	}
	
	i = dots.length;
	while( i-- ) {
		dot = dots[ i ];
		var j = i;
		if( j > 0 ) {
			while( j-- ) {
				dot.collide( dots[ j ] );
			}
		}
	}
}

function draw() {
	ctx.fillStyle = palettes[ paletteCurrent ][ 0 ];
	ctx.fillRect( 0, 0, width, height );
	
	var i = dots.length;
	while( i-- ) {
		dots[ i ].draw();	
	}
}

function loop() {
	requestAnimationFrame( loop );
	create();
	step();
	draw();
	tick++;
}

function onmousemove( e ) {
	mx = e.pageX;
	my = e.pageY;
	
	xGravity = ( mx - width / 2 ) / ( width / 2 );
	yGravity = ( my - height / 2 ) / ( height / 2 );
}

function onmousedown() {
	var i = dots.length;
	while( i-- ) {
		dots[ i ].vx += rand( -10, 10 );
		dots[ i ].vy += rand( -10, 10 );
	}

	if( paletteCurrent < paletteCount - 1 ) {
		paletteCurrent++;	
	} else {
		paletteCurrent = 0;	
	}
}

window.addEventListener( 'resize', reset );
window.addEventListener( 'mousemove', onmousemove );
window.addEventListener( 'mousedown', onmousedown );

init();
}
