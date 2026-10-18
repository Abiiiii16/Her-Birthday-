from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Set your 4-digit PIN here
PASSWORD = "1432"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/password")
def password():
    return render_template("password.html")


@app.route("/check", methods=["POST"])
def check():

    entered = request.form["password"]

    if entered == PASSWORD:
        return redirect(url_for("intro"))   # Go to the movie intro first

    return render_template(
        "password.html",
        error="❌ Wrong PIN ❤️"
    )


# ==========================
# Movie Intro Page
# ==========================
@app.route("/intro")
def intro():
    return render_template("intro.html")


# ==========================
# Birthday Surprise Page
# ==========================
@app.route("/surprise")
def surprise():
    return render_template("surprise.html")


if __name__ == "__main__":
    app.run(debug=True)