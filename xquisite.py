from flask import Flask, render_template, request, session, jsonify, url_for, redirect, json
from zenora import APIClient
from config import CLIENT_SECRET, OAUTH_URL, REDIRECT_URI, TOKEN
import mysql.connector
import MySQLdb.cursors
import mysql
from flask_mysqldb import MySQL

app = Flask(__name__)
app.secret_key = "532e704332680b732da17c573fe546a55a4c1d854f468f5b6deeefe38b4a7ead"
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'toor'
app.config['MYSQL_DB'] = 'exousía'
client = APIClient(TOKEN, client_secret=CLIENT_SECRET)
mysql = MySQL(app)

@app.route('/ajax/post')
def ajaxpost():
    name = request.form.get("signup-name")
    email = request.form.get("signup-email")
    password = request.form.get("signup-password")
    address = request.form.get("signup-address")
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("INSERT INTO exous")

@app.route('/', methods=["GET", "POST"])
def index():
    print(CLIENT_SECRET, OAUTH_URL, REDIRECT_URI, TOKEN)
    print(OAUTH_URL)
    return render_template("index.html", OAUTH_URL = OAUTH_URL)

@app.route("/oauth/callback")
def callback():
    code = request.args['code']
    access_token = client.oauth.get_access_token(code, REDIRECT_URI).access_token
    session['token'] = access_token
    return redirect("/discord-login")

@app.route('/logout')
def logout():
    session.pop("access_token", None)
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('name', None)
    session.pop('password', None)
    session.pop('email', None)
    session.pop('nickname', None)
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)