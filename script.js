// ================= CONFIG =================
function saveConfig() {
  const key = document.getElementById("apiKey").value;
  const region = document.getElementById("region").value;

  localStorage.setItem("apiKey", key);
  localStorage.setItem("region", region);

  alert("Config Saved!");
}

function getConfig() {
  return {
    key: localStorage.getItem("apiKey"),
    region: localStorage.getItem("region")
  };
}

// ================= SPEECH TO TEXT =================
function startSpeechToText() {
  const { key, region } = getConfig();

  if (!key || !region) {
    alert("Please enter API key and region");
    return;
  }

  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(key, region);
  const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

  const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

  recognizer.recognizeOnceAsync(result => {
    document.getElementById("textInput").value = result.text;
    recognizer.close();
  });
}

// ================= TEXT TO SPEECH =================
function convertTextToSpeech() {
  const text = document.getElementById("textInput").value;
  const { key, region } = getConfig();

  if (!text) {
    alert("Enter text first!");
    return;
  }

  if (!key || !region) {
    alert("Please enter API config!");
    return;
  }

  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(key, region);
  const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

  synthesizer.speakTextAsync(text,
    () => synthesizer.close(),
    err => {
      console.error(err);
      synthesizer.close();
    }
  );
}

// ================= COPY =================
function copyText() {
  const textarea = document.getElementById("textInput");

  textarea.select();
  textarea.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textarea.value);

  alert("Copied to clipboard!");
}

// ================= STARS BACKGROUND =================
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  stars.forEach(star => {
    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();