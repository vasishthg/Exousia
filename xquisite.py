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
            cur.execute("SELECT id FROM users WHERE email = %s", [uemail])
            uid = cur.fetchone()
            cur.execute("INSERT INTO cart VALUES(NULL, %s, '[]')", [str(uid['id'])])
            mysql.connection.commit()
            cur.execute("SELECT * FROM users WHERE email = %s", [uemail])
            account = cur.fetchone()
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
    if 'loggedin' in session:
        email = session['email']
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("SELECT * FROM users WHERE email = %s", [email])
        account = cur.fetchone()
        if request.method == "POST" and "acc-name" in request.form in request.form or "acc-password":
            acc_email = request.form.get("acc-email")
            acc_name = request.form.get("acc-name")
            acc_password = request.form.get("acc-password")
            cur.execute("UPDATE users SET name = %s, password = %s WHERE email = %s", (acc_name, acc_password ,acc_email))
            mysql.connection.commit()
        if request.method == "POST" and "cart-productid" in request.form:
            productid = request.form.get("cart-productid")
            cur.execute("SELECT id FROM users WHERE email = %s", [account['email']])
            userid = cur.fetchone()['id']
            cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cur.execute("SELECT productsid FROM cart WHERE userid = %s", [userid])
            productsid = cur.fetchone()['productsid']
            productsid = list(productsid)
            if str(productid) not in productsid:
                productsid.append(productid)
                productsid.remove('[')
                productsid.remove(']')
                cur.execute("UPDATE cart SET productsid = %s WHERE userid = %s", (str(productsid), userid))
                mysql.connection.commit()
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("SELECT id FROM users WHERE email = %s", (session['email'],))
        userid = str(cur.fetchone()['id'])
        cur.execute("SELECT productsid FROM cart WHERE userid = %s", [userid])
        productsid = str(cur.fetchone()['productsid'])
        products = []
        productsid = list(productsid)
        for productid in productsid:
            if productid != '[' and productid != ']' and productid != ','  and productid != ' '  and productid != "'" and productid != '"' :
                cur.execute("SELECT * FROM product WHERE id = %s", (productid))
                productdetails = cur.fetchone()
                products.append([productdetails['name'], productdetails['price']])
        email = session['email']
        print(products)
        return render_template("index.html", time = cur_time, oauth_url = OAUTH_URL, details = account, products = products)
    #Discord login  
    if 'token' in session:
        bearer_client = APIClient(session.get('token'), bearer=True)
        current_user = bearer_client.users.get_current_user()
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("SELECT * FROM users WHERE discordid = %s", [str(current_user.id)])
        details_dc = cur.fetchone()
        if request.method == "POST" and "acc-name" in request.form in request.form or "acc-password":
            acc_email = request.form.get("acc-email")
            acc_name = request.form.get("acc-name")
            acc_password = request.form.get("acc-password")
            cur.execute("UPDATE users SET name = %s, password = %s WHERE email = %s", (acc_name, acc_password ,acc_email))
            mysql.connection.commit()
        if request.method == "POST" and "cart-productid" in request.form:
            productid = request.form.get("cart-productid")
            cur.execute("SELECT id FROM users WHERE discordid = %s", [current_user.id])
            userid = cur.fetchone()['id']
            cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cur.execute("SELECT productsid FROM cart WHERE userid = %s", [userid])
            productsid = cur.fetchone()['productsid']
            productsid = list(productsid)
            if str(productid) not in productsid:
                productsid.append(productid)
                productsid.remove('[')
                productsid.remove(']')
                cur.execute("UPDATE cart SET productsid = %s WHERE userid = %s", (str(productsid), userid))
                mysql.connection.commit() 
        return render_template("index.html", time = cur_time, oauth_url = OAUTH_URL, current_user = current_user, details = details_dc)
   
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
        cur.execute("INSERT INTO users VALUES(NULL, NULL, NULL, NULL, %s, %s)", (current_user.id, current_user.username))
        mysql.connection.commit()
        cur.execute("SELECT id FROM users WHERE discordid = %s", [str(current_user.id)])
        uid = cur.fetchone()
        cur.execute("INSERT INTO cart VALUES(NULL, %s, '[]')", [uid['id']])
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