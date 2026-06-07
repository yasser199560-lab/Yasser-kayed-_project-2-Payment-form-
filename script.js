/* =========================
   CURRENT STEP
========================= */

let currentStep = 1;

/* =========================
   STEP NAVIGATION
========================= */

function goToStep(step) {

    if(step > currentStep){

        if(currentStep === 2){

            if(!validatePersonalInfo()){
                return;
            }
        }

        if(currentStep === 3){

            if(!validateAddress()){
                return;
            }
        }

        if(currentStep === 4){

            if(!validatePayment()){
                return;
            }
        }
    }

    document
    .querySelectorAll('.form-step')
    .forEach(section => {
        section.classList.remove('active');
    });

    document
    .getElementById(`step${step}`)
    .classList.add('active');

    updateStepper(step);

    currentStep = step;

    if(step === 5){
        generateReview();
    }

    saveFormData();
}

/* =========================
   UPDATE STEPPER
========================= */

function updateStepper(step){

    document
    .querySelectorAll('.step')
    .forEach(item => {
        item.classList.remove('active');
    });

    for(let i=1;i<=step;i++){

        document
        .getElementById(`indicator${i}`)
        .classList.add('active');
    }
}

/* =========================
   PERSONAL VALIDATION
========================= */

function validatePersonalInfo(){

    let valid = true;

    clearErrors();

    const name =
    document.getElementById("fullName").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    if(name.length < 3){

        showError(
            "nameError",
            "Please enter your full name (minimum 3 characters)."
        );

        valid = false;
    }

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){

        showError(
            "emailError",
            "Please enter a valid email address."
        );

        valid = false;
    }

    const phoneRegex =
    /^[0-9]{8,15}$/;

    if(!phoneRegex.test(phone)){

        showError(
            "phoneError",
            "Phone number must contain 8-15 digits."
        );

        valid = false;
    }

    return valid;
}

/* =========================
   ADDRESS VALIDATION
========================= */

function validateAddress(){

    let valid = true;

    const address =
    document.getElementById("address").value.trim();

    const city =
    document.getElementById("city").value.trim();

    const country =
    document.getElementById("country").value.trim();

    const zip =
    document.getElementById("zip").value.trim();

    if(address.length < 5){

        showError(
            "addressError",
            "Enter a valid street address."
        );

        valid = false;
    }

    if(city.length < 2){

        showError(
            "cityError",
            "Enter a valid city."
        );

        valid = false;
    }

    if(country.length < 2){

        showError(
            "countryError",
            "Enter a valid country."
        );

        valid = false;
    }

    if(zip.length < 3){

        showError(
            "zipError",
            "Enter a valid ZIP code."
        );

        valid = false;
    }

    return valid;
}

/* =========================
   PAYMENT VALIDATION
========================= */

function validatePayment(){

    let valid = true;

    const holder =
    document.getElementById("cardHolder").value.trim();

    const card =
    document.getElementById("cardNumber")
    .value.replace(/\s/g,'');

    const expiry =
    document.getElementById("expiry").value.trim();

    const cvv =
    document.getElementById("cvv").value.trim();

    if(holder.length < 3){

        showError(
            "holderError",
            "Enter card holder name."
        );

        valid = false;
    }

    if(card.length !== 16){

        showError(
            "cardError",
            "Card number must contain 16 digits."
        );

        valid = false;
    }

    const expiryRegex =
    /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

    if(!expiryRegex.test(expiry)){

        showError(
            "expiryError",
            "Format must be MM/YY."
        );

        valid = false;
    }

    if(cvv.length !== 3){

        showError(
            "cvvError",
            "CVV must contain 3 digits."
        );

        valid = false;
    }

    return valid;
}

/* =========================
   ERROR HANDLING
========================= */

function clearErrors(){

    document
    .querySelectorAll('.error')
    .forEach(error => {
        error.innerText = '';
    });
}

function showError(id,message){

    document
    .getElementById(id)
    .innerText = message;
}

/* =========================
   CREDIT CARD PREVIEW
========================= */

const cardNumberInput =
document.getElementById("cardNumber");

if(cardNumberInput){

    cardNumberInput.addEventListener(
        "input",
        function(){

            let value =
            this.value
            .replace(/\D/g,'');

            value =
            value.substring(0,16);

            value =
            value.replace(
                /(.{4})/g,
                '$1 '
            );

            this.value = value;

            document
            .getElementById("cardPreview")
            .innerText =
            value || "#### #### #### ####";
        }
    );
}

const holderInput =
document.getElementById("cardHolder");

if(holderInput){

    holderInput.addEventListener(
        "input",
        function(){

            document
            .getElementById("holderPreview")
            .innerText =
            this.value.toUpperCase()
            || "YOUR NAME";
        }
    );
}

const expiryInput =
document.getElementById("expiry");

if(expiryInput){

    expiryInput.addEventListener(
        "input",
        function(){

            document
            .getElementById("expiryPreview")
            .innerText =
            this.value || "MM/YY";
        }
    );
}

/* =========================
   REVIEW SCREEN
========================= */

function generateReview(){

    const html = `

        <h4>Personal Information</h4>

        <p>
        <strong>Name:</strong>
        ${document.getElementById("fullName").value}
        </p>

        <p>
        <strong>Email:</strong>
        ${document.getElementById("email").value}
        </p>

        <p>
        <strong>Phone:</strong>
        ${document.getElementById("phone").value}
        </p>

        <hr>

        <h4>Billing Address</h4>

        <p>
        ${document.getElementById("address").value},
        ${document.getElementById("city").value},
        ${document.getElementById("country").value}
        </p>

        <hr>

        <h4>Total</h4>

        <h2>$84 / Month</h2>
    `;

    document
    .getElementById("reviewContent")
    .innerHTML = html;
}

/* =========================
   SUBMIT PAYMENT
========================= */

function submitPayment(){

    const btn =
    document.getElementById("submitBtn");

    btn.disabled = true;

    btn.innerHTML =
    `
    <span class="spinner-border spinner-border-sm"></span>
    Processing...
    `;

    setTimeout(() => {

        document
        .querySelectorAll('.form-step')
        .forEach(step => {
            step.style.display='none';
        });

        document
        .querySelector('.stepper')
        .style.display='none';

        const success =
        Math.random() > 0.3;

        if(success){

            document
            .getElementById("successScreen")
            .style.display='block';

        }else{

            document
            .getElementById("failureScreen")
            .style.display='block';
        }

        localStorage.removeItem(
            "fitfuelCheckout"
        );

    },3000);
}

/* =========================
   SAVE DATA
========================= */

function saveFormData(){

    const data = {

        fullName:
        document.getElementById("fullName").value,

        email:
        document.getElementById("email").value,

        phone:
        document.getElementById("phone").value,

        address:
        document.getElementById("address").value,

        city:
        document.getElementById("city").value,

        country:
        document.getElementById("country").value,

        zip:
        document.getElementById("zip").value,

        cardHolder:
        document.getElementById("cardHolder").value
    };

    localStorage.setItem(
        "fitfuelCheckout",
        JSON.stringify(data)
    );
}

/* =========================
   LOAD DATA
========================= */

window.onload = function(){

    const data =
    JSON.parse(
        localStorage.getItem(
            "fitfuelCheckout"
        )
    );

    if(!data){
        return;
    }

    document.getElementById("fullName").value =
    data.fullName || '';

    document.getElementById("email").value =
    data.email || '';

    document.getElementById("phone").value =
    data.phone || '';

    document.getElementById("address").value =
    data.address || '';

    document.getElementById("city").value =
    data.city || '';

    document.getElementById("country").value =
    data.country || '';

    document.getElementById("zip").value =
    data.zip || '';

    document.getElementById("cardHolder").value =
    data.cardHolder || '';

    goToStep(1);
};

/* =========================
   AUTO SAVE
========================= */

document
.querySelectorAll('input')
.forEach(input => {

    input.addEventListener(
        'keyup',
        saveFormData
    );
});