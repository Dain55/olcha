let btn = document.querySelector("[data-open]");
let modalBg = document.querySelector(".modal-deals");
let close = document.querySelector(".x-btn");

btn.onclick = () => {
  modalBg.classList.add("modal-active");
  close.classList.add("modal-close-active");
};
close.onclick = () => {
  modalBg.classList.remove("modal-active");
  modalBg.classList.remove("modal-close-active");
};
///////////////////element 1//////////////////////////////////////
let body = document.body;

let div_container = document.createElement("div");
let div_box1 = document.createElement("div");
let img = document.createElement("img");
let p = document.createElement("p");
let h2 = document.createElement("h2");
let button = document.createElement("button");
let btn_shop = document.createElement('button')

div_container.classList.add("box-element");
div_box1.classList.add("box-phone_element");
img.classList.add('img_element')
p.classList.add('text-element')
h2.classList.add('text-h2-element')
button.classList.add('bth-yelloy-element')
btn_shop.classList.add('btn-shop-red')



img.src ="https://olcha.uz/image/220x220/products/upSEKotOdwChju0pOrLgAhQ2Ey7CVllO13FOvL1jAWVLknBnhuQZQG6aJWKV.jpeg";

p.innerHTML = 'Смартфон Realme GT Master Edition 5G'
h2.innerHTML = '3 960 000 сум'
button.innerHTML = '330 000 сум x 12 мес'
btn_shop.innerHTML ='В рассрочку'


body.append(div_container);
div_container.append(div_box1);
div_box1.append(img,p,h2,btn_shop);
h2.append(button)
//////////////////////element 2///////////////////////////////////// 


let div_box2 = document.createElement('div')
let img_mi = document.createElement('img')
let h2_mi = document.createElement('h2')
let p_mi = document.createElement('p')
let button_mi = document.createElement('button')
let btn_shop_mi = document.createElement('button')
img_mi.src = 'https://olcha.uz/image/220x220/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.'

div_box2.classList.add('box-phone_element')
img_mi.classList.add('img_element')
p_mi.classList.add('text-element')
h2_mi.classList.add('text-h2-element')
button_mi.classList.add('bth-yelloy-element')
btn_shop_mi.classList.add('btn-shop-red')

p_mi.innerHTML = 'Смартфон Xiaomi Redmi Note 11 Pro 128GB 8 GB'
h2_mi.innerHTML = '3 119 000 сум'
button_mi.innerHTML = '337 000 сум x 12 мес'
btn_shop_mi.innerHTML ='В рассрочку'

div_container.append(div_box2)
div_box2.append(img_mi,p_mi,h2_mi,btn_shop_mi)
h2_mi.append(button_mi)

/////////////////////element 3////////////////////////////////////

let div_box3 = document.createElement('div')
let img_mi2 = document.createElement('img')
let h2_mi2 = document.createElement('h2')
let p_mi2 = document.createElement('p')
let button_mi2 = document.createElement('button')
let btn_shop_mi2 = document.createElement('button')
img_mi2.src = 'https://olcha.uz/image/220x220/products/Q25xwR9W7nPpnHwKTdWcPs0yHQPLLG9u1z6P5Z88f8RePUN8hUCJbkQo7ipz.jpeg'

div_box3.classList.add('box-phone_element')
img_mi2.classList.add('img_element')
p_mi2.classList.add('text-element')
h2_mi2.classList.add('text-h2-element')
button_mi2.classList.add('bth-yelloy-element')
btn_shop_mi2.classList.add('btn-shop-red')

p_mi2.innerHTML = 'Смартфон Xiaomi Redmi Note 11 6 GB 128GB'
h2_mi2.innerHTML = '2 441 000 сум'
button_mi2.innerHTML = '264 000 сум x 12 мес'
btn_shop_mi2.innerHTML ='В рассрочку'

div_container.append(div_box3)
div_box3.append(img_mi2,p_mi2,h2_mi2,btn_shop_mi2)
h2_mi2.append(button_mi2)


/////////////////element 4 ///////////////////////////////////

let div_box4 = document.createElement('div')
let img_watch = document.createElement('img')
let h2_watch = document.createElement('h2')
let p_watch = document.createElement('p')
let button_watch = document.createElement('button')
let btn_shop_watch = document.createElement('button')
img_watch.src = 'https://olcha.uz/image/220x220/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png'

div_box4.classList.add('box-phone_element')
img_watch.classList.add('img_element')
p_watch.classList.add('text-element')
h2_watch.classList.add('text-h2-element')
button_watch.classList.add('bth-yelloy-element')
btn_shop_watch.classList.add('btn-shop-red')

p_watch.innerHTML = 'Смартфон Xiaomi Redmi Note 11 6 GB 128GB'
h2_watch.innerHTML = '2 429 000 сум'
button_watch.innerHTML = '263 000 сум x 12 мес'
btn_shop_watch.innerHTML ='В рассрочку'

div_container.append(div_box4)
div_box4.append(img_watch,p_watch,h2_watch,btn_shop_watch)
h2_watch.append(button_watch)
