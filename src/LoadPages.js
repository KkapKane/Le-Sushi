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
import reserved from './images/reserved.jpg';
import location from './images/location.jpg';




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

const bookPage = new Div('bookPage', 'bookPage', '.content', 'Content')
const nameCont = new Div('nameCont', 'nameCont', '.bookPage', 'bookPage')
const contactInfo = new Div('contactInfo', 'contactInfo', '.bookPage', 'bookPage')
const fName = new Div('fName', 'fName', '.nameCont', 'nameCont')
const lName = new Div('lName', 'lName', '.nameCont', 'nameCont')
const pNum = new Div('pNum', 'pNum', '.contactInfo', 'contactInfo')
const email = new Div('email', 'email', '.contactInfo', 'contactInfo')
const bookBtn = new Div('bookBtn', 'bookBtn', '.bookPage', 'bookPage')
const contactPage = new Div('contactPage', 'contactPage', '.content', 'content')


const about = new Div('about', 'about', '.linkContainer', '.linkContainer')
const aboutPage = new Div('aboutPage', 'aboutPage', '.content', 'content')
const aboutText = new Div('aboutText', 'aboutText', '.aboutPage', 'aboutPage')
const aboutTitle = new Div('aboutTitle', 'aboutTitle', '.aboutPage', 'aboutPage')
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
aboutPage.createSelector().createDiv();
aboutTitle.createSelector().createDiv();
aboutText.createSelector().createDiv();
bookPage.createSelector().createDiv();
nameCont.createSelector().createDiv();
contactInfo.createSelector().createDiv();
contactPage.createSelector().createDiv();
fName.createSelector().createInput();
lName.createSelector().createInput();
pNum.createSelector().createInput();
email.createSelector().createInput();
bookBtn.createSelector().createDiv();
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
welcomeP2.textContent('Lorem ipsum dolor sit amet, uis nsi u cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp')
welcomeBtn.textContent('Order Online')
aboutText.textContent('Lorem em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. ')
aboutTitle.textContent('ABOUT')
fName.me('.fName').placeholder = 'First Name'
lName.me('.lName').placeholder = 'Last Name'
email.me('.email').placeholder = 'Email'
pNum.me('.pNum').placeholder = 'Number'

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

 bookBtn.textContent('Book')

 // google map
const map = document.createElement('iframe');
map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13417249.30712358!2d140.3463282690603!3d34.8135986042674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sus!4v1667267476710!5m2!1sen!2sus";
map.width = '600px';
map.height = '400px';
contactPage.me('.contactPage').appendChild(map);
const contactNum = document.createElement('div')
contactNum.classList.add('contactNum')
contactPage.me('.contactPage').appendChild(contactNum)

contactNum.textContent = 'Contact Number: 123-123-123'



export function loadMenu() {
    middle.me('.middle').style.display = 'flex';
    document.body.style.backgroundImage = 'url("' + sushi + '")';
    document.body.style.backgroundSize = '100%';
    document.body.style.backgroundPositionY = '50%';
    menuPage.me('.menuPage').style.display = 'grid';
    aboutPage.me('.aboutPage').style.display = 'none';
    lantern.me('.lantern').style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(262deg)brightness(104%) contrast(102%)'
    console.log('go menu page')
    midright.me('.midright').classList.add  ('slide');
    bookPage.me('.bookPage').style.display = 'none';
    header.me('.header').classList.toggle('slideup');
}

export function loadHome() {
    contactPage.me('.contactPage').style.display = 'none';
    map.style.display = 'none';
    bookPage.me('.bookPage').style.display = 'none';
    middle.me('.middle').style.display = 'flex';
    midright.me('.midright').classList.toggle('slide');
    document.body.style.backgroundImage = 'url("' + shop + '")';
    document.body.style.backgroundSize = 'contain';
    menuPage.me('.menuPage').style.display = 'none';
    aboutPage.me('.aboutPage').style.display = 'none';
    lantern.me('.lantern').style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(262deg)brightness(104%) contrast(102%)'
}

export function loadAbout() {
    contactPage.me('.contactPage').style.display = 'none';
    map.style.display = 'none';
    bookPage.me('.bookPage').style.display = 'none';
    middle.me('.middle').style.display = 'flex';
    document.body.style.backgroundImage = 'url("' + AboutPage + '")';
    document.body.style.backgroundSize = '100%';
    menuPage.me('.menuPage').style.display = 'none';
    header.me('.header').classList.toggle('slideup');
    lantern.me('.lantern').classList.toggle('grow')
    midright.me('.midright').classList.add('slide');
    aboutPage.me('.aboutPage').style.display = 'flex';
    lantern.me('.lantern').style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(262deg)brightness(104%) contrast(102%)'
}

export function Lantern() {
    header.me('.header').classList.toggle('slideup');
    lantern.me('.lantern').classList.toggle('grow')
    
}

export function loadBook() {
    contactPage.me('.contactPage').style.display = 'none';
    map.style.display = 'none';
    bookPage.me('.bookPage').style.display = 'flex';
    midright.me('.midright').classList.add('slide');
    aboutPage.me('.aboutPage').style.display = 'none';
    document.body.style.backgroundImage = 'url("' + reserved + '")';
    document.body.style.backgroundSize = '100%';
    document.body.style.backgroundPositionY = '60%';
    menuPage.me('.menuPage').style.display = 'none';
    middle.me('.middle').style.display = 'none';
    lantern.me('.lantern').style.filter = 'invert(0%) sepia(96%) saturate(17%) hue-rotate(288deg) brightness(104%) contrast(104%)';
}

export function loadContact() {
    bookPage.me('.bookPage').style.display = 'none';
    middle.me('.middle').style.display = 'none';
    document.body.style.backgroundImage = 'url("' + location + '")';
    document.body.style.backgroundSize = '100%';
    document.body.style.backgroundPositionY = '60%';
    menuPage.me('.menuPage').style.display = 'none';
    header.me('.header').classList.toggle('slideup');
    lantern.me('.lantern').classList.toggle('grow')
    midright.me('.midright').classList.add('slide');
    aboutPage.me('.aboutPage').style.display = 'none';
    lantern.me('.lantern').style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(262deg)brightness(104%) contrast(102%)'
    contactPage.me('.contactPage').style.display = 'flex';
    map.style.display = 'flex';

}