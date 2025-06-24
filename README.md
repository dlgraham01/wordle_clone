
# Wordle Clone

A simple clone of the popular word guessing game Wordle.

## Getting Started

### Prerequisites

- Python 3.x
- Flask

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wordle_clone.git
   cd wordle_clone
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Running the Game

To run the game, simply execute:

```bash
python server.py
```

Then open your browser and navigate to `http://localhost:51312` to play the game.

## How to Play

- Guess a 5-letter word.
- After each guess, the color of the tiles will change to show how close your guess was to the word:
  - 🟩 : Letter is in the correct spot
  - 🟨 : Letter is in the word but not in the correct spot
  - ⬛ : Letter is not in the word

You have 6 attempts to guess the word.

## License

This project is licensed under the MIT License.
