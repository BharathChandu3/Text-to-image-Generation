const inputTxt = document.getElementById("input");
const image = document.getElementById("image");
const speakButton = document.getElementById("speak-btn");
const generateButtons = document.querySelectorAll('.generate-btn');
const timeTakenDisplay = document.getElementById("time-taken");
const loaderContainer = document.getElementById('loader-container');
let fetching = false;

async function handleGenerateClick(event) {
    if (fetching) return;
    fetching = true;
    loaderContainer.style.display = 'flex'; // Show the loader
    image.style.display = 'none';
    document.querySelector('.image-container').style.display = 'none';
    timeTakenDisplay.textContent = '';

    const startTime = performance.now();

    const modelChoice = event.target.dataset.model;

    const data = new FormData();
    data.append('input_text', inputTxt.value);
    data.append('model_choice', modelChoice);
   

    try {
        const response = await fetch("/", {
            method: "POST",
            body: data
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();
        const endTime = performance.now();

        if (blob) {
            const objectURL = URL.createObjectURL(blob);
            image.src = objectURL;
            image.style.display = 'block';
            document.querySelector('.image-container').style.display = 'block';

            const timeTaken = (endTime - startTime) / 1000;
            timeTakenDisplay.textContent = `Time taken: ${timeTaken.toFixed(2)} seconds`;
        }
    } catch (error) {
        console.error("Error generating image:", error);
        alert("An error occurred while generating the image. Please try again.");
    } finally {
        fetching = false;
        loaderContainer.style.display = 'none'; // Hide the loader
    }
}

function handleSpeechInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = ''; // Let the system auto-detect the language

    recognition.onstart = () => {
        console.log("Voice recognition started. Speak into the microphone.");
        speakButton.classList.add("recording");
    };

    recognition.onspeechend = () => {
        recognition.stop();
        speakButton.classList.remove("recording");
    };

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        inputTxt.value = speechResult;
        console.log("Speech recognized: " + speechResult);
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error: ", event.error);
        speakButton.classList.remove("recording");
    };

    recognition.start();
}

generateButtons.forEach(button => {
    button.addEventListener('click', handleGenerateClick);
});
speakButton.addEventListener('click', handleSpeechInput);
