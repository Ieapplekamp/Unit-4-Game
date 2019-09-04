# Unit-4-Game


Welcome to my game!

Special notes: 

All gems generate a random value. The first four gems generate a random number between 1 and 12 ,that will positively impact the the players score. The fifth gem will generate a random number between 1 and 12, however that will negatively impact the players score. Then, the final gem is a fail safe; if the user cannot win using the first five gems, I'd recommend trying your odds with the sixth. The sixth gem will generate a random number between 1 and 2, leaving the players odds for survival 50/50. The last gem will also not reset the entire function if it is used before a player has started to test the other gems, that way, if the user wants to spam the button a million times, it wont change the initial target number.

The target number will generate a random number between 19 and 120 at the start of the game. After a player wins or losses, a new number will generate and replace the old number. Also, at the start of a new game ,the player score is replaced and set back to the value of zero. The wins and losses will remain unaffected until the user refreshes the browser.
