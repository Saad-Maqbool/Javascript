function Question(text,choices,answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}
Question.prototype.correctanswer=function (choice) {
        return choice===this.answer;

}