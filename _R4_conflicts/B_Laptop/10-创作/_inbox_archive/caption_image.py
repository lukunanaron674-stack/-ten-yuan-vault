"""caption_image.py - Describe an image using BLIP model, output to note"""
import os, sys, json
os.environ["HF_HOME"] = r"E:\AIModels\huggingface"
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration

MODEL_PATH = r"E:\AIModels\blip"

def caption(image_path, max_length=50):
    proc = BlipProcessor.from_pretrained(MODEL_PATH)
    model = BlipForConditionalGeneration.from_pretrained(MODEL_PATH)
    img = Image.open(image_path).convert("RGB")
    inputs = proc(img, return_tensors="pt")
    out = model.generate(**inputs, max_length=max_length)
    return proc.decode(out[0], skip_special_tokens=True)

if __name__ == "__main__":
    path = sys.argv[1]
    result = caption(path)
    print(result)
