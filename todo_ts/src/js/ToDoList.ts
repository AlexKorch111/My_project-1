import {ToDoItem} from "./ToDoItem";

export class ToDoList {
    get cardContentElement(): HTMLElement {
        return this._cardContentElement;
    }

    set cardContentElement(value: HTMLElement) {
        this._cardContentElement = value;
    }

    private items: Map<any, any>;
    private _cardContentElement: HTMLElement;
    private classKey: string;
    private input: HTMLElement;

    constructor(cardContentElement: HTMLElement, classKey: string) {
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
        this.items.forEach((item: ToDoItem, key: string) => {
            let element = document.createElement("div");
            element.setAttribute("id", key);
            element.setAttribute("class", "todo--item");
            element.innerHTML = item.generate();
            this._cardContentElement.insertBefore(element, this.input);
            i++;
        });
        nodeList = document.querySelectorAll(".close--btn");
        nodeList.forEach((item: HTMLElement) => {
            item.addEventListener('click', this.deleteItem.bind(this))
        });
        nodeList = document.querySelectorAll(".todo--item");
        nodeList.forEach(item => {
            item.addEventListener('change', this.onChange.bind(this))
        });

    }

    addItem(event: KeyboardEvent) {

        if (event.keyCode == 13) {

            let text = (<HTMLInputElement>event.target).value
            let toDoItem = new ToDoItem(text, false);
            this.items.set(this.items.size, toDoItem);
            this.render();
        }
    }

    deleteItem(event: KeyboardEvent) {
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


    insertAfter(elem: HTMLElement, refElem: HTMLElement) {
        var parent = refElem.parentNode;
        var next = refElem.nextSibling;
        if (next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    }

}