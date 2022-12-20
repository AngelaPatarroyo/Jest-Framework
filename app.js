const fromDollarToYen = function (dollarValue) {
yenValue = dollarValue * 134.14;
return yenValue;
}

const fromEuroToDollar = function (euroValue) {
    dollarValue = euroValue * 1.06;
    return dollarValue;
}

const fromYanToPound = function (yanValue) {
    poundValue = yanValue * 0.0060;
    return poundValue;
}

export default { fromDollarToYen , fromEuroToDollar , fromYanToPound}