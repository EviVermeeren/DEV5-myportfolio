export default class Island {
  constructor(coordinates) {
    this.name = this.getRandomName();
    this.color = this.getRandomColor();
    this.coordinates = coordinates || { x: 0, y: 0 };
    this.element = null;
  }

  getName() {
    return this.name;
  }

  getColor() {
    return this.color;
  }

  getElement() {
    return this.element;
  }

  getRandomColor() {
    const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return `linear-gradient(45deg, ${color1}, ${color2})`;
  }

  getRandomName() {
    const names = ["👩🏻", "👨🏻", "👩🏼", "👨🏼", "👩🏼‍🦰", "👨🏼‍🦰", "🤶🏼", "🎅🏼", "🧘🏽‍♀️", "👩🏽‍🚀"];

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
  updateName(name) {
    this.element.textContent = name;
  }
  render() {
    const islandElement = document.createElement("div");
    islandElement.classList.add("island");
    islandElement.style.background = this.color;
    islandElement.style.left = this.coordinates.x + "px";
    islandElement.style.top = this.coordinates.y + "px";
    islandElement.textContent = this.name;

    this.element = islandElement;
    document.getElementById("app").appendChild(islandElement);
  }
}
