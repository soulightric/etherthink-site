from flask import Flask, render_template
# tambahkan ini hanya jika kamu pakai render.yaml dan gunicorn
import os
port = int(os.environ.get("PORT", 5000))
app.run(host='0.0.0.0', port=port)

app = Flask(__name__)

@app.route("/")
def base():
    return render_template("base.html")

if __name__ == "__main__":
    app.run(debug=True)
