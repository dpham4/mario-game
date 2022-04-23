const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.5;

class Player {
    constructor() {
        this.position = {
            x: 150,
            y: 100,
        };
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.width = 30;
        this.height = 30;
    }

    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}
class Platform {
    constructor(x_position, y_position) {
        this.position = {
            x: x_position,
            y: y_position,
        };
        this.width = 200;
        this.height = 20;
    }

    draw() {
        c.fillStyle = "blue";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const player = new Player();
console.log(player)

const platforms = [
    new Platform(300, 650),
    new Platform(500, 500),
    new Platform(700, 350),
];
const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
};

let scrollOffset = 0;

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach((platform) => {
        platform.draw();
        //Key pressed change left and right for player direction
        if (keys.right.pressed && player.position.x < 600) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 100) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;

            if (keys.right.pressed) {
                scrollOffset += 5;
                platform.position.x -= 5;
            } else if (keys.left.pressed) {
                platform.position.x += 5;
            }
        }
        //Setting hit box for player and platform (Setting platform collision)
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >=
            platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0;
        }

        if (scrollOffset > 2000) {
            console.log("You win");
        }
    });
};

animate();

window.addEventListener("keydown", ({ keyCode }) => {
    // console.log(keyCode);
    switch (keyCode) {
        case 65:
            // console.log("left")
            keys.left.pressed = true;
            break;
        case 68:
            // console.log("right")
            keys.right.pressed = true;
            break;
        case 83:
            // console.log("down")
            break;
        case 87:
            // console.log("up")
            player.velocity.y -= 15;
            break;
    }
});

window.addEventListener("keyup", ({ keyCode }) => {
    // console.log(keyCode)
    switch (keyCode) {
        case 65:
            // console.log("left")
            keys.left.pressed = false;
            break;
        case 68:
            // console.log("right")
            keys.right.pressed = false;
            break;
        case 83:
            // console.log("down")
            break;
        case 87:
            // console.log("up")
            break;
    }
});