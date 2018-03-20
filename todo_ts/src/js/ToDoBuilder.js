"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoList_1 = require("./ToDoList");
class ToDoBuilder {
    constructor(convasElement) {
        this.index = 0;
        this.convasElement = convasElement;
        this.init();
    }
    init() {
        this.keys = Object.keys(localStorage);
        this.createButton();
    }
    generateEmptyTodoList() {
        var toDoList;
        let cardElement = document.createElement("div");
        let cardContentElement = document.createElement("div");
        cardElement.setAttribute("class", "card");
        cardContentElement.setAttribute("class", "container");
        cardContentElement.innerText = "todo";
        cardElement.appendChild(cardContentElement);
        this.index++;
        toDoList = new ToDoList_1.ToDoList(cardContentElement, "todo");
        cardContentElement.appendChild(toDoList.generate());
        return cardElement;
    }
    createButton() {
        let button = document.createElement("button");
        button.innerHTML = "+";
        button.setAttribute("class", "button--add");
        button.addEventListener('click', this.addToDoList.bind(this));
        this.convasElement.appendChild(button);
    }
    addToDoList() {
        this.convasElement.appendChild(this.generateEmptyTodoList());
    }
}
exports.ToDoBuilder = ToDoBuilder;
//# sourceMappingURL=ToDoBuilder.js.map