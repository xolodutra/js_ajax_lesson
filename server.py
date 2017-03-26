from flask import Flask, render_template, jsonify

my_flask_app = Flask(__name__)


@my_flask_app.route("/")
def index():
    return render_template('index.html')


@my_flask_app.route('/get-result/', methods=['GET'])
def result():
    return render_template('result.html')


@my_flask_app.route('/get-result-json/', methods=['GET'])
def result_js():
    data = [("Вася", "30", "$ 7830",),
            ("Маша", "26", "$ 4830",),
            ("Петя", "5", "$ 210",)]
    return jsonify(sales=data)

if __name__ == "__main__":
    my_flask_app.run(debug=True)
