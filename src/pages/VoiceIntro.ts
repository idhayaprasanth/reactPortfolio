export const speakIntro = (onStart: () => void, onEnd: () => void, delay = 1000) => {
  const message = new SpeechSynthesisUtterance(
    "Hello! I'm Idhaya Prasanth, a creative tech professional turning ideas into impactful solutions. Welcome to my interactive portfolio."
  );

  message.rate = 1;
  message.pitch = 1;
  message.lang = "en-US";

  message.onstart = () => {
    onStart(); // Trigger when speech starts
  };

  message.onend = () => {
    onEnd(); // Trigger when speech ends
  };

  const trySpeak = () => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) {
      setTimeout(trySpeak, 200); // Retry if voices aren't ready yet
      return;
    }

    const preferred = voices.find(
      (v) => v.name.includes("Google") || v.name.includes("Microsoft")
    );
    if (preferred) {
      message.voice = preferred;
    }

    window.speechSynthesis.cancel(); // Cancel anything in queue
    window.speechSynthesis.speak(message);
  };

 setTimeout(() => {
   trySpeak();
 }, delay); 
};
