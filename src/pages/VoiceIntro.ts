export const speakIntro = (
  text: string,
  onStart: () => void,
  onEnd: () => void,
  delay = 500
) => {
  const message = new SpeechSynthesisUtterance(text);

  message.rate = 1;
  message.pitch = 1;
  message.lang = "en-US";
  message.onstart = onStart;
  message.onend = onEnd;

  const speakNow = () => {
    const voices = window.speechSynthesis.getVoices();
    console.log(
      "Available voices:",
      voices.map((v) => v.name)
    );

    const maleVoice = voices.find(
      (v) =>
        /male|david|daniel|alex|Google UK English Male|english-male/i.test(
          v.name
        ) && v.lang.startsWith("en")
    );

    message.voice =
      maleVoice || voices.find((v) => v.lang.startsWith("en")) || voices[0];

    window.speechSynthesis.cancel(); // Clear any queued speech
    window.speechSynthesis.speak(message);
  };

  // Wait for voices to be loaded
  const trySpeaking = () => {
    if (window.speechSynthesis.getVoices().length > 0) {
      setTimeout(speakNow, delay);
    } else {
      window.speechSynthesis.addEventListener("voiceschanged", () => {
        setTimeout(speakNow, delay);
      });
    }
  };

  trySpeaking();
};
