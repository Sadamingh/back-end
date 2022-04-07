from flask import Flask, render_template, redirect, request, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class users(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    password = db.Column(db.String(100))

    def __init__(self, name, password):
        self.name = name
        self.password = password


@app.route("/")
def home():
    data = users.query.all()
    if data:
        return render_template("index.html", data=data)
    return "Hello, world! <a href='./account'>Create account!</a>"

@app.route("/account", methods=["POST", "GET"])
def account():
    if request.method == "POST":
        username = request.form["name"]
        password = request.form["password"]
        print(username, password)
        if username and password:
            new_user = users(username, password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for("home"))
    return render_template("account.html")

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
