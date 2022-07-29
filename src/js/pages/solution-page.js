import TweenLite from "gsap/gsap-core";
import TweenMax from "gsap/gsap-core";
import Draggable from "gsap/Draggable";
import CSSPlugin from "gsap/CSSPlugin";
import {gsap} from "gsap";

gsap.registerPlugin(Draggable, TweenLite, CSSPlugin, TweenMax)

export default () => {
  let draggables = Draggable.create(".knob", {
    type: "y",
    bounds: "#range",
    snap: {
      y: function (endValue) {
        return Math.ceil(endValue);
      }
    },
    onDrag: update,
  });

  let value = draggables[0].maxY / 2;

  function update() {
    let y1 = draggables[0].y;
    TweenLite.set('.range', {y: y1});
  }

  function updateSlider() {
    TweenLite.set('.range', {y: value})
    TweenLite.set(draggables[0].target, {y: value, onUpdate: draggables[0].update, onUpdateScope: draggables[0]});
  }
  updateSlider();
}