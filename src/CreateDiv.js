export class Div {
    constructor(name, className, Selector, selectorName) {
        this.name = name;
        this.className = className;
        this.Selector = Selector;
        this.selectorName = selectorName;
        this.selfSelect = '.'+this.name
        
        
    }
    createSelector() {
        
        this.selfSelector = document.querySelector(this.selfSelect)
        this.selectorName = document.querySelector(this.Selector);
        
        return this;
    }
    createItem() {
        this.name = document.createElement('item')
        this.name.classList.add(this.className)
        this.selectorName.appendChild(this.name)
        
        return this;
    }
    createDiv() {
        
        this.name = document.createElement('div')
        this.name.classList.add(this.className)
        this.selectorName.appendChild(this.name)
        
        return this;
    }
    textContent(text) {
        
        let who = '.' + this.className
        
        let test = document.querySelector(who).textContent = text
        console.log(test)
    }

    me(nameOf) {
        
        nameOf = document.querySelector(nameOf)
        return nameOf;
    }
    

}
