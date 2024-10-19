from flask import Flask, render_template
app = Flask(__name__)


def get_social_media_data():
    return {
        'instagram_followers': 1000,
        'twitter_followers': 1500
    }

@app.route('/')
def dashboard():

    social_media_data = get_social_media_data()
    return render_template('dashboard.html', data=social_media_data)

if __name__ == '__main__':
    app.run(debug=True)




