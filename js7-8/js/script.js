$(function () {
    
    var $link1 = $('.link1');
    var $link2 = $('.link2');
    var $link3 = $('.link3');
    var $tabs1 = $('.tabs1');
    var $tabs2 = $('.tabs2');
    var $tabs3 = $('.tabs3');
    var $firstname = $('.firstname');
    var $lastname = $('.lastname');
    var $address = $('.address');
    var $title1 = $('.title1');
    var $title2 = $('.title2');
    var $title3 = $('.title3');
    var $button = $('button');
    
    $link1.on('click', function(){
        $tabs1.show();
        $tabs2.hide();
        $tabs3.hide();
        $link1.css({
            backgroundColor: '#32CD32',
            borderColor: '#228B22'
        });
        $link2.css({
            backgroundColor: '#ADFF2F',
            borderColor: '#ADFF2F'
        });
        $link3.css({
            backgroundColor: '#ADFF2F',
            borderColor: '#ADFF2F'
        });
    });
    
    $link2.on('click', function(){
        $tabs1.hide();
        $tabs2.show();
        $tabs3.hide();
        $link2.css({
            backgroundColor: '#32CD32',
            borderColor: '#228B22'
        });
        $link1.css({
            backgroundColor: '#ADFF2F',
            borderColor: '#ADFF2F'
        });
        $link3.css({
            backgroundColor: '#ADFF2F',
            borderColor: '#ADFF2F'
        });
    });
    
    $link3.on('click', function(){
        $tabs1.hide();
        $tabs2.hide();
        $tabs3.show();
        $link3.css({
            backgroundColor: '#32CD32',
            borderColor: '#228B22'
        });
        $link1.css({
            backgroundColor: '#ADFF2F',
            borderColor: '#ADFF2F'
        });
        $link2.css({
            backgroundColor: '#ADFF2F',
            borderColor: '#ADFF2F'
        });
    });
    
    $link1.hover(function(){
        $link1.css({
            borderColor: '#228B22'
        });
    });
    
    $link2.hover(function(){
        $link2.css({
            borderColor: '#228B22'
        });
    });
    
    $link3.hover(function(){
        $link3.css({
            borderColor: '#228B22'
        });
    });
    
    $link1.mouseleave(function(){
        $link1.css({
            borderColor: '#ADFF2F'
        });
    });
    
    $link2.mouseleave(function(){
        $link2.css({
            borderColor: '#ADFF2F'
        });
    });
    
    $link3.mouseleave(function(){
        $link3.css({
            borderColor: '#ADFF2F'
        });
    });
    
    $firstname.hover(function(){
        $title1.fadeIn();
        $title1.css({
            visibility: 'visible',
        });
    });
    
    $lastname.hover(function(){
        $title2.fadeIn();
        $title2.css({
            visibility: 'visible'
        });
    });
    
    $address.hover(function(){
        $title3.fadeIn();
        $title3.css({
            visibility: 'visible'
        });
    });
    
    $firstname.mouseleave(function(){
        $title1.fadeOut();
    });
    
    $lastname.mouseleave(function(){
        $title2.fadeOut();
    });
    
    $address.mouseleave(function(){
        $title3.fadeOut();
    });
    
    $button.on('click', function(){
        $title1.fadeIn();
        $title2.fadeIn();
        $title3.fadeIn();
        $title1.css({
            visibility: 'visible'
        });
        $title2.css({
            visibility: 'visible'
        });
        $title3.css({
            visibility: 'visible'
        });
    });

});