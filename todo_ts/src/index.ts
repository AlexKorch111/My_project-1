import './styles/md-todo.css';
import './js/ToDoList.ts'
import './js/ToDoItem.ts'
import './js/ToDoBuilder.ts'
import {ToDoBuilder} from "./js/ToDoBuilder";

todo();

function todo() {
    let contentConvas = <HTMLElement>document.querySelector(".todo--list");
    new ToDoBuilder(contentConvas);
}