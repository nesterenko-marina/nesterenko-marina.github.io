var container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

var h3 = document.createElement('h3');
h3.innerHTML = "Тест по программированию";
container.appendChild(h3);

var data = {
    questions: ["1. Вопрос №1", "2. Вопрос №2", "3. Вопрос №3"],
    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]
    };

var h2 = document.createElement('h2');
h2.innerHTML = data.questions[0];
container.appendChild(h2);

for (var i=0; i < data.answers.length; i++) {
var label = document.createElement('label');
label.classList.add('answers');
h2.appendChild(label);

var checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
label.insertBefore(checkbox, label.children[i]);

var text = document.createElement('text');
text.className = "text";
text.innerHTML = data.answers[i];
label.insertBefore(text, label.children[1]);
};

var h2 = document.createElement('h2');
h2.innerHTML = data.questions[1];
container.appendChild(h2);

for (var i=0; i < data.answers.length; i++) {
var label = document.createElement('label');
label.classList.add('answers');
h2.appendChild(label);

var checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
label.insertBefore(checkbox, label.children[i]);

var text = document.createElement('text');
text.className = "text";
text.innerHTML = data.answers[i];
label.insertBefore(text, label.children[1]);
};

var h2 = document.createElement('h2');
h2.innerHTML = data.questions[2];
container.appendChild(h2);

for (var i=0; i < data.answers.length; i++) {
var label = document.createElement('label');
label.classList.add('answers');
h2.appendChild(label);

var checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
label.insertBefore(checkbox, label.children[i]);

var text = document.createElement('text');
text.className = "text";
text.innerHTML = data.answers[i];
label.insertBefore(text, label.children[1]);
};

var button = document.createElement('button');
button.className = "btn btn-default";
button.id = "check";
button.innerHTML = "Проверить мои результаты";
container.appendChild(button);