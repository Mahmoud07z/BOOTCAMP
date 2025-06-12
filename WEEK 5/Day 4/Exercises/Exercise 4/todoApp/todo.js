export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(taskName) {
    const task = { name: taskName, completed: false };
    this.tasks.push(task);
    console.log(`Task "${taskName}" added!`);
  }

  markComplete(taskName) {
    const task = this.tasks.find((t) => t.name === taskName);
    if (task) {
      task.completed = true;
      console.log(`Task "${taskName}" marked as complete!`);
    } else {
      console.log(`Task "${taskName}" not found!`);
    }
  }

  listTasks() {
    console.log('\nCurrent Tasks:');
    this.tasks.forEach((task, index) => {
      const status = task.completed ? '✅' : '❌';
      console.log(`${index + 1}. ${task.name} - ${status}`);
    });
  }
}