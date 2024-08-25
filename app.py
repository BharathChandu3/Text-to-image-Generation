from flask import Flask, render_template, request, send_file, redirect, url_for
from huggingface_hub import InferenceClient
from PIL import Image
from io import BytesIO
import os
import datetime

app = Flask(__name__)


client1 = InferenceClient(token="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")
client2 = InferenceClient(token="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")


IMAGE_DIR = 'generated_images'

# Ensure the directory exists
if not os.path.exists(IMAGE_DIR):
    os.makedirs(IMAGE_DIR)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        input_text = request.form.get("input_text")
        model_choice = request.form.get("model_choice")
        
        if input_text and model_choice:
            
            if model_choice == "model1":
                client = client1
                model_url = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"
            else:
                client = client2
                model_url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell"

            # Generate the image based on the prompt
            image = client.text_to_image(
                model=model_url,
                prompt=input_text,
            )

            
            timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"{input_text[:10]}_{timestamp}.png"
            file_path = os.path.join(IMAGE_DIR, filename)

           
            image.save(file_path)

            
            return send_file(file_path, mimetype='image/png')

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
