'use strict';

// Создать класс options:
// ·Он должен содержать свойства: height, width, bg, fontSize, textAlign
// ·Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
// ·Создать новый объект через класс
// ·Вызвать его метод и получить элемент на странице

class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    creatDiv(){
        let text = prompt('Enter your text:');

        let creatDiv = document.createElement('div');
        document.body.appendChild(creatDiv);

        creatDiv.classList.add('zzz');
        let getZzz = document.querySelector('.zzz');
        console.log(getZzz);

        getZzz.textContent = text;
        
        getZzz.style.cssText = 'height:'+this.height+'px; '+'width:'+this.width+'px; '+'background:'+this.bg+'; '+'font-size:'+this.fontSize+'px; '+'text-align:'+this.textAlign+';';
    }
}

let test = new Options(500, 300, 'blue', 30, 'center');
test.creatDiv();