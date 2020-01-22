export const combineColors = (color1:string, color2:string):string => {
    let c1:Array<string> = color1.replace("#", '').match(/.{1,2}/g) || ["00","00","00"];
    let c2:Array<string> = color2.replace("#", '').match(/.{1,2}/g) || ["00","00","00"];

    const combined = c1
    .map((c, i) => { 
        const val = (Math.round((parseInt(c, 16) + parseInt(c2[i], 16))/2)).toString(16);
        return val.length==2 ? val : val+"0";
    })
    .reduce((accum:string, curr:string) => accum+curr);
    return `#${combined}`

}