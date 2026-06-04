import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

# dump-write load-read , oickle to load

flask_app = Flask(__name__)
CORS(flask_app)
model = pickle.load(open("model.pkl", "rb"))

@flask_app.route("/")
def Home():
    return "Crop predictor api is running"
# render_template("App.js")
@flask_app.route("/predict", methods = ["POST"])
def predict():
    # float_feature = [float(x) for x in request.form.values()]
    # features = [np.array(float_feature)]

    data = request.json   # React sends JSON

    features = np.array([[
        float(data["nitrogen"]),
        float(data["phosphorus"]),
        float(data["potassium"]),
        float(data["temperature"]),
        float(data["humidity"]),
        float(data["ph"]),
        float(data["rainfall"])
    ]])

    prediction = model.predict(features)[0]

    return jsonify({
        "prediction": prediction
    })

   # return render_template("index.html", prediction_text = "The Predicted Crop is {}".format(prediction))

if __name__=="__main__":
    flask_app.run(debug=True)
