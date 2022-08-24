from time import sleep
from flask import Flask, render_template, request, session, jsonify, url_for, redirect, json
import datetime
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
# db = mysql.connector.connect(host="localhost", user = "root", password = "toor", database = "exousía")
client = APIClient(TOKEN, client_secret=CLIENT_SECRET)
mysql = MySQL(app)

# cur_time = {"time":(time.strftime("%H:%M"))}
@app.route('/', methods=["GET", "POST"])
def index():
    time = datetime.datetime.now()
    cur_time = time.strftime('%H:%M')
    # main = ((requests.get('http://127.0.0.1:5000/time')).json())['time']
    # print(main)
    msg = ''
    if request.method == "POST" and "su-name" in request.form and "su-password" in request.form and "su-email" in request.form and "su-nick" in request.form:
        uname = request.form.get("su-name")
        upass = request.form.get("su-password")
        uemail = request.form.get("su-email")
        unick = request.form.get("su-nick")
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("SELECT * FROM users WHERE email = %s", [uemail])
        account = cur.fetchone()
        if account:
            msg = 'Account Exists'
        else:
            cur.execute("INSERT INTO users VALUES(NULL, %s, %s, %s, NULL, %s)", (uname, upass, uemail, unick))
            mysql.connection.commit()
            session['loggedin'] = True
            session['id'] = account['id']
            session['name'] = account['name']
            session['password'] = account['password']
            session['email'] = account['email']
            session['nickname'] = account['nickname']
            msg = 'Account registered.'
    if request.method == "POST" and "lo-email" in request.form and "lo-password" in request.form:
        uemail = request.form.get("lo-email")
        upass = request.form.get("lo-password")
        print(uemail)
        print(upass)
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("SELECT * FROM users WHERE email = %s AND password = %s", (uemail, upass))
        account = cur.fetchone()
        if account:
            session['loggedin'] = True
            session['id'] = account['id']
            session['name'] = account['name']
            session['password'] = account['password']
            session['email'] = account['email']
            session['nickname'] = account['nickname']
            return redirect('/')        
    if 'token' in session:
        bearer_client = APIClient(session.get('token'), bearer=True)
        current_user = bearer_client.users.get_current_user()
        return render_template("index.html", time = cur_time, oauth_url = OAUTH_URL, current_user = current_user)

    return render_template("index.html", time = cur_time, oauth_url = OAUTH_URL)

@app.route("/oauth/callback")
def callback():
    code = request.args['code']
    access_token = client.oauth.get_access_token(code, REDIRECT_URI).access_token
    session['token'] = access_token
    return redirect("/discord-login")

@app.route('/discord-login')
def dcauth():
    bearer_client = APIClient(session.get('token'), bearer=True)
    current_user = bearer_client.users.get_current_user()
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT * FROM users WHERE discordid = %s", [str(current_user.id)])
    account = cur.fetchone()
    if account:
        return redirect('/')
    else:
        print(current_user.email)
        cur.execute("INSERT INTO users VALUES(NULL, NULL, NULL, NULL, %s, %s)", (current_user.id, current_user.username))
        mysql.connection.commit()
    return redirect('/')

@app.route('/logout')
def logout():
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