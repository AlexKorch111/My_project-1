"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoItem_1 = require("./ToDoItem");
class ToDoList {
    get cardContentElement() {
        return this._cardContentElement;
    }
    set cardContentElement(value) {
        this._cardContentElement = value;
    }
    constructor(cardContentElement, classKey) {
        this.items = new Map();
        this._cardContentElement = cardContentElement;
        this.classKey = classKey;
    }
    generate() {
        let element = document.createElement("div");
        this.input = document.createElement("input");
        this.input.setAttribute("type", "text");
        this.input.setAttribute("class", this.classKey);
        element.appendChild(this.input);
        this.input.addEventListener("keydown", this.addItem.bind(this));
        return element;
    }
    render() {
        let nodeList;
        let i = 0;
        this._cardContentElement.innerHTML = "";
        this._cardContentElement.appendChild(this.input);
        this.items.forEach((item, key) => {
            let element = document.createElement("div");
            element.setAttribute("id", key);
            element.setAttribute("class", "todo--item");
            element.innerHTML = item.generate();
            this._cardContentElement.insertBefore(element, this.input);
            i++;
        });
        nodeList = document.querySelectorAll(".close--btn");
        nodeList.forEach((item) => {
            item.addEventListener('click', this.deleteItem.bind(this));
        });
        nodeList = document.querySelectorAll(".todo--item");
        nodeList.forEach(item => {
            item.addEventListener('change', this.onChange.bind(this));
        });
    }
    addItem(event) {
        if (event.keyCode == 13) {
            let text = event.target.value;
            let toDoItem = new ToDoItem_1.ToDoItem(text, false);
            this.items.set(this.items.size, toDoItem);
            this.render();
        }
    }
    deleteItem(event) {
        let id = event.srcElement.parentNode.attributes.getNamedItem("id").value;
        this.items.delete(parseInt(id));
        this.render();
    }
    onChange(event) {
        let id = event.target.parentNode.getAttribute("id");
        this.items.get(parseInt(id))._isDone = event.target.checked;
        //localStorage.setItem(this.key, JSON.stringify(this.list));
        this.render();
    }
    insertAfter(elem, refElem) {
        var parent = refElem.parentNode;
        var next = refElem.nextSibling;
        if (next) {
            return parent.insertBefore(elem, next);
        }
        else {
            return parent.appendChild(elem);
        }
    }
}
exports.ToDoList = ToDoList;
//# sourceMappingURL=ToDoList.js.map