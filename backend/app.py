from flask import Flask, send_from_directory, Response
from flask_cors import CORS # 追加
import os
import json

app = Flask(__name__, static_folder="../frontend/out")
CORS(app) # 追加

print("🚀サーバー起動！")

port = os.environ.get("PORT") or 3001



@app.route("/api")
def api():
    message = {"message": "PythonファイルのAPI連携成功ダ！！！"}
    return Response(json.dumps(message, ensure_ascii=False), content_type="application/json; charset=utf-8")


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=port)
