// MUTABLE  CODE
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// MUTABLE  CODE
data => {
    for (let i = 0; i < data.length; i++) {
        data[i]['snippet'] = data[i]['targetName'];
        delete data[i]['targetName'];
        for (let j = 0; j < data[i].failingTapNeighbours.length; j++) {
            data[i].failingTapNeighbours[j]['snippet'] =
                data[i].failingTapNeighbours[j]['targetName'];
            delete data[i].failingTapNeighbours[j]['targetName'];
        }
    }
    return data;
};
formData => {
    return formData.map(tapTarget => {
        const { tagname, failingTapNeighbours } = tapTarget, rest = __rest(tapTarget, ["tagname", "failingTapNeighbours"]);
        return Object.assign(Object.assign({ snippet: tagname }, rest), { failingTapNeighbours: failingTapNeighbours.map(neighbor => {
                const { tagname } = neighbor, rest = __rest(neighbor, ["tagname"]);
                return Object.assign({ snippet: tagname }, rest);
            }) });
    });
};
console.log(this.formData(['tapTarget']));
