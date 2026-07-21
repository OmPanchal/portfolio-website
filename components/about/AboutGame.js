"use client";
import React, { useEffect, useRef, useState } from "react";
import AboutLogo from "./AboutLogo";
import AboutSidebar from "./AboutSidebar";

const AboutGame = () => {
  let WIDTH = 0;
  let HEIGHT = 0;
  const COLOURS = {
    blue: {
      on: "#3458eb",
      off: "#34baeb",
    },
    red: {
      on: "#e81c4f",
      off: "#e6839b",
    },
    yellow: {
      on: "#fcba03",
      off: "white",
    },
    purple: {
      on: "#ad07fa",
      off: "#d07ff5",
    },
  };
  const THRUST = 0.3;
  const FRICTION = 0.985;
  const ROTATION_SPEED = 0.075;
  let FIRE_RATE = 15;
  const POWER_UPS = [
    { type: "I", colour: COLOURS.blue, duration: 480 },
    { type: "R", colour: COLOURS.red, duration: 360 },
    { type: "T", colour: COLOURS.yellow, duration: 480 },
    { type: "M", colour: COLOURS.purple, duration: 300 },
  ];
  const DEFAULT_GAME_STATE = {
    score: 0,
    lives: 3,
    wave: 1,
  };

  const canvasRef = useRef(null);
  const keysRef = useRef({
    up: false,
    left: false,
    right: false,
    space: false,
  });
  const shootingRef = useRef({ cooldown: 0 });
  const statsRef = useRef(DEFAULT_GAME_STATE);
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  function wrapPosition(object) {
    if (object.x < 0) object.x = WIDTH;
    if (object.x > WIDTH) object.x = 0;
    if (object.y < 0) object.y = HEIGHT;
    if (object.y > HEIGHT) object.y = 0;
  }

  useEffect(() => {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
  }, [resetKey]);

  function drawShip(ctx, ship) {
    ctx.save(); // remember current canvas settings
    ctx.translate(ship.x, ship.y); // move origin to ship's position
    ctx.rotate(ship.angle); // rotate around that origin

    ctx.beginPath();
    ctx.moveTo(60, 0); // nose of the ship
    ctx.lineTo(-40, -40); // back-left wing
    ctx.lineTo(-40, 40); // back-right wing
    ctx.closePath();

    if (ship.charged && ship.powerUpLife > 0) {
      if (Math.ceil(ship.powerUpLife / 4) % 2 === 0) {
        ctx.strokeStyle = ship.charged.colour.on;
      } else {
        ctx.strokeStyle = ship.charged.colour.off;
      }
    } else {
      ctx.strokeStyle = "white";
    }
    ctx.stroke();
    ctx.restore(); // undo translate/rotate for the next object
  }

  function drawAsteroid(ctx, asteroid) {
    ctx.save();
    ctx.translate(asteroid.x, asteroid.y);
    ctx.rotate(asteroid.angle);

    ctx.beginPath();
    asteroid.vertices.forEach((point, i) => {
      if (i === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();

    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.restore();
  }

  function drawBullet(ctx, bullet) {
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  function drawPowerUp(ctx, powerUp) {
    ctx.beginPath();
    ctx.arc(powerUp.x, powerUp.y, powerUp.radius, 0, Math.PI * 2);

    if (powerUp.life > 0) {
      if (Math.ceil(powerUp.life / 4) % 2 === 0) {
        ctx.fillStyle = powerUp.spec.colour.on;
      } else {
        ctx.fillStyle = powerUp.spec.colour.off;
      }
    }
    ctx.fill();
  }

  function updateShip(ship, keys) {
    if (keys.left) ship.angle -= ROTATION_SPEED;
    if (keys.right) ship.angle += ROTATION_SPEED;

    if (keys.up) {
      ship.vx += Math.cos(ship.angle) * THRUST;
      ship.vy += Math.sin(ship.angle) * THRUST;
    }

    ship.vx *= FRICTION;
    ship.vy *= FRICTION;

    ship.x += ship.vx;
    ship.y += ship.vy;

    if (ship.powerUpLife > 0) {
      ship.powerUpLife -= 1;
    }
    if (ship.powerUpLife <= 0) {
      ship.charged = undefined;
    }
  }

  function updateAsteroid(asteroid) {
    asteroid.x += asteroid.vx;
    asteroid.y += asteroid.vy;
    asteroid.angle += asteroid.rotationSpeed;
    wrapPosition(asteroid);
  }

  function updateBullet(bullet) {
    bullet.x += bullet.vx;
    bullet.y += bullet.vy;
    bullet.life -= 1;
    wrapPosition(bullet);
  }

  function createShip() {
    return {
      x: WIDTH / 2,
      y: HEIGHT / 2,
      angle: 0,
      vx: 0,
      vy: 0,
      radius: 36,
      charged: POWER_UPS[0],
      powerUpLife: 240,
    };
  }

  function createAsteroid(x, y, radius) {
    return {
      x,
      y,
      radius,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      vertices: generateAsteroidShape(radius),
    };
  }

  function createPowerUp(x, y) {
    return {
      x,
      y,
      spec: POWER_UPS[Math.floor(Math.random() * POWER_UPS.length)],
      life: 240,
      radius: 20,
    };
  }

  function generateAsteroidShape(radius) {
    const points = [];
    const numVertices = 7 + Math.floor(Math.random() * 3);

    for (let i = 0; i < numVertices; i++) {
      const angle = (i / numVertices) * Math.PI * 2;
      const variance = radius * 0.4;
      const r = radius + (Math.random() - 0.5) * variance;
      points.push({
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
      });
    }
    return points;
  }

  function spawnAsteroid() {
    const edge = Math.floor(Math.random() * 4);
    let x, y;

    if (edge === 0) {
      x = Math.random() * WIDTH;
      y = -30;
    } else if (edge === 1) {
      x = WIDTH + 30;
      y = Math.random() * HEIGHT;
    } else if (edge === 2) {
      x = Math.random() * WIDTH;
      y = HEIGHT + 30;
    } else {
      x = -30;
      y = Math.random() * HEIGHT;
    }

    return createAsteroid(x, y, 160);
  }

  function splitAsteroid(asteroid, asteroidsArray) {
    const newRad = asteroid.radius / 2;

    if (newRad > 20) {
      for (let i = 0; i < 2; i++) {
        const newAsteroid = createAsteroid(asteroid.x, asteroid.y, newRad);
        asteroidsArray.push(newAsteroid);
      }
    }
  }

  function handleShooting(ship, keys, shootingState, bullets) {
    if (shootingState.cooldown > 0) {
      shootingState.cooldown -= 1;
    }

    if (keys.space && shootingState.cooldown <= 0) {
      bullets.push(createBullet(ship));
      if (ship.charged && ship.charged.type === "T" && ship.powerUpLife > 0) {
        bullets.push(createBullet(ship, Math.PI / 3));
        bullets.push(createBullet(ship, -Math.PI / 3));
      }
      shootingState.cooldown = FIRE_RATE;
    }
  }

  function createBullet(ship, delta = 0) {
    const speed = 32;
    return {
      x: ship.x + Math.cos(ship.angle) * ship.radius,
      y: ship.y + Math.sin(ship.angle) * ship.radius,
      vx: Math.cos(ship.angle + delta) * speed,
      vy: Math.sin(ship.angle + delta) * speed,
      radius: 4,
      life: 45,
    };
  }

  function isColliding(obj1, obj2) {
    const dx = obj1.x - obj2.x;
    const dy = obj1.y - obj2.y;
    const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    return distance < obj1.radius + obj2.radius;
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "KeyW") keysRef.current.up = true;
      if (e.code === "KeyA") keysRef.current.left = true;
      if (e.code === "KeyD") keysRef.current.right = true;
      if (e.code === "Space") keysRef.current.space = true;
      if (e.code === "KeyQ") setIsGamePlaying(false);
    };
    const handleKeyUp = (e) => {
      if (e.code === "KeyW") keysRef.current.up = false;
      if (e.code === "KeyA") keysRef.current.left = false;
      if (e.code === "KeyD") keysRef.current.right = false;
      if (e.code === "Space") keysRef.current.space = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isGamePlaying) {
      const canvas = canvasRef.current;
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      let isPlaying = true;

      const ctx = canvas.getContext("2d");
      let ship = createShip();

      let asteroids = [];
      for (let i = 0; i < statsRef.current.wave + 3; i++) {
        asteroids.push(spawnAsteroid());
      }

      let bullets = [];
      let powerUpOrb = undefined;

      let animationId;

      const gameloop = () => {
        if (!isPlaying) return;

        if (ship.charged && ship.charged.type === "M") {
          FIRE_RATE = 1;
        } else {
          FIRE_RATE = Math.max(8, 15 - statsRef.current.wave);
        }
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        updateShip(ship, keysRef.current);
        wrapPosition(ship);
        drawShip(ctx, ship);

        handleShooting(ship, keysRef.current, shootingRef.current, bullets);

        bullets.forEach((bullet) => {
          updateBullet(bullet);
          drawBullet(ctx, bullet);
        });

        bullets = bullets.filter((b) => b.life > 0);

        asteroids.forEach((asteroid) => {
          updateAsteroid(asteroid);
          drawAsteroid(ctx, asteroid);
        });

        asteroids = asteroids.filter((a) => a.radius > 0);

        asteroids.forEach((asteroid) => {
          bullets.forEach((bullet) => {
            if (isColliding(bullet, asteroid)) {
              bullet.life = 0;
              if (asteroid.radius === 160) {
                statsRef.current.score += 20;
              } else if (asteroid.radius === 80) {
                statsRef.current.score += 50;
              } else if (asteroid.radius === 40) {
                statsRef.current.score += 100;

                let flip = Math.random();
                if (flip < 0.2) {
                  powerUpOrb = createPowerUp(asteroid.x, asteroid.y);
                }
              }
              splitAsteroid(asteroid, asteroids);
              asteroid.radius = 0;
            }
          });
        });

        if (
          !ship.charged ||
          (ship.charged && ship.charged.type !== "I") ||
          ship.powerUpLife <= 0
        ) {
          asteroids.forEach((asteroid) => {
            if (isColliding(ship, asteroid)) {
              if (ship.charged && ship.charged.type === "R") {
                splitAsteroid(asteroid, asteroids);
                asteroid.radius = 0;
              } else {
                statsRef.current.lives -= 1;
                if (statsRef.current.lives < 0) {
                  setIsGamePlaying(false);
                  isPlaying = false;
                  return;
                }
                splitAsteroid(asteroid, asteroids);
                asteroid.radius = 0;
                statsRef.current;
                ship = createShip();
              }
            }
          });
        }

        if (asteroids.length === 0) {
          statsRef.current.score += 100 * statsRef.current.wave;
          statsRef.current.wave += 1;
          FIRE_RATE = Math.max(8, 15 - statsRef.current.wave);
          ship = createShip();
          for (let i = 0; i < statsRef.current.wave + 3; i++) {
            asteroids.push(spawnAsteroid());
          }
        }

        if (powerUpOrb) {
          if (powerUpOrb.life <= 0) {
            powerUpOrb = undefined;
          } else {
            let pu = powerUpOrb;
            powerUpOrb.life -= 1;

            drawPowerUp(ctx, pu);
            if (isColliding(pu, ship)) {
              for (let i = 0; i < POWER_UPS.length; i++) {
                if (POWER_UPS[i] === pu.spec) {
                  ship = {
                    ...ship,
                    charged: POWER_UPS[i],
                    powerUpLife: POWER_UPS[i].duration,
                  };
                }
              }
              powerUpOrb = undefined;
            }
          }
        }

        if (ship.charged && ship.powerUpLife <= 0) {
          ship = { ...ship, charged: undefined, powerUpLife: 0 };
        }

        ctx.font = "bold 64px HyperSpace";
        ctx.fillStyle = "white";
        ctx.fillText(
          "Score:" +
            statsRef.current.score +
            " - Lives:" +
            statsRef.current.lives +
            " - Wave:" +
            statsRef.current.wave,
          16,
          64,
        );

        animationId = requestAnimationFrame(gameloop);
      };

      gameloop();

      return () => cancelAnimationFrame(animationId);
    }
  }, [resetKey]);

  return (
    <>
      {isGamePlaying ? (
        <canvas ref={canvasRef} style={{ border: "1px solid white" }} />
      ) : (
        <div className="font-[HyperSpace] font-extrabold flex flex-col items-center justify-center gap-8 cursor-default">
          <AboutLogo />
          <AboutSidebar />
          <div className="fixed bottom-0 flex flex-row items-center justify-center w-full text-5xl my-10">
            {resetKey === 0 ||
            (statsRef.current.score === 0 && statsRef.current.wave === 1)
              ? ""
              : `Score:${statsRef.current.score} - Wave:${statsRef.current.wave}`}
          </div>
          <div
            className="text-9xl transition-none my-10"
            style={{ animation: "flash 1s infinite" }}
          >
            Meteors
          </div>
          <button
            className="w-full text-7xl hover:bg-white hover:text-black p-4 cursor-pointer font-normal hover:font-extrabold"
            onClick={() => {
              setIsGamePlaying(true);
              statsRef.current = DEFAULT_GAME_STATE;
              setResetKey((k) => k + 1);
            }}
          >
            Stats
          </button>
          <button
            className="w-full text-7xl hover:bg-white hover:text-black p-4 cursor-pointer font-normal hover:font-extrabold"
            onClick={() => {
              setIsGamePlaying(true);
              statsRef.current = DEFAULT_GAME_STATE;
              setResetKey((k) => k + 1);
            }}
          >
            {resetKey === 0 ? "Play Game" : "Play Again"}
          </button>
        </div>
      )}
    </>
  );
};

export default AboutGame;
