"use strict";

let fs = require('fs');

let parseTSV = function(tsv) {
    let lines = tsv.split(/\r?\n/).filter(line => line !== '');
    return lines.map(line => line.split("\t"));
};

let readTSVFile = function(path) {
    let tsv = fs.readFileSync(path, 'utf8').toString();
    return parseTSV(tsv);
};

exports.parseTSV = parseTSV;
exports.readTSVFile = readTSVFile;
