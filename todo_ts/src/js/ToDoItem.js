"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToDoItem {
    constructor(title, isDone) {
        this._title = title;
        this._isDone = isDone;
    }
    set title(str) {
        this._title = str;
    }
    get title() {
        return this._title;
    }
    set isDone(isDone) {
        this._isDone = isDone;
    }
    get isDone() {
        return this._isDone;
    }
    generate() {
        let checked = "";
        let checkedClass = "";
        if (this._isDone) {
            checked = "checked";
            checkedClass = "todo--item-done";
        }
        return `<input class="todo--item" type="checkbox" ${checked}><label class="${checkedClass}">${this._title}</label><span class="close--btn">&times;</span>`;
    }
}
exports.ToDoItem = ToDoItem;
//# sourceMappingURL=ToDoItem.js.map