const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "BRL",
    style: "currency" 
})

function formatCurrency(value: number): string {
    return CURRENCY_FORMATTER.format(value);
}


export default formatCurrency;