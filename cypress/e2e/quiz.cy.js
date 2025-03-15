
describe('Tech Quiz without ID', () => {
  it('should start the quiz to go through each questions page by selecting the first answer w/o Custom IDs', () => {
    
    // GIVEN I am taking a tech quiz
    cy.visit('http://127.0.0.1:3001/');

    // WHEN I click the start quiz button
    cy.get('.btn-primary').click();

    // WHEN all questions are answered
      // Below will call answerQuestions function
      // It will go through 10 questions if tblQuestions is visible
      // If exists, then it will answer the questions by clicking the 'first' button
    answerQuestions();
    
    // WHEN all questions are answered
    // THEN the quiz is over
    cy.get('.card.p-4.text-center').should('be.visible');

    // WHEN the quiz is over
    // THEN I can view my score
    cy.get('.alert.alert-success').should('be.visible');

    // WHEN the quiz is over
    // THEN I can start a new quiz
    cy.get('.btn-primary').should('be.visible').click();

    // I added this to validate that I can see the first question after click was performed.
    cy.get('.card.p-4').should('be.visible');
  });
});


// Below is reusable function to answer questions on 10 pages.
// Answers all '10' questions
const answerQuestions = () => {
  for (let i = 0; i < 10; i++) {
    cy.get('.card.p-4').then(($tblQuestions) => {
      if ($tblQuestions.length > 0) {
        // THEN I am presented with another question
        cy.get('.card.p-4').should('be.visible');
        // WHEN I answer a question by selecting the first option
        cy.get('.card.p-4').find('button[class^="btn"]').first().click();
      }
    });
  }
};

describe('Tech Quiz with ID', () => {
  it('should start the quiz to go through each questions page by selecting the first answer wtih Custom IDs', () => {
    
    // GIVEN I am taking a tech quiz
    cy.visit('http://127.0.0.1:3001/');

    // WHEN I click the start quiz button
    cy.get('#btnStartQuiz').click();

    // WHEN all questions are answered
      // Below will call answerQuestions function
      // It will go through 10 questions if tblQuestions is visible
      // If exists, then it will answer the questions by clicking the 'first' button
      answerQuestionsByID();
    
    // WHEN all questions are answered
    // THEN the quiz is over
    cy.get('#txtQuizOver').should('be.visible');

    // WHEN the quiz is over
    // THEN I can view my score
    cy.get('#fldScore').should('be.visible');

    // WHEN the quiz is over
    // THEN I can start a new quiz
    cy.get('#btnTakeNewQuiz').should('be.visible').click();

    // I added this to validate that I can see the first question after click was performed.
    cy.get('#tblQuestions').should('be.visible');
  });
});


// Below is reusable function to answer questions on 10 pages.
// Answers all '10' questions
const answerQuestionsByID = () => {
  for (let i = 0; i < 10; i++) {
    cy.get('#tblQuestions').then(($tblQuestions) => {
      if ($tblQuestions.length > 0) {
        // THEN I am presented with another question
        cy.get('#tblQuestions').should('be.visible');
        // WHEN I answer a question by selecting the first option
        cy.get('#tblQuestions').find('button[id^="btnAnswer-0"]').click();
      }
    });
  }
};
