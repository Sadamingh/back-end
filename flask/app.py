from flask import Flask, redirect, url_for, render_template, request, session

app = Flask(__name__)
app.secret_key = "Ke2c'01/sba!P23."

@app.route("/")
def home():
    return render_template("index.html", something="Hello world!")

@app.route("/user")
def user():
    if 'user' in session:
        user = session['user']
        return render_template("user.html", x=user)
    else:
        return redirect(url_for("login"))

@app.route("/admin")
def admin():
    return redirect(url_for("home"))

@app.route("/login", methods=['POST','GET'])
def login():
    if request.method == "POST":
        username = request.form["name"]
        password = request.form["password"]
        if password != '1234':
            return redirect(url_for("home"))
        session['user'] = username
        return redirect(url_for("user", name=username))
    else:
        return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)
