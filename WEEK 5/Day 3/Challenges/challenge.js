const API_KEY = 'e6783320a97774988d7d6a94';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');
const resultDiv = document.getElementById('result');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');

async function fetchCurrencies() {
    try {
        const response = await fetch(`${BASE_URL}/${API_KEY}/codes`);
        const data = await response.json();
        
        if (data.result === 'success') {
            return data.supported_codes;
        }
        throw new Error('Failed to fetch currencies');
    } catch (error) {
        showError('Error loading currencies. Please try again later.');
        return [];
    }
}

async function populateSelects() {
    const currencies = await fetchCurrencies();
    
    currencies.forEach(([code, name]) => {
        const option = new Option(`${code} - ${name}`, code);
        fromSelect.add(option.cloneNode(true));
        toSelect.add(option);
    });

    fromSelect.value = 'USD';
    toSelect.value = 'EUR';
}

async function convertCurrency() {
    const amount = amountInput.value;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    showLoading();
    hideError();

    try {
        const response = await fetch(
            `${BASE_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`
        );
        const data = await response.json();

        if (data.result === 'success') {
            const result = data.conversion_result;
            resultDiv.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        } else {
            throw new Error('Conversion failed');
        }
    } catch (error) {
        showError('Error converting currency. Please try again.');
    } finally {
        hideLoading();
    }
}

function switchCurrencies() {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    if (resultDiv.textContent) convertCurrency();
}

function showLoading() {
    loadingDiv.classList.remove('hidden');
    resultDiv.textContent = '';
}

function hideLoading() {
    loadingDiv.classList.add('hidden');
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
}

function hideError() {
    errorDiv.classList.add('hidden');
}

convertBtn.addEventListener('click', convertCurrency);
switchBtn.addEventListener('click', switchCurrencies);
amountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertCurrency();
});

populateSelects();