// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2 = document.querySelector("h2");
//alert(h2.textContent);

const superEventHandler = {
  handlerMouseEnter: function () {
    h2.textContent = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handlerMouseLeave: function () {
    h2.textContent = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handlerResize: function () {
    h2.textContent = "You just resized!";
    h2.style.color = colors[2];
  },
  handlerRightClick: function () {
    h2.textContent = "That was a right click!";
    h2.style.color = colors[4];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handlerMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handlerMouseLeave);
window.addEventListener("resize", superEventHandler.handlerResize);
h2.addEventListener("contextmenu", superEventHandler.handlerRightClick);
