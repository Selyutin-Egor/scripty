/**
 * Created by Selyutin Egor on 24.12.2017.
 */
'use strict';
function $(selector) {
    return document.querySelectorAll(selector);
}


(function () {
    let o = Object.prototype, obj_count, el_classList, search_class, class_count, i, j, s, pn, t, clone;
    if(!o.hasClass)
    o.hasClass = function (Class) {
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return; //искать либо нечего, либо не в чем
        search_class = Class.split(' '); // получаем список искомых классов
        class_count = search_class.length; // получаем количество искомых классов

        for (let i=obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента
            for (let j=class_count; j--;)
                if(!el_classList.contains(search_class[j])) return; //если хоть один элемент не содержит хоть один искомый класс - возвращаем false
        }
        return true;
    };
    if(!o.addClass)
    o.addClass = function (Class) {
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return;// добавлять либо нечего, либо не во что
        search_class = Class.split(' '); // получаем список искомых к добавлению классов
        class_count = search_class.length; // получаем количество искомых к добавлению классов

        for (let i=obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента
            for (let j=class_count; j--;)
            {
                search_class = search_class[j];
                if (!el_classList.contains(search_class)) el_classList.add(search_class); // добавляем классы
            }
        }
//        return this;
    };
    if(!o.removeClass)
    o.removeClass = function (Class) {
        if ((!(obj_count = this.length))||(!(Class.trim().length))) return; // удалять либо нечего, либо не в чем
        search_class = Class.split(' '); // получаем список искомых для удаления классов
        class_count = search_class.length; // получаем количество искомых для удаления классов

        for (let i=obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента
            for (let j=class_count; j--;)
            {
                search_class = search_class[j];
                if (el_classList.contains(search_class)) el_classList.remove(search_class); // удаляем классы
            }
        }
//        return this;
    };
    if(!o.toggleClass)
    o.toggleClass = function (Class) {
        if ((!(obj_count = this.length)) || (!(Class.trim().length))) return; // переключать либо нечего, либо не в чем
        search_class = Class.split(' '); // получаем список переключаемых классов
        class_count = search_class.length; // получаем количество переключаемых классов

        for (let i=obj_count; i--;)
        {
            el_classList = (this[i].classList); // получаем список классов i-го элемента
            for (let j=class_count; j--;)
                el_classList.toggle(search_class[j]); // переключаем классы
        }
//        return this;
    };
    if(!o.fadeOut)
    o.fadeOut = function(duration, delay) {
         if (!(obj_count = this.length)) return; // скрывать нечего
         duration = (typeof duration !=='undefined' ? duration : 300);
         delay = (typeof delay !=='undefined' ? delay : 0);

         for (let i=obj_count; i--;)
         {
             s = this[i].style;
             s.opacity = 0;
             s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
         }
    };
    if(!o.fadeIn)
    o.fadeIn = function(duration, delay) {
         if (!(obj_count = this.length)) return; // показывать нечего
         duration = (typeof duration !=='undefined' ? duration : 300);
         delay = (typeof delay !=='undefined' ? delay : 0);

         for (let i=obj_count; i--;)
         {
             s = this[i].style;
             s.opacity = 1;
             s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
         }
    };
    if(!o.rotate)
    o.rotate = function(angle, duration, delay) {
        if (!(obj_count = this.length)) return; // вращать нечего
        angle = (typeof angle !=='undefined' ? angle : -90);
        duration = (typeof duration !=='undefined' ? duration : 300);
        delay = (typeof delay !=='undefined' ? delay : 0);

        for (let i=obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'rotate(' + angle + 'deg)';
        }
    };
    if(!o.rotateX)
    o.rotateX = function(angle, duration, delay) {
        if (!(obj_count = this.length)) return; // вращать нечего
        angle = (typeof angle !=='undefined' ? angle : -90);
        duration = (typeof duration !=='undefined' ? duration : 300);
        delay = (typeof delay !=='undefined' ? delay : 0);

        for (let i=obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'rotateX(' + angle + 'deg)';
        }
    };
    if(!o.rotateY)
    o.rotateY = function(angle, duration, delay) {
        if (!(obj_count = this.length)) return; // вращать нечего
        angle = (typeof angle !=='undefined' ? angle : -90);
        duration = (typeof duration !=='undefined' ? duration : 300);
        delay = (typeof delay !=='undefined' ? delay : 0);

        for (let i=obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = `rotateY(${angle}deg)`;
        }
    };
    if(!o.scale)
    o.scale = function(coeff, duration, delay) {
        if (!(obj_count = this.length)) return; // масштабировать нечего
        coeff = (typeof coeff !=='undefined' ? coeff : 1.2);
        duration = (typeof duration !=='undefined' ? duration : 300);
        delay = (typeof delay !=='undefined' ? delay : 0);

        for (let i=obj_count; i--;)
        {
            s = this[i].style;
            s.transition = 'all ' + duration + 'ms ease-in-out ' + delay + 'ms';
            s.transform = 'scale(' + coeff + ')';
        }
    };
    if(!o.remove)
    o.remove = function() {
        if (!(obj_count = this.length)) return; // нет объекта для удаления

        for (let i=obj_count; i--;)
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
    };
    if(!o.removeParent)
    o.removeParent = function() {
        if (!(obj_count = this.length)) return; // нет объекта для удаления родителя

        for (let i=obj_count; i--;)
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
    };
    if(!o.insertBefore)
    o.insertBefore = function(element) {
        if (!(obj_count = this.length)) return; // нет объекта, перед которым вставлять

        for (let i=obj_count; i--;)
        {
            try {
                t = this[i];
                pn = t.parentNode;
                clone = element.cloneNode(true); //делаем копию добавляемого узла
//(браузер после первой вставки удаляет элемент)
                pn.insertBefore(clone, t);
            }
            catch(e)
            {
                console.log(e.message);
            }
        }
    }

}).call($.prototype);