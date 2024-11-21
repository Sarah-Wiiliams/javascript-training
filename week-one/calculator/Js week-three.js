


// let phoneNum = "9 digits"

// if phoneNum {
//     "650", "651", "652", "653", "654", "67", "68"
// }
// return "MTN"




// "650", "651", "652", "653", "654", "67", "68"
// return "MTN"

// if (phoneNum.startswith(("655", "656", "657", "658", "659", "69"))) {
[]
//     return "ORANGE"
// }

// if phoneNum.startswith("66"):
//     return "NEXTTEL"
// if phoneNum.startswith("62"):
//     return "Camtel"




// // python

// if 1 > 0:
//     return '1 is greater than 0'


// // javascript
// if (1 > 0) return '1 is greater than 0'


// if (1 > 0) {
//     return '1 is greater than 0'
// }


function identifyCarrier(phoneNumber) {
    // This function is to say a phone number must have 9 digits
    if (typeof phoneNumber !== 'string' || phoneNumber.length !== 9) {
        return 'Invalid phone number. It must be a string with 9 digits.';
    }

    // Check the prefixes for each carrier
    const mtnPrefixes = ('650', '651', '652', '653', '654', '67', '68');
    const orangePrefixes = ('655', '656', '657', '658', '659', '69');
    const nexttelPrefixes = ('66', '61');
    const camtelPrefixes = ('621');

    // For MTN
    for (const prefix of mtnPrefixes) {
        if (phoneNumber.startsWith(prefix)) {
            return 'MTN';
        }
    }

    // For Orange
    for (const prefix of orangePrefixes) {
        if (phoneNumber.startsWith(prefix)) {
            return 'Orange';
        }
    }

    // For Nexttel
    for (const prefix of nexttelPrefixes) {
        if (phoneNumber.startsWith(prefix)) {
            return 'Nexttel';
        }
    }

    // For Camtel
    for (const prefix of camtelPrefixes) {
        if (phoneNumber.startsWith(prefix)) {
            return 'Camtel';
        }
    }

    return 'Unknown carrier';
}


console.log(identifyCarrier('696589205'));


// mkdir week-three. take note! this is used to create a new file directory on the terminal 
// also helps you to automatically run your file on the terminal