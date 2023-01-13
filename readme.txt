Test
http://127.0.0.1:5173/

git remote add origin <REMOTE_URL>
git branch --set-upstream-to=origin/<branch> main

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/patcoston/walksim.git
git branch --set-upstream-to=origin/main main
git push --all --force

Code initially generated from this ChatGPT prompt.

Create a React component using TypeScript.
Create a state variable named timer with setter named setTimer then initialize timer to number 120.
Create a state variable named speed with setter named setSpeed then initialize speed to number 4.
Create a state variable named warnings with setter named setWarnings then initialize to number 0.
Create a state variable named lastWarning with setter named setLastWarning then initialize lastWarning to the current time.
Create a state variable named ticket with setter named setTicket then initialize ticket to false.
Create a slider named walkingSpeed with label "WALKING SPEED" which can have values in the range from 0 to 10 and give initial value of 5.
Changing the value of the slider will change the value of state variable speed by calling setter setSpeed passing the value of the slider.
Create a setTimeout function named updateTimer which calls itself every 0.1 seconds.
Inside the function updateTimer, subtract 0.1 from timer if speed is less than 4.
  if timer is less or equal to 0, set ticket to true using setter setTicket,
  otherwise if timer is less or equal to 30, then set warnings to 3 using setter setWarnings,
  otherwise if timer is less or equal to 60, then set warnings to 2 using setter setWarnings,
  otherwise if timer is less or equal to 90, then set warnings to 1 using setter setWarnings,
  otherwise set warnings to 0 using setter setWarnings.
  if difference between lastWarning and current time is greater or equal to 60 seconds then
  call function loseWarning.
In function loseWarning, if timer is greater than 60, then set timer to 120 using setter setTimer,
  and set warnings to 0 using setter setWarnings,
  and set lastWarning to current time,
  otherwise if timer is greater than 30, then set timer to 90 using setter setTimer,
  and set warnings to 1 using setter setWarnings,
  and set lastWarning to current time,
  otherwise set timer to 60 using setter setTimer,
  and set warnings to 2 using setter setWarnings,
  and set lastWarning to current time.
Create a button named PenaltyWarning labelled "Penalty Warning".
When button PenaltyWarning is clicked, it calls a function named penaltyWarning.
In function penaltyWarning,
  if timer is greater than 90 then set timer to 90 using setter setTimer,
  otherwise if timer is greater than 60 then set timer to 60 using setter setTimer,
  otherwise if timer is greater than 30 then set timer to 30 using setter setTimer,
  otherwise set timer to 0 using setter setTimer and set ticket to true using setter setTicket.
Display values for timer, warnings, speed, and ticket above button named PenatlyWarning and above slider named walkingSpeed.
