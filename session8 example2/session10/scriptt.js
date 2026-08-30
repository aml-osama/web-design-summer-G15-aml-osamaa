function looping(startNum, endNum, breakNum, contNum) {
    if (startNum === undefined || endNum === undefined || breakNum === undefined || contNum === undefined) {
        alert("Please enter all numbers");
        return;
    }

    for (var i = startNum; i <= endNum; i++) {
        if (i === breakNum) {
            break;
        }

        if (i === contNum) {
            continue;
        }

        console.log(i);
    }
}

looping(1,10,9,3);