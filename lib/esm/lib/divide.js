export const divide = (val, b) => {
    if (b < 2) {
        return val;
    }
    let a = val.toString();
    let chkDec = a.split(".");
    if (chkDec.length > 1) {
        a = chkDec[0];
    }
    let len = a.length;
    let i = 0;
    while (i < b) {
        len = len - 1;
        i++;
    }
    let v1 = a.substring(0, len);
    let v2 = a.substring(len, a.length);
    if (len <= 0) {
        let point = len * -1;
        v1 = "0.";
        i = 0;
        while (i < point) {
            v1 += "0";
            i++;
        }
    }
    else if (Number(v2) !== 0) {
        v1 = v1 + ".";
    }
    v2 = v2.split("");
    while (true) {
        if (v2[v2.length - 1] !== "0") {
            break;
        }
        v2.pop();
    }
    v2 = v2.join("");
    return v1 + v2;
};
//# sourceMappingURL=divide.js.map