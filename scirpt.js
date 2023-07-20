const selectElements = document.querySelectorAll('.select__cantidad');
const priceElements = document.querySelectorAll('.span__price');
const totalElement = document.querySelector('.span__total');
const envioElement = document.querySelectorAll('.span__shipping');


function updateTotal(){
    let subtotal = 0;
    let total = 0;
    let envio = parseFloat(envioElement[0].textContent);

    priceElements.forEach((priceElement) => {
        subtotal += parseFloat(priceElement.textContent);
    });

    total = subtotal + envio;
    totalElement.textContent = total.toFixed(2);
}
selectElements.forEach((selectElement, index) => {
    const priceElement = priceElements[index];
    const price = parseFloat(priceElement.textContent);

    selectElement.addEventListener('change', (event) => {
        const selectedValue = parseInt(event.target.value);
        const totalPrice = selectedValue * price;
        priceElement.textContent = totalPrice.toFixed(2);
        updateTotal();
    });
});

updateTotal();


