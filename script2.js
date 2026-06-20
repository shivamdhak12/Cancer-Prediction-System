function predictCancer() {

    const data = {
        Age: parseInt(document.getElementById("age").value),
        Gender: parseInt(document.getElementById("gender").value),
        BMI: parseFloat(document.getElementById("bmi").value),
        Smoking: parseInt(document.getElementById("smoking").value),
        GeneticRisk: parseInt(document.getElementById("geneticRisk").value),
        PhysicalActivity: parseFloat(document.getElementById("physicalActivity").value),
        AlcoholIntake: parseFloat(document.getElementById("alcoholIntake").value),
        CancerHistory: parseInt(document.getElementById("cancerHistory").value)
    };

    document.getElementById("loading").style.display = "block";
    document.getElementById("result").innerHTML = "";

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById("loading").style.display = "none";

        if(data.error){
            document.getElementById("result").innerHTML =
                `<div class="danger">${data.error}</div>`;
            return;
        }

        if(data.prediction === "Cancer Detected"){

            document.getElementById("result").innerHTML =
            `
            <div class="danger">
                <h2>⚠ Cancer Detected</h2>
                <p>Risk Score: ${data.risk_percentage}%</p>
                <p>${data.recommendation}</p>
            </div>
            `;
        }
        else{

            document.getElementById("result").innerHTML =
            `
            <div class="success">
                <h2>✅ No Cancer</h2>
                <p>Risk Score: ${data.risk_percentage}%</p>
                <p>${data.recommendation}</p>
            </div>
            `;
        }

    })
    .catch(error => {

        document.getElementById("loading").style.display = "none";

        document.getElementById("result").innerHTML =
            "<div class='danger'>Server Error</div>";

        console.log(error);
    });
}