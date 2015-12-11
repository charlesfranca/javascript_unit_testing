describe("first test with jasmine-jquery", function(){
	var $el;

	beforeEach(function(){
		jasmine.getFixtures().fixturesPath = 'spec/fixtures/'
		$el = $("<div></div>");
	})

	function callAjax(){
		$.ajax({
			url: "teste",
			data: function(){

			},
			success:function(data){
				$el.html(data)
			}, error: function(){

			}
		});
	}

	it("should get div text", function(){
		$el.addClass('sandbox');
		spyOn($, "ajax");

		callAjax();

		$.ajax.calls.mostRecent().args[0].success('<p>teste</p>');

		expect($el).toHaveClass('sandbox')
		expect($el.find('p').length).toEqual(1)
	})
})