import Island from "../js/classes/Island.js";
import World from "../js/classes/World.js";

const world = new World();
const island = new Island();

document.getElementById("btnAddIsland").addEventListener("click", () => {
  const island = new Island();
  world.addIsland(island);
});
