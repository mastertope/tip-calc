// console.log('Connected!');

//Initialization
let bill_val = 0.00;
let customer_val = 0;
let selectedTip_val = 0.00;
let tipPerPerson_val = 0.00;
let tipTotalPerPerson_val = 0.00;

const bill = document.getElementById('bill');
const customer = document.getElementById('customer');
const selectedTip = document.getElementById('tipOptions');
const tipPerPerson = document.getElementById('tipPerPerson');
const tipTotalPerPerson = document.getElementById('tipTotalPerPerson');

bill.value = '';
customer.value = '';
tipPerPerson.value = '';
tipTotalPerPerson.value = '';

////////////////////////////////////////////////////////////////

//functions 
const computeTip = () => {
    if (customer_val !== 0.00) {
        tipPerPerson_val = parseFloat((bill_val * (selectedTip_val / 100)) / customer_val);
    }
};

const computeTipPerPerson = () => {
    if (customer_val !== 0.00 && tipPerPerson_val !== undefined) {
        tipTotalPerPerson_val = parseFloat((bill_val + tipPerPerson_val) / customer_val);
    }
};

const displayValues = () => {
    // console.log(`Bill: ${bill_val}`);
    // console.log(`Customer: ${customer_val}`);
    // console.log(`Selected Tip: ${selectedTip_val}`);
    // console.log(`Tip per person: ${tipPerPerson_val}`);
    // console.log(`Tip Total per person: ${tipTotalPerPerson_val}`);
    tipPerPerson.value = tipPerPerson_val !== undefined ? `$ ${tipPerPerson_val.toString().match(/^-?\d+(?:\.\d{0,2})?/)}` :
        '$ 0.00';
    tipTotalPerPerson.value = tipTotalPerPerson_val !== undefined ? `$ ${tipTotalPerPerson_val.toString().match(/^-?\d+(?:\.\d{0,2})?/)}` :
        '$ 0.00';
};

////////////////////////////////////////////////////////////////


//events
bill.addEventListener('input', () => {

    bill_val = parseFloat(bill.value) &&
        parseFloat(bill.value) !== undefined &&
        parseFloat(bill.value) !== NaN ? parseFloat(bill.value) : 0.00;

    computeTip();
    computeTipPerPerson();
    displayValues();
});

customer.addEventListener('input', () => {
    customer_val = parseFloat(customer.value) &&
        parseFloat(customer.value) !== undefined &&
        parseFloat(customer.value) !== NaN ? parseFloat(customer.value) : 0.00;
    computeTip();
    computeTipPerPerson();
    displayValues();
});

selectedTip.addEventListener('click', (e) => {
    selectedTip_val = parseFloat(e.target.name) ? parseFloat(e.target.name) : 0.00;
    computeTip();
    computeTipPerPerson();
    displayValues();
});

////////////////////////////////////////////////////////////////