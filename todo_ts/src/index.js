"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/md-todo.css");
require("./js/ToDoList.ts");
require("./js/ToDoItem.ts");
require("./js/ToDoBuilder.ts");
const ToDoBuilder_1 = require("./js/ToDoBuilder");
todo();
function todo() {
    let contentConvas = document.querySelector(".todo--list");
    new ToDoBuilder_1.ToDoBuilder(contentConvas);
}
//# sourceMappingURL=index.js.map