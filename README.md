# React: Voice Note App

##### January 2021

I built this voice note app to get familiar with the [Web Speech API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API) (Continuous Recognition of Open Dialog), which is a first step on the road to making a Yoruba to English translation application. Initally, I used a tutorial to get started, I then refactored to include:

- Changing the data type for the note from a string to an object.
- Adding functionality so that a note with the word "important" in it will be saved in the colour red. This should help draw the attention for the user.
- Back-end storage, so the notes can be stored, saved and displayed in date order (in progress).

![Voice Note App landing page]()

## To Start

Clone the repo as instructed below and install npm modules.

## Installation

1.  Clone the repo<br/>
    `https://github.com/kumsw/voice-note-app.git`
2.  Download the required npm modules.<br/>
    `npm i`
3.  Open a terminal and start the the React app using the following command:<br/>` npm run start`

## Security and privacy considerations:

- When you first use the application you will need to accept a microphone permission prompt shown as the result of a call to SpeechRecognition.start.<br/>
  `mic.start`
- There is clear recognition on the page and in the console that the application is recording.
- There is a clear button to stop recording.

## Usage:

Click start and record your thoughts and notes! If a note is "important" the note will save in the color red.
