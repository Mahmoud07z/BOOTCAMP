// === Video Class Definition ===
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

// === Part 1: Create and use two instances ===
const video1 = new Video("The JavaScript Journey", "Alice", 300);
video1.watch(); // Alice watched all 300 seconds of "The JavaScript Journey"!

const video2 = new Video("CSS Animations 101", "Bob", 420);
video2.watch(); // Bob watched all 420 seconds of "CSS Animations 101"!

// === Bonus Part: Store data for five videos ===
const videoData = [
  { title: "Understanding Promises", uploader: "Charlie", time: 180 },
  { title: "React for Beginners", uploader: "Dana", time: 540 },
  { title: "Mastering Git", uploader: "Eve", time: 360 },
  { title: "Intro to FastAPI", uploader: "Frank", time: 600 },
  { title: "Python Data Structures", uploader: "Grace", time: 480 }
];

// === Bonus: Instantiate videos using loop ===
const videoInstances = [];

for (let data of videoData) {
  const video = new Video(data.title, data.uploader, data.time);
  videoInstances.push(video);
  video.watch(); // Call the watch() method for each
}
