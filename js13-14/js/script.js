'use strict';

var test = [{
    question: 'Что обозначает директива ‘use strict’?',
    answer: ['Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.', 'Код данного скрипта будет обработан по строгим правилам стандарта HTML5.', 'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.'],
    check: ['true', 'false', 'false'],
},
{
    question: 'К какому участку скрипта применяются строгие правила ‘use strict’?',
    answer: ['Во всем скрипте.', 'Либо во всем скрипте, либо в отдельной функции.', 'Внутри блока {}'],
    check: ['false', 'true', 'false'],
},
{
    question: 'Какие основное ограничения к объявлению переменных в строгом режиме?',
    answer: ['Переменные функций должны объявляться с использованием ключевого слова var', 'Глобальные переменные должны объявляться с использованием ключевого слова var', 'Любая переменная должна объявляться с использованием ключевого слова var'],
    check: ['false', 'false', 'true'],
}];

localStorage.setItem('test', JSON.stringify(test));

$(function() {

var test = $('#test').html();

var content = localStorage.getItem('test');
content = JSON.parse(content);

var page = tmpl(test, {data: content});

$('.check').css("display", "block");
$('.check').before(page);

$('.check').on('click', function() {
    var $result = true;
        $('.checkbox').each(function() {
    	if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
    			$result = false;
                return false;
    		}
    });
    console.log($result);

$('.result_text')[0].innerHTML = $result ? 'Все верно!' : 'Неверно, повторите попытку';
$('.result').css("display", "block").animate({opacity: 1}, 400);

});

$('.result_ok').on('click', function(){
    $('.result').animate({opacity: 0}, 400, function() {
        $(this).css("display", "none"); 
    })
    $('.checkbox').each(function() { 
        $(this).prop('checked', false);
    });
});

})