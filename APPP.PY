# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from llm_integration import generate_test_cases
# import logging
# import io
# import base64

# app = Flask(__name__)
# CORS(app)

# logging.basicConfig(level=logging.INFO)

# @app.route('/')
# def home():
#     return "Test Case Generator API is running!"

# @app.route('/generate_test_cases', methods=['POST'])
# def generate_test_cases_endpoint():
#     try:
#         data = request.json
#         context = data.get('context', '')
#         image_data = data.get('images', [])

#         # Convert base64 strings to PIL Images
#         processed_images = [Image.open(io.BytesIO(base64.b64decode(img.split(',')[1]))) for img in image_data]

#         # Generate test cases using CLIP
#         test_cases = generate_test_cases(context, processed_images)

#         return jsonify(test_cases), 200

#     except Exception as e:
#         logging.error(f"Error in generate_test_cases_endpoint: {str(e)}")
#         return jsonify({"error": "An error occurred processing your request"}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import base64
import io
import logging

# Import your custom modules
from image_processor import process_images
from llm_integration import generate_test_cases
from test_case import format_test_cases

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)

@app.route('/')
def home():
    return "Test Case Generator API is running!"

@app.route('/generate_test_cases', methods=['POST'])
def generate_test_cases_endpoint():
    try:
        # Extract JSON data from the request
        data = request.json
        context = data.get('context', '')
        image_data = data.get('images', [])

        # Convert base64 strings to PIL Images
        processed_images = [Image.open(io.BytesIO(base64.b64decode(img.split(',')[1]))) for img in image_data]

        # Generate test cases
        test_cases = generate_test_cases(context, processed_images)

        # Format test cases (assuming you want to format the generated test cases)
        formatted_test_cases = format_test_cases(test_cases)

        return jsonify(formatted_test_cases), 200

    except Exception as e:
        logging.error(f"Error in generate_test_cases_endpoint: {str(e)}")
        return jsonify({"error": "An error occurred processing your request"}), 500

if __name__ == '__main__':
    app.run(debug=True)
