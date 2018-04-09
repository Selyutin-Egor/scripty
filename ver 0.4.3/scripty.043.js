/**
 * Created by Selyutin Egor on 26.12.2017.
 */
'use strict';
let $ = (selector) => document.querySelectorAll(selector);

(function() {
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
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return; //искать либо нечего, либо не в чем // it is nothing to find or there is nothing to look for
        search_class = Class.split(' '); // получаем список искомых классов // get the list of required classes
        class_count = search_class.length; // получаем количество искомых классов // get the number of required classes

        for (i = obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента // get the list of classes of the i-th element
            for (j = class_count; j--;)
                if(!el_classList.contains(search_class[j])) return; // если хоть один элемент не содержит хоть один искомый класс - возвращаем false // if at least one element does not contain at least one desired class - return false
        }
        return true;
    });

    o.addClass||(o.addClass = function (Class) {
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return; // добавлять либо нечего, либо не во что // it is nothing to add or there is nothing to add in
        search_class = Class.split(' '); // получаем список искомых к добавлению классов // get the list of classes you want to add
        class_count = search_class.length; // получаем количество искомых к добавлению классов // get the number of classes you want to add

        for (i = obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента // get the list of classes of the i-th element
            for (j = class_count; j--;)
            {
                thisClass = search_class[j];
                if (!el_classList.contains(thisClass)) el_classList.add(thisClass); // добавляем классы // add classes
            }
        }
    });

    o.removeClass||(o.removeClass = function (Class) {
        if ((!(obj_count = this.length))||(!(Class.trim().length))) return; // удалять либо нечего, либо не в чем // it is nothing to remove or there is nothing to remove from
        search_class = Class.split(' '); // получаем список искомых для удаления классов // get the list of classes to remove
        class_count = search_class.length; // получаем количество искомых для удаления классов // get the number of classes you want to remove

        for (i = obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента // get the list of classes of the i-th element
            for (j = class_count; j--;)
            {
                thisClass = search_class[j];
                if (el_classList.contains(thisClass)) el_classList.remove(thisClass); // удаляем классы // remove classes
            }
        }
    });

    o.toggleClass||(o.toggleClass = function (Class) {
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return; // переключать либо нечего, либо не в чем // it is nothing to toggle, or nothing to toggle in
        search_class = Class.split(' '); // получаем список переключаемых классов // get the list of toggleable classes
        class_count = search_class.length; // получаем количество переключаемых классов // get the number of toggleable classes

        for (i = obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента // get the list of classes of the i-th element
            for (j = class_count; j--;)
                el_classList.toggle(search_class[j]); // переключаем классы // toggle classes
        }
    });

    o.fadeOut||(o.fadeOut = function(duration = defValue.duration, delay = defValue.delay) {
         if (!(obj_count = this.length)) return; // скрывать нечего // nothing to fade out

         for (i = obj_count; i--;)
         {
             s = this[i].style;
             s.opacity = 0;
             s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
         }
    });

    o.fadeIn||(o.fadeIn = function(duration = defValue.duration, delay = defValue.delay) {
         if (!(obj_count = this.length)) return; // показывать нечего // nothing to fade in

         for (i = obj_count; i--;)
         {
             s = this[i].style;
             s.opacity = 1;
             s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
         }
    });

    o.rotate||(o.rotate = function(angle = defValue.angle, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // вращать нечего // nothing to rotate

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'rotate(' + angle + 'deg)';
        }
    });

    o.rotateX||(o.rotateX = function(angle = defValue.angle, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // вращать нечего // nothing to rotate

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'rotateX(' + angle + 'deg)';
        }
    });

    o.rotateY||(o.rotateY = function(angle = defValue.angle, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // вращать нечего // nothing to rotate

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'rotateY(' + angle + 'deg)';
        }
    });

    o.scale||(o.scale = function(coeff = defValue.coeff, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // масштабировать нечего // nothing to scale

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'scale(' + coeff + ')';
        }
    });

    o.blur||(o.blur = function(blurSize = defValue.blurSize, duration = defValue.duration, delay = defValue.delay) {
        if (!(obj_count = this.length)) return; // размывать нечего // nothing to blur

        for (i = obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.filter = 'blur(' + blurSize + 'px)';
        }
    });

    o.remove||(o.remove = function() {
        if (!(obj_count = this.length)) return; // нет объекта для удаления // nothing to remove

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
        if (!(obj_count = this.length)) return; // нет объекта для удаления родителя // there is no object to remove parent

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
        if (!(obj_count = this.length)) return; // нет объекта, перед которым вставлять // there is no object to insert before

        for (i = obj_count; i--;)
        {
            try {
                t = this[i];
                pn = t.parentNode;
                clone = element.cloneNode(true); // делаем копию добавляемого узла // make a copy of the added node
// (браузер после первой вставки удаляет элемент) // (the browser removes the element after the first insert)
                pn.insertBefore(clone, t);
            }
            catch(e)
            {
                console.log(e.message);
            }
        }
    });

    o.replaceClass||(o.replaceClass = function(oldClass, newClass) {
        if (!(obj_count = this.length)) return; // нет объектов, у которых менять классы // there is no object to replace class
        for (i = obj_count; i--;)
        {
            this.removeClass(oldClass);
            this.addClass(newClass);
        }
    });

    let createStyle = (styleName = defValue.styleName) => {
        // создаем тег style для вспомогательных стилей (нужны для slideUp и slideDown)
        // create a style tag for auxiliary styles (needed for slideUp and slideDown)
        if (document.getElementById(styleName)) return;
        let styleTag = document.createElement("style");
        styleTag.id = styleName;
        document.head.appendChild(styleTag);
        styleTag.innerHTML = '.scriptyDisplayInherit {display: inherit !important;} .scriptyDisplayNone {display: none !important;} .scriptyTrans {transition: all ' + defValue.duration + 'ms ease-in-out ' + defValue.delay + 'ms;} .scriptyHidden {height:0; margin-top: 0 !important; margin-bottom: 0 !important; padding-top: 0 !important; padding-bottom: 0 !important;}';
    };

    let getPropertyValue = (element, propertyName) => getComputedStyle(element, null).getPropertyValue(propertyName);

    o.slideUp||(o.slideUp = function(duration = defValue.duration, delay = defValue.delay) {
    let objCount;
        if (!(objCount = this.length)) return; // нет объектов для применения // there are no objects to apply

        createStyle(); // создаем (если его нет) тег style со стилями для наших SlideUp и SlideDown // create (if it is not exist) a style tag with styles for our SlideUp and SlideDown

        for (obj = objCount; obj--;)
        {
            if (getPropertyValue(this[obj], 'display') === 'none') continue; // скрытые - пропускаем // skip hidden objects

            s = this[obj].style;
            s.transitionDuration = duration + 'ms';
            s.transitionDelay = delay + 'ms';
// Присваиваем трансформации свойства, с которыми ей предстоит выполниться,
// поскольку обратная трансформация могла быть вызвана с другими duration и delay
// Assign the property transformations with which it is to be executed,
// because the inverse transformation could be called with other duration and delay

            if (this.hasClass('scriptyDisplayInherit')) // Если объект был показан нашим методом // If the object was shown by our method
                {
                this.addClass('scriptyHidden'); // Добавляем класс "нулевой высоты" // Add class with "height: 0"
                this.removeClass('scriptyDisplayNone'); // Удаляем класс "невидимости" // Remove class with "display: none"
// Корректируем классы для видимости (с нулевой высотой) и последующей трансформации.
// Это повлечет выполнение transition.
// Correct the classes for visibility (with zero height) and the subsequent transformation.
// This entails the execution of the transition.


// После того, как transition отработал, удаляем ранее добавленные классы
// After the transition has completed, we delete previously added classes
                setTimeout(() => {
                    this.removeClass('scriptyDisplayInherit scriptyTrans scriptyHidden');
                    }, duration);
                }
                else // Если объект был показан изначально стилями пользователя // If the object was originally shown by user styles
                    {
                        this.addClass('scriptyTrans scriptyHidden');
 // Добавляем класс для "нулевой высоты" и трансформации. Это повлечет выполнение transition.
 // Add a class for "zero height" and transformations. This entails the execution of the transition.

                        setTimeout(() => { // После того, как transition отработал, удаляем ранее добавленные классы // After the transition has completed, we delete previously added classes
                            this.addClass('scriptyDisplayNone'); // Добавляем класс "невидимости" // Add class with "display: none"
                            }, duration);

                    }
        };
    });

    o.slideDown||(o.slideDown = function(duration = defValue.duration, delay = defValue.delay) {
    let objCount;
        if (!(objCount = this.length)) return; // нет объектов для применения // there are no objects to apply
        createStyle(); // Создаем (если его нет) тег style со стилями для наших SlideUp и SlideDown // Create (if it is not exist) a style tag with styles for our SlideUp and SlideDown

        for (obj = objCount; obj--;)
        {
        if (getPropertyValue(this[obj], 'display') !== 'none') continue; // Раскрытые - пропускаем // Skip displayed objects

        s = this[obj].style;
        s.transitionDuration = duration + 'ms';
        s.transitionDelay = delay + 'ms';
// Присваиваем трансформации свойства, с которыми ей предстоит выполниться,
// поскольку обратная трансформация могла быть вызвана с другими duration и delay
// Assign the property transformations with which it is to be executed,
// because the inverse transformation could be called with other duration and delay

        if (this.hasClass('scriptyHidden')) // Если объект был скрыт нашим методом // If the object was hidden by our method
            {
            this.removeClass('scriptyDisplayNone'); // Удаляем класс "невидимости" // Remove class with "display: none"

            setTimeout(() => { // После того, как класс "невидимости" удален - // After the "invisibility" class is deleted -
                this.removeClass('scriptyHidden'); // Удаляем класс "нулевой высоты". Это повлечет выполнение transition. // Remove a class with "zero height". This entails the execution of the transition.
                }, 10);

            setTimeout(() => { // После того, как transition отработал, удаляем его класс // After the transition has completed, we delete its class
                this.removeClass('scriptyTrans');
                }, duration);
            }
            else // Если объект был скрыт изначально стилями пользователя // If the object was originally hidden by user styles
                {
                    this.addClass('scriptyDisplayInherit scriptyTrans scriptyHidden');
 // Добавляем классы для видимости (с нулевой высотой) и последующей трансформации
 // Add classes for visibility (with zero height) and for subsequent transformation

                    setTimeout(() => {// После того, как классы добавлены - // After the classes are added -
                        this.removeClass('scriptyHidden'); // удаляем класс "нулевой высоты". Это повлечет выполнение transition. // Remove a class with "zero height". This entails the execution of the transition.
                        }, 10);
                }
        }
    });


}).call($);


// Везде вместо // Instead of
// setTimeout((function() {
// this.removeClass('scriptyHidden');
// }).bind(this), 10);

//пишем //write

// setTimeout(() => {
// this.removeClass('scriptyHidden');
// }, 10);