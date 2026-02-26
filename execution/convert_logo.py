from PIL import Image
import os

def convert_logo():
    source_path = os.path.join("maimarketing", "public", "logo.png")
    dest_path = "Mai_Business_Solutions_Logo.jpg"
    
    if not os.path.exists(source_path):
        print(f"Error: Source file {source_path} not found.")
        return

    try:
        img = Image.open(source_path)
        rgb_img = img.convert('RGB')
        rgb_img.save(dest_path, "JPEG")
        print(f"Successfully converted {source_path} to {dest_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    convert_logo()
