from main import app
import main.views

if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=5000)