import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4';
import { useEffect, useState } from 'react';

const cubism4Model =
  "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/haru/haru_greeter_t03.model3.json";

// @ts-expect-error pixi
window.PIXI = PIXI;

const Live2d =()=> {
  const [app, setApp] = useState<PIXI.Application>()

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    if (!canvas) {
      return;
    }

    const app = new PIXI.Application({
      view: canvas,
      resizeTo: window,
    });

    setApp(app)
  }, [])

  useEffect(() => {
    if (!app) {
      return;
    }

    console.log('----- app exist')

    // no `await` here as it's not a Promise
    const model = Live2DModel.fromSync(cubism4Model);

    model.once('load', () => {
      // now it's safe
      app.stage.addChild(model);
      model.scale.set(0.15);
    });
  }, [app])

  return (
    <div>
      <h3>ahsdjkfh</h3>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default Live2d;