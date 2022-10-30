import './style.css';
import {Div} from './CreateDiv'


const header = new Div('header', 'header', '.content', 'Content')
const leftheader = new Div('leftheader', 'leftheader', '.header', 'header')
const resName = new Div('resName','resName','.leftheader','leftheader')
const iconDiv = new Div('iconDiv', 'iconDiv', '.leftheader', 'leftheader')
const linkContainer = new Div('linkContainer', 'linkContainer', '.header', 'header')

const middle = new Div('middle', 'middle', '.content', 'content')
const midleft = new Div('midleft', 'midleft', '.middle', 'middle')
const midright = new Div('midright', 'midright', '.middle', 'middle')
const welcomeP1 = new Div('welcomeP1', 'welcomeP1', '.midright', 'midright')
const welcomeP2 = new Div('welcomeP2', 'welcomeP2', '.midright', 'midright')
const welcomeBtn = new Div('welcomeBtn', 'welcomeBtn', '.midright', 'midright')
const menu = new Div('menu', 'menu', '.linkContainer', '.linkContainer')
const about = new Div('about', 'about', '.linkContainer', '.linkContainer')
const book = new Div('book', 'book', '.linkContainer', '.linkContainer')
const contact = new Div('contact', 'contact','.linkContainer', '.linkContainer')



header.createSelector().createDiv();
leftheader.createSelector().createDiv();
iconDiv.createSelector().createDiv();
resName.createSelector().createDiv();
linkContainer.createSelector().createDiv();
middle.createSelector().createDiv();
midleft.createSelector().createDiv();
midright.createSelector().createDiv();
welcomeP1.createSelector().createDiv();
welcomeP2.createSelector().createDiv();
welcomeBtn.createSelector().createDiv();
about.createSelector().createDiv()
menu.createSelector().createDiv();
book.createSelector().createDiv();
contact.createSelector().createDiv();


menu.textContent('Menu')
about.textContent('About')
book.textContent('Book')
contact.textContent('Contact')
resName.textContent('Le Sushi')

welcomeP1.textContent('Welcome')
welcomeP2.textContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp')
welcomeBtn.textContent('Order Online')


document.getElementsByClassName('about')[0].addEventListener('click', function (event) {
    document.querySelector('.content').style.display = 'none';
})