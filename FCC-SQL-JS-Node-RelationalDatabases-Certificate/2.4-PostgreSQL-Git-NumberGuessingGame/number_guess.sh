#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

# Generate random number between 1 and 1000
SECRET_NUMBER=$(( RANDOM % 1000 + 1 ))
GUESSES=0

# Get username
echo "Enter your username:"
read USERNAME

USER_INFO=$($PSQL "SELECT games_played, best_game FROM users WHERE username='$USERNAME'")

if [[ -z $USER_INFO ]]
then
  # If user doesn't exist, insert new user
  INSERT_USER=$($PSQL "INSERT INTO users(username, games_played) VALUES('$USERNAME', 0)")
  echo "Welcome, $USERNAME! It looks like this is your first time here."
else
  # If user exists, get their info
  echo "$USER_INFO" | while IFS="|" read GAMES_PLAYED BEST_GAME
  do
    echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
  done
fi

echo "Guess the secret number between 1 and 1000:"

while true; do
  read GUESS
  
  # Check if input is an integer
  if [[ ! $GUESS =~ ^[0-9]+$ ]]
  then
    echo "That is not an integer, guess again:"
    continue
  fi

  # Increment guess counter
  ((GUESSES++))

  # Check guess
  if [[ $GUESS -eq $SECRET_NUMBER ]]
  then
    echo "You guessed it in $GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
    
    # Update user stats
    GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username='$USERNAME'")
    NEW_GAMES_PLAYED=$(($GAMES_PLAYED + 1))
    
    BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username='$USERNAME'")
    if [[ -z $BEST_GAME || $GUESSES -lt $BEST_GAME ]]
    then
      UPDATE_STATS=$($PSQL "UPDATE users SET games_played = $NEW_GAMES_PLAYED, best_game = $GUESSES WHERE username='$USERNAME'")
    else
      UPDATE_STATS=$($PSQL "UPDATE users SET games_played = $NEW_GAMES_PLAYED WHERE username='$USERNAME'")
    fi
    break
  elif [[ $GUESS -lt $SECRET_NUMBER ]]
  then
    echo "It's higher than that, guess again:"
  else
    echo "It's lower than that, guess again:"
  fi
done
