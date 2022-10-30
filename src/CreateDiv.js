export class Div {
    constructor(name, className, Selector, selectorName) {
        this.name = name;
        this.className = className;
        this.Selector = Selector;
        this.selectorName = selectorName;
        
        
    }
    createSelector() {
        
        this.selectorName = document.querySelector(this.Selector);
        
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
    

}
