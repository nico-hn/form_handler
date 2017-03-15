"use strict";

let parseTSV = function(tsv) {
    let lines = tsv.split(/\r?\n/).filter(line => line !== '');
    return lines.map(line => line.split("\t"));
};

exports.parseTSV = parseTSV;