from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api")
def hello():
    data = {"message": "Hello World!"}
    return jsonify(data)


if __name__ == "__main__":
    app.run()
