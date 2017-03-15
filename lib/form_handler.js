"use strict";

class FormHandler {
    static parseTSV(tsv) {
	let lines = tsv.split(/\r?\n/).filter(line => line !== '');
	return lines.map(line => line.split("\t"));
    }

    static readTSVFile(path) {
	let tsv = this.fs.readFileSync(path, 'utf8').toString();
	return FormHandler.parseTSV(tsv);
    }
};

FormHandler.fs = require('fs');

exports.FormHandler = FormHandler;
