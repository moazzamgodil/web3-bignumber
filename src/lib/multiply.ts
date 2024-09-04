export const multiply = (val: string, b: number) => {
    if (b < 2) {
        return val;
    }
    const a = val.toString();
    let v1: string[] | string = a.split(".");
    let len = v1.length > 1 ? b - v1[1].length : b;
    let i = 0;
    if (len > 0) {
        while (i < len) {
            v1.push("0");
            i++;
        }
    } else if (len < 0) {
        let v1_2 = v1[1].split("");
        while (i > len) {
            v1_2.pop();
            i--;
        }
        v1[1] = v1_2.join("");
    }

    v1 = v1.join("");
    const v2 = v1.split("");
    while (true) {
        if (v2[0] == "0") {
            v2.shift();
            i++;
        } else {
            break;
        }
    }
    return v2.join("");
};