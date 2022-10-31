import './style.css';
import { Div } from './CreateDiv'
import sushi from './images/sushi.jpg';
import shop from './images/shop.jpg';
import aburi from './images/aburi.png';
import crunchy from './images/crunchy.png';
import dragon from './images/dragon.png';
import eel from './images/eel.png';
import garlicponzu from './images/garlic-ponzu.png';
import godzilla from './images/godzilla.png';
import hamachi from './images/hamachi.png';
import octopus from './images/octopus.png';
import oliveshrimp from './images/oliveshrimp.png';
import AboutPage from './images/about.jpg';





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
const item1Text = new Div('item1Text', 'item1Text', '.item1', 'item1');
const item2Text = new Div('item2Text', 'item2Text', '.item2', 'item2');
const item3Text = new Div('item1Text', 'item3Text', '.item3', 'item3');
const item4Text = new Div('item1Text', 'item4Text', '.item4', 'item4');
const item5Text = new Div('item1Text', 'item5Text', '.item5', 'item5');
const item6Text = new Div('item1Text', 'item6Text', '.item6', 'item6');
const item7Text = new Div('item1Text', 'item7Text', '.item7', 'item7');
const item8Text = new Div('item1Text', 'item8Text', '.item8', 'item8');
const item9Text = new Div('item1Text', 'item9Text', '.item9', 'item9');


const about = new Div('about', 'about', '.linkContainer', '.linkContainer')
const book = new Div('book', 'book', '.linkContainer', '.linkContainer')
const contact = new Div('contact', 'contact','.linkContainer', '.linkContainer')
const lantern = new Div('lantern', 'lantern', '.header', 'header')


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
menuPage.createSelector().createDiv();
book.createSelector().createDiv();
contact.createSelector().createDiv();

item1.createSelector().createItem();
item2.createSelector().createItem();
item3.createSelector().createItem();
item4.createSelector().createItem();
item5.createSelector().createItem();
item6.createSelector().createItem();
item7.createSelector().createItem();
item8.createSelector().createItem();
item9.createSelector().createItem();



lantern.createSelector().createDiv();



menu.textContent('Menu')
about.textContent('About')
book.textContent('Book')
contact.textContent('Contact')
resName.textContent('Le Sushi')

welcomeP1.textContent('Welcome')
welcomeP2.textContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp')
welcomeBtn.textContent('Order Online')


const ItemAburi = new Image();
ItemAburi.src = aburi;

const ItemCrunchy = new Image();
ItemCrunchy.src = crunchy;

const ItemDragon = new Image();
ItemDragon.src = dragon;

const ItemEel = new Image();
ItemEel.src = eel;

const ItemGarlicPonzu = new Image();
ItemGarlicPonzu.src = garlicponzu;

const ItemGodzilla = new Image();
ItemGodzilla.src = godzilla;

const ItemHamachi = new Image();
ItemHamachi.src = hamachi;

const ItemOctopus = new Image();
ItemOctopus.src = octopus;

const ItemOliveShrimp = new Image();
ItemOliveShrimp.src = oliveshrimp;


    
   



 
item1.me('.item1').appendChild(ItemAburi);
item2.me('.item2').appendChild(ItemCrunchy);  
item3.me('.item3').appendChild(ItemDragon);
item4.me('.item4').appendChild(ItemEel); 
item5.me('.item5').appendChild(ItemGarlicPonzu);
item6.me('.item6').appendChild(ItemGodzilla);
item7.me('.item7').appendChild(ItemHamachi);
item8.me('.item8').appendChild(ItemOctopus);
item9.me('.item9').appendChild(ItemOliveShrimp);
 
   
item1Text.createSelector().createItem();
item2Text.createSelector().createItem();
item3Text.createSelector().createItem();
item4Text.createSelector().createItem();
item5Text.createSelector().createItem();
item6Text.createSelector().createItem();
item7Text.createSelector().createItem();
item8Text.createSelector().createItem();
item9Text.createSelector().createItem();
 
item1Text.textContent('Aburi')
item2Text.textContent('Crunchy Roll')
item3Text.textContent('Dragon Roll')
item4Text.textContent('Eel Nigiri')
item5Text.textContent('Garlic Ponzu Nigiri')
item6Text.textContent('Godzilla Roll')
item7Text.textContent('Hamachi Roll')
item8Text.textContent('Octopus Nigiri')
item9Text.textContent('Olive Shrimp Nigiri')

 






export function loadMenu() {
    document.body.style.backgroundImage = 'url("' + sushi + '")';
    document.body.style.backgroundSize = '100%';
    document.body.style.backgroundPositionY = '50%';
    menuPage.me('.menuPage').style.display = 'grid';
   
    
    console.log('go menu page')
    midright.me('.midright').classList.add  ('slide');

    header.me('.header').classList.toggle('slideup');
}

export function loadHome() {
    midright.me('.midright').classList.toggle('slide');
    document.body.style.backgroundImage = 'url("' + shop + '")';
    document.body.style.backgroundSize = 'contain';
    menuPage.me('.menuPage').style.display = 'none';
}

export function loadAbout() {
    document.body.style.backgroundImage = 'url("' + AboutPage + '")';
    document.body.style.backgroundSize = '100%';
    menuPage.me('.menuPage').style.display = 'none';
    header.me('.header').classList.toggle('slideup');
    lantern.me('.lantern').classList.toggle('grow')
    midright.me('.midright').classList.add('slide');
}