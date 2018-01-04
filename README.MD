# Scripty – lightweight and fast Javascript library.

Scripty is library wich have jQuery-like syntax, including a lot of useful methods, more faster than jQuery.

## How to get your own Scripty

Clone a copy of the main Scripty git repo by running:
```
git clone git://github.com/Selyutin-Egor/scripty.git
```

## Browser support
  - Internet Explorer 10+

  - All modern browsers

## Methods description
Function $(selector) returns NodeList collection by document.querySelectorAll(selector). ```All CSS-rules are allowed.```

#### hasClass method
Applying NodeList.hasClass(Class) returns true if every element of NodeList collection has this Class, else returns false.

``` Examples:```
```
if ($('div').hasClass('box')) //… do something;
if ($('.menu').hasClass('box')) //… do something;
```

#### addClass method
Applying NodeList.addClass(Class) adds class Class (if it hasn’t yet) to every element of NodeList collection.

``` Examples:```
```
$('div').addClass('box');
$('.menu').addClass('box');
```

#### removeClass method
Applying NodeList.removeClass(Class) removes class Class (if it has) from every element of NodeList collection.

``` Examples:```
```
$('div').removeClass('box');
$('#menu').removeClass('box');
```

#### toggleClass method
Applying NodeList.toggleClass(Class) toggles class Class from every element of NodeList collection.

``` Examples:```
```
$('div').toggleClass('red');
$('#menu').toggleClass('red');
```

#### replaceClass method
Applying NodeList.replaceClass(oldClass, newClass) removes class oldClass and adds class newClass to every element of NodeList collection.

``` Examples:```
```
$('div').replaceClass('round', 'box'); // Removes class 'round' and adds class 'box' to all div’s.
$('.menu').replaceClass('yellow', 'green'); // Removes class 'yellow' and adds class 'green' to all elements which have class “menu”
```

#### fadeOut method 
Applying NodeList.fadeOut(duration, delay) fadeouts every element of NodeList collection during the first argument “duration” (ms) with delay accordingly the second argument “delay” (ms). Both arguments are not required: default value “duration” is 300, default value “delay” is 0.

``` Examples:```
```
$('ul li').fadeOut();
$('div').fadeOut(700, 2000); // All div’s will fadeouts slowly (during the 700 ms) after 2 seconds.
```

#### fadeIn method 
Applying NodeList.fadeIn(duration, delay) fadeins every element of NodeList collection during the first argument “duration” (ms) with delay accordingly the second argument “delay” (ms). Both arguments are not required: default value “duration” is 300, default value “delay” is 0.

``` Examples:```
```
$('ul li').fadeIn();
$('div').fadeIn(700, 2000); // All div’s will fadeins slowly (during the 700 ms) after 2 seconds.
```

#### rotate method 
Applying NodeList.rotate(angle, duration, delay) rotates every element of NodeList collection at an “angle” (degrees) during the second argument “duration” (ms) with delay accordingly the third argument “delay” (ms). All arguments are not required: default value “angle” is -90 (minus 90)(counter-clockwise), default value “duration” is 300, default value “delay” is 0.

``` Examples:```
```
$('div').rotate(); // All div’s rotates counterclock-wise at 90 degrees during the 300 ms after 0 ms.
$('#btn-logo').rotate(360, 700, 700); // #btn-logo rotates counter-clockwise at 360 deg during the 700 ms after 700 ms.
```

#### rotateX method 
Applying NodeList.rotateX(angle, duration, delay) rotates every element of NodeList collection **around the abscissa (horizontal axis)** at an “angle” (degrees) during the second argument “duration” (ms) with delay accordingly the third argument “delay” (ms). All arguments are not required: default value “angle” is 360, default value “duration” is 300, default value “delay” is 0.

``` Examples:```
```
$('div').rotateX(); // All div’s rotates around the abscissa (horizontal axis) at 360 degrees during the 300 ms after 0 ms.
$('#btn-logo').rotateX(180, 700, 700); // #btn-logo rotates around the abscissa (horizontal axis) at 180 degrees during the 700 ms after 700 ms.
```

#### rotateY method 
Applying NodeList.rotateY(angle, duration, delay) rotates every element of NodeList collection **around the ordinate (vertical axis)** at an “angle” (degrees) during the second argument “duration” (ms) with delay accordingly the third argument “delay” (ms). All arguments are not required: default value “angle” is 360, default value “duration” is 300, default value “delay” is 0.

``` Examples:```
```
$('div').rotateY(); // All div’s rotates around the ordinate (vertical axis) at 360 degrees during the 300 ms after 0 ms.
$('#btn-logo').rotateY(180, 700, 700); // #btn-logo rotates around the ordinate (vertical axis) at 180 degrees during the 700 ms after 700 ms.
```

#### scale method
Applying NodeList.scale(coeff, duration, delay) resizes every element of NodeList collection on the 2D plane at an “coeff” (decimal) which represent the amount of scaling to be applied in each direction, during the second argument “duration” (ms) with delay accordingly the third argument “delay” (ms). All arguments are not required: default value “coeff” is 1.2, default value “duration” is 300, default value “delay” is 0.

``` Examples:```
```
$('div').scale(); // All div’s increases by 1.2 times during the 300 ms after 0 ms.
$('#btn-logo').scale(1.5, 600, 3000); // #btn-logo increases by 1.5 times during the 600 ms after 3 seconds.
```

#### remove method
Applying NodeList.remove() removes every element of NodeList collection.

``` Examples:```
```
$('#btn-logo').remove(); // Removes #btn-logo
$('.menu').remove(); // Removes all elements which have class “menu”
```

#### removeParent method
Applying NodeList.removeParent() removes parent of every element of NodeList collection.

``` Examples:```
```
$('#btn-logo').removeParent(); // Removes parent of #btn-logo
$('.menu').removeParent(); // Removes parent of all elements which have class “menu”
```

#### insertBefore(element) method
Applying NodeList.insertBefore(element) inserts an “element” before every element of NodeList collection.

``` Example:```
```
let element = document.createElement('div'); // Creates div
element.innerHTML = 'Inserted element!'; // Adds “innerHTML”
$('.menu').insertBefore(element); // Created div inserts before all elements which have class “menu”
```
___
# License

MIT
___
E-mail: <selyutin_egor@mail.ru>
