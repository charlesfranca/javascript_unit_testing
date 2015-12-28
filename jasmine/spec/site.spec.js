describe("first test with jasmine-jquery", function(){
	beforeEach(function(){
		jasmine.getFixtures().fixturesPath = 'spec/fixtures/';
		loadFixtures('init.html');
	});

	it("should p be appended to div.sandbox", function(){
		spyOn($, "ajax");
		bpf.callAjax();
		$.ajax.calls.mostRecent().args[0].success('<p>teste</p>');
		expect($('.sandbox').find('p').length).toEqual(1)
	});
});