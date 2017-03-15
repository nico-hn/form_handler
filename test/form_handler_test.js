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
});

