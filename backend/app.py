from flask import Flask

app = Flask(__name__)

@app.route('/health')
def health():
    print("JS script working")
    return "Backend Running"

if __name__ == '__main__':
    app.run()