import "./App.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const mic = new SpeechRecognition();

mic.continuous = true;
mic.intermResults = true;
mic.lang = "en-US";
mic.maxAlternatives = 2;

function App() {
  const [islistening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  // every time chnage to isListening handlelisten will be called
  useEffect(() => {
    handleListen();
  }, [islistening]);

  const handleListen = () => {
    if (islistening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };
    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join(" ");
      console.log({ transcript });
      setNote({
        key: uuidv4(),
        note: transcript,
        isImportant: transcript.includes("important"),
      });

      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };
  //saving the note
  const handleSaveNote = () => {
    if (note === null) {
      return;
    }
    setSavedNotes([...savedNotes, note]);
    console.log({ note });
    setNote(null);
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Voice Note App</h1>
          <h2>Current Note:</h2>
          {islistening ? <span>🎙 </span> : <span>🛑 🎙 </span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button onClick={() => setIsListening(!islistening)}>
            Start/Stop
          </button>

          <p>{note?.note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map((note) => {
            return (
              <p
                key={note.key}
                style={{ color: note.isImportant ? "red" : "black" }}
              >
                {note.note}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
