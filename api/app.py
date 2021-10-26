from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)


@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template('index.html')


@app.route("/services-events", methods=['POST', 'GET'])
def services_events():
    return render_template('services.html')


@app.route("/research-articles", methods=['POST', 'GET'])
def research_articles():
    return render_template('blog-home.html')


@app.route("/about", methods=['POST', 'GET'])
def about():
    return render_template('about.html')


@app.route("/contact", methods=['POST', 'GET'])
def contact():
    return render_template('contact.html')


@app.route("/blog-posts/animal-abuse-serial-killers", methods=['POST', 'GET'])
def animal_abuse_serial_killers():
    return render_template('blog-posts/animal-abuse-serial-killers.html')


@app.route("/blog-posts/the-forced-life", methods=['POST', 'GET'])
def the_forced_life():
    return render_template('blog-posts/the-forced-life.html')


@app.route("/blog-posts/eternal-captivity-1", methods=['POST', 'GET'])
def eternal_captivity_1():
    return render_template('blog-posts/eternal-captivity-1.html')
