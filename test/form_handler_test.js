"use strict";

var expect = require('chai').expect;
var FormHandler = require('../lib/form_handler');

describe('FormHandler', () => {
    describe('parseTSV', ()=> {
	it('expects to convert a TSV string into an array', () => {
	    let tsv = "first\tsecond\tthird\r\n1st\t2nd\t3rd\r\n1\t2\t3\r\n";
	    expect(FormHandler.parseTSV(tsv)).to.eql([
		['first', 'second', 'third'],
		['1st', '2nd', '3rd'],
		['1', '2', '3']
	    ]);
	});
    });

    describe('readTSVFile', () => {
	it('expects to read a TSV file and returns a nested array', () => {
	    let tsv = FormHandler.readTSVFile('./test_data/example.tsv');
	    expect(tsv).to.eql([
		['1', 'first', '1st'],
		['2', 'second', '2nd'],
		['3', 'third', '3rd']
	    ]);
	});
    });
});

