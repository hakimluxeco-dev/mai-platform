import os
from dotenv import load_dotenv
from google import genai
from io import BytesIO
from PIL import Image

# Load environment variables (handling UTF-16 BOM manually)
env_path = os.path.join(os.path.dirname(__file__), '..', '.env')

api_key = None
try:
    with open(env_path, 'r', encoding='utf-16') as f:
        for line in f:
            if 'GEMINI_API_KEY=' in line or 'GOOGLE_API_KEY=' in line:
                api_key = line.split('=')[1].strip()
except Exception as e:
    pass

if not api_key:
    # Fallback to UTF-8
    try:
        with open(env_path, 'r', encoding='utf-8') as f:
            for line in f:
                if 'GEMINI_API_KEY=' in line or 'GOOGLE_API_KEY=' in line:
                    api_key = line.split('=')[1].strip()
    except Exception as e:
        pass

if not api_key:
    print("API Error: No API key found in .env")
    exit(1)

# Initialize the new google-genai SDK
client = genai.Client(api_key=api_key)

prompts = {
    "1.png": "A hyper-realistic, dark moody corporate office scene. A sleek modern glass table with holographic data projections and stock charts floating above it. Cinematic lighting, deep shadows, ultra high resolution, photorealistic, premium agency aesthetic.",
    "2.png": "A hyper-realistic, dark moody film studio set. A professional RED cinema camera on a rig, back-lit with subtle cinematic blue and white lights. Deep shadows, industrial feel, ultra high resolution, photorealistic, premium agency aesthetic.",
    "3.png": "A hyper-realistic, dark moody software engineer workspace. Multiple curved monitors displaying complex code and architectural diagrams. Sleek mechanical keyboard, minimalist desk. Cinematic lighting, deep shadows, ultra high resolution, photorealistic, premium agency aesthetic.",
    "4.png": "A hyper-realistic, dark moody data center or server room. Rows of sleek black server racks with subtle, rhythmic white glowing data lights. Architectural lines, infinite depth, cinematic lighting, ultra high resolution, photorealistic, premium agency aesthetic."
}

output_dir = os.path.join(os.path.dirname(__file__), "..", "app", "public", "hero")
os.makedirs(output_dir, exist_ok=True)

def generate_image(filename, prompt):
    print(f"Generating {filename}...")
    try:
        # Generate image using Imagen 3
        result = client.models.generate_images(
            model='imagen-3.0-generate-002',
            prompt=prompt,
            config=dict(
                number_of_images=1,
                output_mime_type="image/png",
                aspect_ratio="16:9" 
            )
        )
        
        # Save the image
        for generated_image in result.generated_images:
            image_bytes = generated_image.image.image_bytes
            image = Image.open(BytesIO(image_bytes))
            
            filepath = os.path.join(output_dir, filename)
            image.save(filepath)
            print(f"Successfully saved {filepath}")
            
    except Exception as e:
        print(f"Failed to generate {filename}: {e}")

if __name__ == "__main__":
    for filename, prompt in prompts.items():
        generate_image(filename, prompt)
