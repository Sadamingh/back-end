from flask import Flask, redirect, url_for, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", something="Hello world!")

@app.route("/<name>")
def user(name):
    return render_template("user.html", x=name);

@app.route("/admin")
def admin():
    return redirect(url_for("home"))

@app.route("/owner")
def owner():
    return redirect(url_for("user", name="owner!"))

@app.route("/login", methods=['POST','GET'])
def login():
    if request.method == "POST":
        username = request.form["name"]
        password = request.form["password"]
        return redirect(url_for("user", name=username))
    else:
        return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)
