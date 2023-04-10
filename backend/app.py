from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder="../frontend/build")

port = os.environ.get("PORT") or 3001


@app.route("/api")
def api():
    return jsonify({"message": "Hello World!"})


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=port)
