$('#question-1, #question-2, #question-3, #question-4, #question-5, #question-6').on('click', function() {
    var questionNumber = $(this).attr('id').substring(9, 10);
    var question = document.getElementById('question-' + questionNumber);
    var answer = document.getElementById('answer-' + questionNumber);
    $('#answer-' + questionNumber).slideToggle(300);
    if (window.getComputedStyle(this, ':before').content == '"+"') {
        $('#question-' + questionNumber).addClass('expand-answer');
    }
    else {
        $('#question-' + questionNumber).removeClass('expand-answer');
    }
});