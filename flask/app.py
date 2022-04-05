from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", something="Hello world!")

@app.route("/<name>")
def user(name):
    return f"Hello {name}"

@app.route("/admin")
def admin():
    return redirect(url_for("home"))

@app.route("/owner")
def owner():
    return redirect(url_for("user", name="owner!"))

if __name__ == "__main__":
    app.run()
