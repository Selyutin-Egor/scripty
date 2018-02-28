/**
 * Created by Selyutin Egor on 26.12.2017.
 */
'use strict';
function $(selector) {
    return document.querySelectorAll(selector);
}

(function () {
    let o = Object.prototype, obj_count, el_classList, search_class, thisClass, class_count, i, j, s, pn, t, clone, obj,
    defValue = {
       	duration: 300,
        delay: 0,
        angle: -90,
        coeff: 1.2,
        blurSize: 2,
        styleName: 'scriptyStyle'
    };

    o.hasClass||(o.hasClass = function (Class) {
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return; //искать либо нечего, либо не в чем
        search_class = Class.split(' '); // получаем список искомых классов
        class_count = search_class.length; // получаем количество искомых классов

        for (i = obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента
            for (j = class_count; j--;)
                if(!el_classList.contains(search_class[j])) return; //если хоть один элемент не содержит хоть один искомый класс - возвращаем false
        }
        return true;
    });

    o.addClass||(o.addClass = function (Class) {
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return;// добавлять либо нечего, либо не во что
        search_class = Class.split(' '); // получаем список искомых к добавлению классов
        class_count = search_class.length; // получаем количество искомых к добавлению классов

        for (i = obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента
            for (j = class_count; j--;)
            {
                thisClass = search_class[j];
                if (!el_classList.contains(thisClass)) el_classList.add(thisClass); // добавляем классы
            }
        }
//        return this;
    });

    o.removeClass||(o.removeClass = function (Class) {
        if ((!(obj_count = this.length))||(!(Class.trim().length))) return; // удалять либо нечего, либо не в чем
        search_class = Class.split(' '); // получаем список искомых для удаления классов
        class_count = search_class.length; // получаем количество искомых для удаления классов

        for (i = obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента
            for (j = class_count; j--;)
            {
                thisClass = search_class[j];
                if (el_classList.contains(thisClass)) el_classList.remove(thisClass); // удаляем классы
            }
        }
//        return this;
    });

    o.toggleClass||(o.toggleClass = function (Class) {
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return; // переключать либо нечего, либо не в чем
        search_class = Class.split(' '); // получаем список переключаемых классов
        class_count = search_class.length; // получаем количество переключаемых классов

        for (i = obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента
            for (j = class_count; j--;)
                el_classList.toggle(search_class[j]); // переключаем классы
        }
//        return this;
    });

    o.fadeOut||(o.fadeOut = function(duration = defValue.duration, delay = defValue.delay) {
         if (!(obj_count = this.length)) return; // скрывать нечего

         for (i = obj_count; i--;)
         {
             s = this[i].style;
             s.opacity = 0;
             s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
         }
    });

    o.fadeIn||(o.fadeIn = function(duration = defValue.duration, delay = defValue.delay) {
         if (!(obj_count = this.length)) return; // показывать нечего

         for (i = obj_count; i--;)
         {
             s = this[i].style;
             s.opacity = 1;
             s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
         }
    });

    o.rotate||(o.rotate = function(angle = defValue.angle, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // вращать нечего

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'rotate(' + angle + 'deg)';
        }
    });

    o.rotateX||(o.rotateX = function(angle = defValue.angle, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // вращать нечего

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'rotateX(' + angle + 'deg)';
        }
    });

    o.rotateY||(o.rotateY = function(angle = defValue.angle, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // вращать нечего

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'rotateY(' + angle + 'deg)';
        }
    });

    o.scale||(o.scale = function(coeff = defValue.coeff, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // масштабировать нечего

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'scale(' + coeff + ')';
        }
    });

    o.blur||(o.blur = function(blurSize = defValue.blurSize, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // масштабировать нечего

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.filter = 'blur(' + blurSize + 'px)';
        }
    });

    o.remove||(o.remove = function() {
        if (!(obj_count = this.length)) return; // нет объекта для удаления

        for (i = obj_count; i--;)
        {
            try {
                pn = this[i];
                pn.parentNode.removeChild(pn);
            }
            catch(e)
            {
                console.log(e.message);
            }
        }
    });

    o.removeParent||(o.removeParent = function() {
        if (!(obj_count = this.length)) return; // нет объекта для удаления родителя

        for (i = obj_count; i--;)
        {
            try {
                pn = this[i].parentNode;
                pn.parentNode.removeChild(pn);
            }
            catch(e)
            {
                console.log(e.message);
            }
        }
    });

    o.insertBefore||(o.insertBefore = function(element) {
        if (!(obj_count = this.length)) return; // нет объекта, перед которым вставлять

        for (i = obj_count; i--;)
        {
            try {
                t = this[i];
                pn = t.parentNode;
                clone = element.cloneNode(true); //делаем копию добавляемого узла
// (браузер после первой вставки удаляет элемент)
                pn.insertBefore(clone, t);
            }
            catch(e)
            {
                console.log(e.message);
            }
        }
    });

    o.replaceClass||(o.replaceClass = function(oldClass, newClass) {
        if (!(obj_count = this.length)) return; // нет объектов, у которых менять классы
        for (i = obj_count; i--;)
        {
            this.removeClass(oldClass);
            this.addClass(newClass);
        }
    });

    function createStyle(styleName = defValue.styleName) {
        // создаем тег style для вспомогательных стилей (нужны для slideUp и slideDown)
        if (document.getElementById(styleName)) return;
        let styleTag = document.createElement("style");
        styleTag.id = styleName;
        document.head.appendChild(styleTag);
        styleTag.innerHTML = 'button {color: green;} .scriptyDisplayInherit {display: inherit !important;} .scriptyDisplayNone {display: none !important;} .scriptyTrans {transition: all ' + defValue.duration + 'ms ease-in-out ' + defValue.delay + 'ms;} .scriptyHidden {height:0; margin-top: 0 !important; margin-bottom: 0 !important; padding-top: 0 !important; padding-bottom: 0 !important;}';
    };

    function getPropertyValue(element, propertyName) {
        return window.getComputedStyle(element, null).getPropertyValue(propertyName);
    };


    o.slideUp||(o.slideUp = function(duration = defValue.duration, delay = defValue.delay) {
    let objCount;
        if (!(objCount = this.length)) return; // нет объектов для применения

        createStyle(); // создаем (если его нет) тег style со стилями для наших SlideUp и SlideDown

        for (obj = objCount; obj--;)
        {
            if (getPropertyValue(this[obj], 'display') === 'none') continue; // скрытые - пропускаем

            s = this[obj].style;
            s.transitionDuration = duration + 'ms';
            s.transitionDelay = delay + 'ms';
// Присваиваем трансформации свойства, с которыми ей предстоит выполниться,
// поскольку обратная трансформация могла быть вызвана с другими duration и delay

            if (this.hasClass('scriptyDisplayInherit')) // Если объект был показан нашим методом
                {
                this.addClass('scriptyHidden'); // Добавляем класс "нулевой высоты"
                this.removeClass('scriptyDisplayNone'); // Удаляем класс "невидимости"
// Корректируем классы для видимости (с нулевой высотой) и последующей трансформации.
// Это повлечет выполнение transition.

                setTimeout((function() // После того, как transition отработал, удаляем ранее добавленные классы
                {
                    this.removeClass('scriptyDisplayInherit scriptyTrans scriptyHidden');
                    }).bind(this), duration);
                }
                else // Если объект был показан изначально стилями пользователя
                    {
                        this.addClass('scriptyTrans scriptyHidden');
 // Добавляем класс для "нулевой высоты" и трансформации. Это повлечет выполнение transition.

                        setTimeout((function() { // После того, как transition отработал, удаляем ранее добавленные классы
                            this.addClass('scriptyDisplayNone'); // Добавляем класс "невидимости"
                            }).bind(this), duration);

                    }
        }
    });

    o.slideDown||(o.slideDown = function(duration = defValue.duration, delay = defValue.delay) {
    let objCount;
        if (!(objCount = this.length)) return; // нет объектов для применения
        createStyle(); // Создаем (если его нет) тег style со стилями для наших SlideUp и SlideDown

        for (obj = objCount; obj--;)
        {
        if (getPropertyValue(this[obj], 'display') !== 'none') continue; // Раскрытые - пропускаем

        s = this[obj].style;
        s.transitionDuration = duration + 'ms';
        s.transitionDelay = delay + 'ms';
// Присваиваем трансформации свойства, с которыми ей предстоит выполниться,
// поскольку обратная трансформация могла быть вызвана с другими duration и delay

        if (this.hasClass('scriptyHidden')) // Если объект был скрыт нашим методом
            {
            this.removeClass('scriptyDisplayNone'); // Удаляем класс "невидимости"

            setTimeout((function() { // После того, как класс "невидимости" удален -
                this.removeClass('scriptyHidden'); // удаляем класс "нулевой высоты". Это повлечет выполнение transition.
                }).bind(this), 10);

            setTimeout((function() { // После того, как transition отработал, удаляем его класс
                this.removeClass('scriptyTrans');
                }).bind(this), duration);
            }
            else // Если объект был скрыт изначально стилями пользователя
                {
                    this.addClass('scriptyDisplayInherit scriptyTrans scriptyHidden');
 // Добавляем классы для видимости (с нулевой высотой) и последующей трансформации

                    setTimeout((function() {// После того, как классы добавлены -
                        this.removeClass('scriptyHidden'); // удаляем класс "нулевой высоты". Это повлечет выполнение transition.
                        }).bind(this), 10);
                }
        }
    });


}).call($);