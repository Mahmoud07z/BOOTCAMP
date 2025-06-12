import { TodoList } from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask('Learn JavaScript');
myTodoList.addTask('Build a project');
myTodoList.addTask('Go for a walk');

myTodoList.markComplete('Learn JavaScript');
myTodoList.markComplete('Go for a walk');

myTodoList.listTasks();