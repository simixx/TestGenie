from PIL import Image
import io
import base64

def process_images(images):
    processed_images = []
    for image in images:
        img = Image.open(image)
        img = img.convert('RGB')
        img = img.resize((224, 224), Image.LANCZOS)  # Resize for LLaVA
        
        buffered = io.BytesIO()
        img.save(buffered, format="JPEG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        processed_images.append(img_str)
    
    return processed_images