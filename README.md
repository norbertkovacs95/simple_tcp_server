# server
I.	Install MongoDB
i.	Go to http://www.mongodb.org, then download and install MongoDB as per the instructions given there.
ii.	Create a folder named mongodb on your computer and create a subfolder under it named data.
iii.	Move to the folder you have just created and press ‘Shift’ + Right click then select ‘Open PowerShell windows here’.
 
iv.	Star the MongoDB server by typing the following at the prompt:
 mongod --dbpath=data --bind_ip 127.0.0.1

II.	Install Backend Server 
If you don’t have the npm package manager installed on your computer, it must be installed first. To install Node on your machine, go to https://nodejs.org and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded. Open a terminal window on your machine. If you are using a Windows machine, open a cmd window or PowerShell window with admin privileges. To ensure that your NodeJS setup is working correctly, type the following at the command prompt to check for the version of Node and NPM by typing: node -v ; npm -v
i.	Move to the folder where the ‘server’ directory is created and open a terminal window (please refer to I.iii)
ii.	Install the required node packages by typing npm install to the terminal
iii.	After the installations are complete, start the server by typing npm start to the terminal. The following messages indicate that the server is successfully started:
