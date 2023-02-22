import { Controller } from "@hotwired/stimulus";
import "shikwasa/dist/style.css";
import { Player, Chapter } from "shikwasa";

// Connects to data-controller="podcast"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element);
    Player.use(Chapter);

    const player = new Player({
      container: () => this.element,
      audio: {
        title: this.data.get("title"),
        artist: "Dean DeHart",
        src: this.data.get("url"),
        chapters: [
          {
            title: "Chapter 1",
            startTime: 0,
            endTime: 4,
          },
          {
            title: "Chapter 2",
            startTime: 5,
            endTime: 8,
          },
        ],
      },
    });
  }
}
