# Pain & Gain Checkout Payment Form

## Project Overview

Pain & Gain Checkout Payment Form is a responsive multi-step checkout application designed for gym membership subscriptions. The application provides a smooth and user-friendly payment experience, allowing users to select a gym package, enter their personal information, provide billing details, choose a payment method, and confirm their purchase before completing payment.

The project focuses on modern UI/UX principles, responsive design, form validation, and a structured checkout flow similar to real-world SaaS and fitness membership platforms.

---

## User Flow

### Step 1: Package Selection & Checkout Summary

Users begin by selecting their preferred gym membership package:

* Starter Package
* Pro Package
* Elite Package

The checkout summary automatically updates based on the selected package and displays the total subscription cost.

### Step 2: Personal Information

Users enter their contact details:

* Full Name
* Email Address
* Phone Number

All fields are validated with helpful inline error messages.

### Step 3: Billing Address

Users provide their billing information:

* Street Address
* City
* Country
* ZIP Code

Validation ensures all required fields are completed correctly.

### Step 4: Payment Details

Users enter their payment information:

* Card Holder Name
* Credit/Debit Card Number
* Expiry Date
* CVV

A live card preview updates as users type their payment information.

### Step 5: Confirmation

Users review all submitted information, including:

* Selected Membership Package
* Personal Information
* Billing Address
* Payment Summary

Before proceeding with payment, users can return to previous steps to make changes.

### Payment Processing

When the user submits payment:

* A loading state is displayed.
* The application simulates payment processing.
* A success or failure screen is shown based on the payment result.

---

## Features

* Multi-step checkout process
* Dynamic gym package selection
* Responsive design for desktop, tablet, and mobile devices
* Real-time form validation
* Inline validation messages
* Live credit card preview
* Checkout summary updates
* Confirmation screen before payment
* Loading state during payment processing
* Success and failure handling
* Local storage support for saving progress
* Modern SaaS-inspired UI/UX design

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap 5
* Font Awesome

---

## How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.

No additional installation or build tools are required.

---

## Project Goal

The purpose of this project is to demonstrate frontend development skills, including user interface design, form validation, responsive layouts, state management, and creating a seamless checkout experience for fitness membership subscriptions.
