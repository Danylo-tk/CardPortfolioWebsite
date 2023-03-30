"use client";

import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";
import styles from "./styles.module.css";

function sketch(p5: P5CanvasInstance) {
  let cellScl = 100;
  let inc = 0.1;
  let cols: number, rows: number;
  let zoff = 0;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    cols = 15;
    rows = 10;
    cellScl = p5.width / cols;
  };

  p5.draw = () => {
    p5.background(240);

    let yoff = 0;
    for (let x = 0; x < cols + 2; x++) {
      let xoff = 0;
      for (let y = 0; y < rows; y++) {
        let rand = p5.noise(xoff, yoff, zoff) * p5.TWO_PI;
        let vect = p5.constructor.Vector.fromAngle(rand);
        xoff += inc;

        p5.stroke(255, 0, 0);
        p5.strokeWeight(1);
        p5.push();
        p5.translate(x * cellScl, y * cellScl);
        p5.rotate(vect.heading());
        p5.line(0, 0, cellScl - 5, 0);
        p5.pop();
      }
      yoff += inc;
    }
    zoff += 0.006;
  };
}

const PerlinBg = () => {
  return (
    <div className={styles.container}>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default PerlinBg;
