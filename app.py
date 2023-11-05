from flask import Flask, jsonify, request
from flask_cors import CORS
from webhook import post_message_to_discord

app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({

        'message': "Matthew King"

    })

@app.route("/api/submit-data", methods=['POST'])
def return_submit():
    # Check if the request contains JSON data
    if not request.is_json:
        return jsonify({"error": "Invalid JSON data in the request"}), 400

    data = request.get_json()
    
    # Check if the required fields are present in the JSON data
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    if email is None or subject is None or message is None:
        return jsonify({"error": "Missing required fields in the JSON data"}), 400

    print("Received data:")
    print(f"Email: {email}")
    print(f"Subject: {subject}")
    print(f"Message: {message}")

    message_content = f"Email: {email}, Subject: {subject}, Message: {message}"
    post_message_to_discord(message_content)

    # You can return a JSON response to acknowledge the successful receipt
    return jsonify({"message": "Data received successfully"}), 200


if __name__ == "__main__":
    app.run(debug=True, port=8080)