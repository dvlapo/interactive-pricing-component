const range = document.querySelector(".slider");
const price = document.querySelector("#price");
const billingPeriod = document.querySelector("#period");
const toggle = document.querySelector("#toggle");
const pageViews = document.querySelector("#pageviews");
const slider = document.querySelector(".slider");

let noOfPageViews = "100k";
let pricePerMonth = 16;
let pricePerYear;
let isMonthlyBilling = true;

function render() {
    pageViews.textContent = noOfPageViews;

    if (isMonthlyBilling) {
        billingPeriod.textContent = "/ month";
        price.textContent = pricePerMonth;
    } else {
        billingPeriod.textContent = "/ year";
        price.textContent = pricePerYear;
    }
}
render();

toggle.addEventListener("change", (event) => {
    isMonthlyBilling = !isMonthlyBilling;

    if (isMonthlyBilling) {
        billingPeriod.textContent = "/ month";
    } else {
        billingPeriod.textContent = "/ year";
        calcutateDiscount();
    }
    render();
});

range.addEventListener("input", (event) => {
    const val = event.target.value;

    if (val == 0) {
        noOfPageViews = "10k";
        pricePerMonth = 8;
        slider.style.setProperty("--track-width", "0%");
    } else if (val == 25) {
        noOfPageViews = "50k";
        pricePerMonth = 12;
        slider.style.setProperty("--track-width", "25%");
    } else if (val == 50) {
        noOfPageViews = "100k";
        pricePerMonth = 16;
        slider.style.setProperty("--track-width", "50%");
    } else if (val == 75) {
        noOfPageViews = "500k";
        pricePerMonth = 24;
        slider.style.setProperty("--track-width", "75%");
    } else if (val == 100) {
        noOfPageViews = "1M";
        pricePerMonth = 36;
        slider.style.setProperty("--track-width", "100%");
    }

    calcutateDiscount();
    render();
});

function calcutateDiscount() {
    pricePerYear = pricePerMonth * 12;
    const discount = pricePerYear * 0.25;
    pricePerYear = pricePerYear - discount;
}
