export function copyReceiptNumber(text) {
        navigator.clipboard.writeText(text).then(function () {
            console.log('Copying to clipboard was successful!');
        }, function (err) {
            console.error('Could not copy text: ', err);
        });
}

window.copyReceiptNumber = copyReceiptNumber;
