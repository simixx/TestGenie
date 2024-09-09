import torch
from PIL import Image
import clip
import random

# Load the model
device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

# Predefined list of possible app features
features = [
    "login screen", "registration form", "search bar", "booking interface",
    "payment gateway", "seat selection", "user profile", "notification panel",
    "feedback form", "help/support section", "settings menu", "navigation menu"
]

def generate_test_cases(context, images):
    # Prepare the images
    images = [Image.open(img) for img in images]
    image_inputs = torch.cat([preprocess(img).unsqueeze(0) for img in images]).to(device)

    # Prepare the text
    text_inputs = clip.tokenize(features).to(device)

    # Generate features probabilities
    with torch.no_grad():
        image_features = model.encode_image(image_inputs)
        text_features = model.encode_text(text_inputs)
        
        similarity = (100.0 * image_features @ text_features.T).softmax(dim=-1)
        values, indices = similarity.mean(dim=0).topk(3)

    # Select top 3 most likely features
    detected_features = [features[idx] for idx in indices]

    # Generate test cases based on detected features
    test_cases = []
    for feature in detected_features:
        test_case = generate_test_case_for_feature(feature, context)
        test_cases.append(test_case)

    return "\n\n".join(test_cases)

def generate_test_case_for_feature(feature, context):
    # Template for generating test cases
    template = f"""Test Case: {feature.capitalize()}
Description: Test the {feature} functionality
Pre-conditions: User has the app installed and {context}
Testing Steps:
1. Open the app
2. Navigate to the {feature}
3. Interact with the {feature} (e.g., input data, click buttons)
4. Verify the response and functionality
Expected Result: The {feature} should work as intended, providing appropriate feedback and results"""

    return template