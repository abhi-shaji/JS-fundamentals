// IIFE Immmediately invoked Function Expressions

(function chai () {
    // named iife
    console.log("DB CONNECTED");
})();

((name) => {
    //simple iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Abhinav');

(function chai2 (name) {
    console.log(`DB CONNECTED THREE ${name}`);
    
}) ('Abhi');

((name) => {
    console.log(`DB CONNECTED FOUR ${name}`);
    
}) ('Abhinav');