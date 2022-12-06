let list = "";
let card =
    "<div class='blog' id='blog'><img src='./images/blog.imgs/crane.png' alt='crane'><p class='title'>Аренда автокрана LIEBHERR LTM 1160 в Москве</p><p class='subtitle'>Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные <br> краны от легкой до тяжелой категории.</p><a class='more' id='more' href='./blog2.html'>Подробнее</a></div>";

for (i = 1; i <= 9; i++) {
    list += card;
}
document.getElementById("root").innerHTML = list