"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect } from "react";

const P5Animation = () => {
  useEffect(() => {
    let p5Instance = null;

    import("p5").then((p5Module) => {
      const p5 = p5Module.default;

      const sketch = (p) => {
        let particles = [];
        let explosionParticles = [];
        let time = 0;
        let mouseInfluence = 150;
        let numParticles = 80;

        class Particle {
          constructor(x, y, vx, vy) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.size = p.random(3, 8);
            this.originalSize = this.size;
            this.hue = p.random(200, 280);
            this.brightness = p.random(60, 100);
            this.pulse = p.random(p.TWO_PI);
          }
          update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > p.width) this.vx *= -0.8;
            if (this.y < 0 || this.y > p.height) this.vy *= -0.8;
            this.x = p.constrain(this.x, 0, p.width);
            this.y = p.constrain(this.y, 0, p.height);
            this.vx *= 0.99;
            this.vy *= 0.99;
            this.pulse += 0.1;
            this.size = this.originalSize + p.sin(this.pulse) * 2;

            const centerX = p.width / 2;
            const centerY = p.height / 2;
            const distToCenter = p.dist(this.x, this.y, centerX, centerY);
            if (distToCenter > 50) {
              const gravity = 0.0003;
              const angle = p.atan2(centerY - this.y, centerX - this.x);
              this.vx += p.cos(angle) * gravity;
              this.vy += p.sin(angle) * gravity;
            }
          }
          display() {
            p.push();
            p.translate(this.x, this.y);
            p.drawingContext.shadowBlur = 20;
            p.drawingContext.shadowColor = `hsl(${this.hue}, 70%, 50%)`;
            p.fill(this.hue, 70, this.brightness);
            p.noStroke();
            p.ellipse(0, 0, this.size);
            p.fill(this.hue, 30, 90);
            p.ellipse(0, 0, this.size * 0.5);
            p.drawingContext.shadowBlur = 0;
            p.pop();
          }
        }

        class ExplosionParticle {
          constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = p.random(-8, 8);
            this.vy = p.random(-8, 8);
            this.life = 60;
            this.maxLife = 60;
            this.size = p.random(2, 6);
            this.hue = p.random(30, 60);
          }
          update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= 0.95;
            this.vy *= 0.95;
            this.life--;
          }
          display() {
            const alpha = p.map(this.life, 0, this.maxLife, 0, 1);
            p.push();
            p.translate(this.x, this.y);
            p.drawingContext.shadowBlur = 10;
            p.drawingContext.shadowColor = `hsla(${this.hue}, 100%, 50%, ${alpha})`;
            p.fill(this.hue, 100, 90, alpha * 255);
            p.noStroke();
            p.ellipse(0, 0, this.size);
            p.drawingContext.shadowBlur = 0;
            p.pop();
          }
        }

        const drawConnections = () => {
          p.stroke(100, 150, 255, 50);
          p.strokeWeight(1);
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const d = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
              if (d < 100) {
                const alpha = p.map(d, 0, 100, 100, 0);
                p.stroke(100, 150, 255, alpha);
                p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
              }
            }
          }
        };

        const drawWaveBackground = () => {
          p.push();
          p.noFill();
          p.stroke(50, 100, 200, 30);
          p.strokeWeight(2);
          for (let i = 0; i < 5; i++) {
            p.beginShape();
            for (let x = 0; x <= p.width; x += 10) {
              const y = p.height / 2 + p.sin(x * 0.01 + time * 2 + i * 0.5) * (50 + i * 20);
              p.vertex(x, y);
            }
            p.endShape();
          }
          p.pop();
        };

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight);
          p.colorMode(p.HSL);
          for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(p.random(p.width), p.random(p.height), p.random(-1, 1), p.random(-1, 1)));
          }
        };

        p.draw = () => {
          p.background(5, 10, 20);
          time += 0.02;
          particles.forEach((particle, i) => {
            particle.update();
            particle.display();
            const d = p.dist(p.mouseX, p.mouseY, particle.x, particle.y);
            if (d < mouseInfluence) {
              const force = p.map(d, 0, mouseInfluence, 0.5, 0);
              const angle = p.atan2(particle.y - p.mouseY, particle.x - p.mouseX);
              particle.vx += p.cos(angle) * force;
              particle.vy += p.sin(angle) * force;
            }
          });
          drawConnections();
          explosionParticles.forEach((ep, i) => {
            ep.update();
            ep.display();
            if (ep.life <= 0) explosionParticles.splice(i, 1);
          });
          drawWaveBackground();
        };

        p.mousePressed = () => {
          for (let i = 0; i < 20; i++) {
            explosionParticles.push(new ExplosionParticle(p.mouseX, p.mouseY));
          }
          for (let particle of particles) {
            const d = p.dist(p.mouseX, p.mouseY, particle.x, particle.y);
            if (d < 100) {
              const force = p.map(d, 0, 100, 5, 0);
              const angle = p.atan2(particle.y - p.mouseY, particle.x - p.mouseX);
              particle.vx += p.cos(angle) * force;
              particle.vy += p.sin(angle) * force;
            }
          }
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        p.doubleClicked = () => {
          for (let i = 0; i < 5; i++) {
            particles.push(
              new Particle(
                p.mouseX + p.random(-50, 50),
                p.mouseY + p.random(-50, 50),
                p.random(-2, 2),
                p.random(-2, 2)
              )
            );
          }
        };
      };

      p5Instance = new p5(sketch);

    });

    return () => {
      if (p5Instance) p5Instance.remove();
    };
  }, []);

  return (
    <div className="hero flex flex-col items-center justify-center min-h-screen relative">
      <Image
        src="/afk-white.png"
        alt="Hero Image"
        width={500}
        height={300}
        className="rounded-lg shadow-lg mb-6 z-10"
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(P5Animation), { ssr: false });