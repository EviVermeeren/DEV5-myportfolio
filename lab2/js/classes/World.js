import Island from "./Island.js";

class World {
  constructor() {
    this.islands = [];
    this.hookEvents();
    this.load();
  }

  hookEvents() {
    document.getElementById("btnSave").addEventListener("click", () => {
      this.save();
      console.log("savedIsClicked");
    });

    document.getElementById("btnLoad").addEventListener("click", () => {
      this.loadAndRenderIslands();
      console.log("loadIsClicked");
    });

    document.getElementById("btnDelete").addEventListener("click", () => {
      this.delete();
      console.log("deleteIsClicked");
    });
  }

  save() {
    if (this.islands.length > 0) {
      const savedIslands = this.islands.map((island) => ({
        name: island.name,
        color: island.color,
        coordinates: island.coordinates,
      }));

      localStorage.setItem("islands", JSON.stringify(savedIslands));
      console.log("Islands saved to localStorage.");
    } else {
      console.warn("No islands to save.");
    }
  }

  load() {
    const savedIslands = localStorage.getItem("islands");
    if (savedIslands) {
      this.islands = JSON.parse(savedIslands);
      console.log("Islands loaded from localStorage.");
      console.log(this.islands);
    } else {
      console.warn("No saved islands found in localStorage.");
    }
  }

  loadAndRenderIslands() {
    const savedIslands = localStorage.getItem("islands");
    if (savedIslands) {
      const parsedIslands = JSON.parse(savedIslands);
      console.log("Islands loaded from localStorage.");
      console.log(parsedIslands);

      parsedIslands.forEach((islandData) => {
        const { name, color, coordinates } = islandData;
        const island = new Island(coordinates);
        island.name = name;
        island.color = color;
        island.render();
        this.islands.push(island);
      });
    } else {
      console.warn("No saved islands found in localStorage.");
    }
  }

  delete() {
    localStorage.removeItem("islands");
    console.log("Islands deleted from localStorage.");
    location.reload();
  }

  getCoordinates() {
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    return {
      x: ((Math.random() * window.innerWidth) / 2) * randomSign,
      y: ((Math.random() * window.innerHeight) / 2) * randomSign,
    };
  }

  addIsland() {
    const coordinates = this.getCoordinates();
    const island = new Island(coordinates);

    island.render();
    this.islands.push(island);
  }
}

export default World;
