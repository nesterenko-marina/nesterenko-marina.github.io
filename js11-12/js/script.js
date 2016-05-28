$(function(){
    
    var html = $('#profile').html();
    var data = {
        name: 'Нестеренко Марина Александровна',
        photo: '<img src="img/me.jpg" height="200" alt="Это я" title="Это я">',
        title: 'Экономист, желающий учить фронтенд',
        objective: 'Хочу учить фронтенд, т.к. это:',
        reason1: 'интересно',
        reason2: 'перспективно',
        reason3: 'актуально',
        phone_number: 'Мой контактный телефон:<br>+380666633814',
        vk: 'Мой профиль вконтакте:',
        reference: '<a href="http://vk.com/id6368625" target="_blank">my profile</a>',
        additional: 'Мои качества:<br>способная, обучаемая, ответственная'
    };
    var content = tmpl(html, data);
    $('body').append(content);
});