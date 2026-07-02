// Create dataLayer if it doesn't exist
window.dataLayer = window.dataLayer || [];

// Get Form
const form = document.getElementById("consultationForm");

// Listen for Submit
form.addEventListener("submit", function (e) {

    // Stop page refresh
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const clinic = document.getElementById("clinic").value;
    const doctor = document.getElementById("doctor").value;
    const speciality = document.getElementById("speciality").value;
    const painType = document.getElementById("painType").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;
    const address = document.getElementById("address").value;
    const history = document.getElementById("history").value;

    // Push dataLayer Event
    window.dataLayer.push({

        event: "consultation_form_submitted",

        patient_name: name,
        phone_number: phone,
        email: email,
        age: age,
        gender: gender,
        clinic_preference: clinic,
        doctor: doctor,
        speciality: speciality,
        pain_area: painType,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        address: address,
        medical_history: history

    });

    // Show dataLayer in Console
    console.log("DataLayer Event:");
    console.log(window.dataLayer);

    // Hide Form
    form.style.display = "none";

    // Show Thank You Message
    document.getElementById("thankYou").style.display = "block";

});