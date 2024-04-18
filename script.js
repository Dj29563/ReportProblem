function showQuestion(question) {
    if (question === 1) {
        document.getElementById('question1').style.display = 'block';
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question3').style.display = 'none';
        document.getElementById('tab1').classList.add('active');
        document.getElementById('tab2').classList.remove('active');
    } else if (question === 2) {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
        document.getElementById('question3').style.display = 'none';
        document.getElementById('tab1').classList.remove('active');
        document.getElementById('tab2').classList.add('active');
    }
}
