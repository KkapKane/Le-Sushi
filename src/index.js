import './style.css';
import { Div } from './CreateDiv'

import { loadAbout, loadHome, loadMenu } from './LoadPages';



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
const menuPage = new Div('menuPage', 'menuPage', '.content', 'Content')
const item1 = new Div('item1', 'item1', '.menuPage', 'menuPage');
const item2 = new Div('item2', 'item2', '.menuPage', 'menuPage');
const item3 = new Div('item3', 'item3', '.menuPage', 'menuPage');
const item4 = new Div('item4', 'item4', '.menuPage', 'menuPage');
const item5 = new Div('item5', 'item5', '.menuPage', 'menuPage');
const item6 = new Div('item6', 'item6', '.menuPage', 'menuPage');
const item7 = new Div('item7', 'item7', '.menuPage', 'menuPage');
const item8 = new Div('item8', 'item8', '.menuPage', 'menuPage');
const item9 = new Div('item9', 'item9', '.menuPage', 'menuPage');

const about = new Div('about', 'about', '.linkContainer', '.linkContainer')
const book = new Div('book', 'book', '.linkContainer', '.linkContainer')
const contact = new Div('contact', 'contact','.linkContainer', '.linkContainer')
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
    header.me('.header').classList.toggle('slideup');
    lantern.me('.lantern').classList.toggle('grow')
})

menu.me('.menu').addEventListener('click', () => {
    loadMenu();
   
})

book.me('.book').addEventListener('click', () => {
    console.log('go book page')
    
    
    
    console.log('url("' + sushi + '");')
})

contact.me('.contact').addEventListener('click', () => {
    console.log('go contact page')
})


