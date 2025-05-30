import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizResponse {
  results: Question[];
}

interface UserAnswer {
  questionIndex: number;
  selectedAnswer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  percentage: number;
  userAnswers: UserAnswer[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions: (Question & { shuffledAnswers: string[] })[] = [];
  currentIndex = 0;
  isLoading = true;
  selectedAnswers: string[] = [];
  answeredQuestions: number[] = [];
  flaggedQuestions: number[] = [];
  quizCompleted = false;
  quizResult: QuizResult | null = null;

  // Timer properties
  timeRemaining = 1800; // 30 minutes in seconds
  timerInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadQuiz();
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  loadQuiz(): void {
    this.http
      .get<QuizResponse>('https://opentdb.com/api.php?amount=10')
      .subscribe((data) => {
        this.questions = data.results.map((q) => ({
          ...q,
          question: this.decodeHTMLEntities(q.question),
          correct_answer: this.decodeHTMLEntities(q.correct_answer),
          incorrect_answers: q.incorrect_answers.map((ans) =>
            this.decodeHTMLEntities(ans)
          ),
          shuffledAnswers: this.shuffleAnswers([
            ...q.incorrect_answers.map((ans) => this.decodeHTMLEntities(ans)),
            this.decodeHTMLEntities(q.correct_answer),
          ]),
        }));
        this.selectedAnswers = new Array(this.questions.length).fill('');
        this.isLoading = false;
      });
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.finishQuiz();
      }
    }, 1000);
  }

  getFormattedTime(): string {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  shuffleAnswers(answers: string[]): string[] {
    return answers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  nextQuestion(): void {
    this.trackAnswered();
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prevQuestion(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToQuestion(index: number): void {
    this.trackAnswered();
    this.currentIndex = index;
  }

  trackAnswered(): void {
    if (
      this.selectedAnswers[this.currentIndex] &&
      !this.answeredQuestions.includes(this.currentIndex)
    ) {
      this.answeredQuestions.push(this.currentIndex);
    }
  }

  toggleFlag(): void {
    const index = this.flaggedQuestions.indexOf(this.currentIndex);
    if (index === -1) {
      this.flaggedQuestions.push(this.currentIndex);
    } else {
      this.flaggedQuestions.splice(index, 1);
    }
  }

  isQuestionFlagged(): boolean {
    return this.flaggedQuestions.includes(this.currentIndex);
  }

  onAnswerSelect(answer: string): void {
    this.selectedAnswers[this.currentIndex] = answer;
    this.trackAnswered();
  }

  canFinishQuiz(): boolean {
    return this.answeredQuestions.length === this.questions.length;
  }

  finishQuiz(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.calculateResults();
    this.quizCompleted = true;
  }

  calculateResults(): void {
    const userAnswers: UserAnswer[] = [];
    let correctCount = 0;

    this.questions.forEach((question, index) => {
      const selectedAnswer = this.selectedAnswers[index] || '';
      const isCorrect = selectedAnswer === question.correct_answer;

      if (isCorrect) {
        correctCount++;
      }

      userAnswers.push({
        questionIndex: index,
        selectedAnswer,
        isCorrect,
        correctAnswer: question.correct_answer,
      });
    });

    const percentage = Math.round((correctCount / this.questions.length) * 100);

    this.quizResult = {
      totalQuestions: this.questions.length,
      correctAnswers: correctCount,
      score: correctCount * 10,
      percentage,
      userAnswers,
    };
  }

  getScoreGrade(): string {
    if (!this.quizResult) return '';

    const percentage = this.quizResult.percentage;
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
  }

  getScoreMessage(): string {
    if (!this.quizResult) return '';

    const percentage = this.quizResult.percentage;
    if (percentage >= 90) return "Outstanding! You're a quiz master!";
    if (percentage >= 80) return 'Excellent work! You really know your stuff!';
    if (percentage >= 70) return 'Good job! You did well!';
    if (percentage >= 60) return 'Not bad! Keep practicing!';
    if (percentage >= 50)
      return "You passed, but there's room for improvement!";
    return "Don't give up! Practice makes perfect!";
  }

  restartQuiz(): void {
    this.currentIndex = 0;
    this.selectedAnswers = [];
    this.answeredQuestions = [];
    this.flaggedQuestions = [];
    this.quizCompleted = false;
    this.quizResult = null;
    this.timeRemaining = 1800;
    this.isLoading = true;
    this.loadQuiz();
    this.startTimer();
  }

  getProgressPercentage(): number {
    return Math.round(((this.currentIndex + 1) / this.questions.length) * 100);
  }

  getAnsweredCount(): number {
    return this.answeredQuestions.length;
  }

  decodeHTMLEntities(text: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }
}
