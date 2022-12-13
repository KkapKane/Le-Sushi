import './style.css';
import { Div } from './CreateDiv'
import { loadAbout, loadHome, loadMenu, Lantern, loadBook, loadContact } from './LoadPages';

const resName = new Div('resName', 'resName', '.leftheader', 'leftheader')
const iconDiv = new Div('iconDiv', 'iconDiv', '.leftheader', 'leftheader')
const menu = new Div('menu', 'menu', '.linkContainer', '.linkContainer')
const about = new Div('about', 'about', '.linkContainer', '.linkContainer')
const book = new Div('book', 'book', '.linkContainer', '.linkContainer')
const contact = new Div('contact', 'contact', '.linkContainer', '.linkContainer')
const lantern = new Div('lantern', 'lantern', '.header', 'header')

iconDiv.me('.iconDiv').addEventListener('click', () => {
    loadHome();
})

resName.me('.resName').addEventListener('click', () => {
    loadHome();
})

about.me('.about').addEventListener('click', () => {
    loadAbout();
})

lantern.me('.lantern').addEventListener('click', () => {
    Lantern();
})

menu.me('.menu').addEventListener('click', () => {
    loadMenu();
})

book.me('.book').addEventListener('click', () => {
    loadBook();
})

contact.me('.contact').addEventListener('click', () => {
    loadContact();
})