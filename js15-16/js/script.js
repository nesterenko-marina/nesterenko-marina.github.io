$(function() {

    $('.button').on('click', searching);
    $('.text').on('keypress', function (e) {
        if(e.which == 13){
            searching();
        }
    });

    function searching() {
        var $search = $('.text').val();
        var API_KEY = '2730249-01eca51cfedb903b9081907ba';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+ encodeURIComponent($search);
        $.getJSON(URL, function(data){
            console.log(data);
            if (parseInt(data.totalHits) > 0){
                var ul = document.createElement('ul');
                $.each(data.hits, function(i, hit){
                    var li = document.createElement('li');
                    li.innerHTML = '<a href="'+hit.pageURL+'"><img src="'+hit.webformatURL+'" alt="" /></a>';
                    ul.appendChild(li);
                });
                $('.results').html(ul);
            } else{
                $('.results').append('<p>No results</p>');
            }
        });
        return false;
    };
    
//part 2
  function Human() {
    this.name = 'John';
    this.age = 25;
    this.sex = 'male';
    this.height = 180;
    this.weight = 75;
  };

  function Worker() {
    this.workPlace = 'office';
    this.salary = 4000;
    this.work = function() {
      alert('very important job');
    };
  };

  function Student() {
    this.university = 'Oxford';
    this.bursary = 2000;
    this.watchSeries = function() {
      alert('essential activity');
    };
  };

  Worker.prototype = new Human();
  Student.prototype = new Human();

  var worker1 = new Worker();
  var worker2 = new Worker();
  var student1 = new Student();
  var student2 = new Student();
    
  console.log(worker1, worker2);
  console.log(student1, student2);

  console.log('worker1.name', worker1.name);
  console.log('worker2.age', worker2.age);
  console.log('student1.sex', student1.sex);
  console.log('student2.height', student2.height);
  console.log('worker1.weight', worker1.weight);

});