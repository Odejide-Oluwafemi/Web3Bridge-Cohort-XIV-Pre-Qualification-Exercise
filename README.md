# 🧠 Odejide Oluwafemi Web3Bridge Cohort XIV Pre-Qualification Exercise


Create a dynamic quiz game that allows players to test their knowledge on various topics. The game should display one question at a time, allow the player to select an answer, and provide feedback before moving to the next question. At the end of the game, the player should see their total score.

---

## 🎮 How to Play

1. **Start the Quiz**
   - Launch the game and the first question will appear automatically.

2. **Answer Questions**
   - Each question has multiple options.
   - Users click on the button that corresponds to their chosen answer.

3. **Checkmarks**
   - Once the user selects an answer, checkmarks (“✔” or “✖”) appear next to all the options to indicate which ones were correct or incorrect.

4. **Results Page**
   - After completing all questions, users will be taken to the **Result** page.
   - It displays:
     - The total number of questions answered correctly.
     - The overall number of questions in the quiz.
     - A button to **retry** the quiz.

---

## ⚙️ Features Implemented

### ✅ 1. Dynamic Question Rendering
Load questions dynamically from a JSON file or API.


### ✅ 2. Answer Validation
- Allow the player to select answers and receive feedback on correctness.

- After any option is clicked, all checkmarks automatically appear — showing correct (`✔`) and incorrect (`✖`) answers.

### ✅ 3. Scoring
Track the player’s score and display the total at the end.


### ✅ 5. Last Score Tracking via Local Storage
A local **lastScore** is maintained using React state and saved to local storage.
- Every time a user completes a quiz, their score is added to the history.
- Users can view their past performance on the Result screen.

### ✅ 6. Retry Functionality
A “Retry” button allows users to restart the quiz at the end of a session, resetting the current round while keeping their score history.

---

## 🛠️ Tech Stack

- **React.js** – Component-based UI library  
- **JavaScript (ES6+)** – Core game logic  
- **CSS3** – Styling and layout  
- **HTML5** – Structure and markup  