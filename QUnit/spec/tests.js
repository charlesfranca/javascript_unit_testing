module('Leiloes', {
	setup: function(){

	}, 
	teardown: function(){

	}
});

test('shold element called #div1 exist', function(){
	strictEqual($("#div1").length, 1);
});

test('shold add 1 item with class ".item"', function(){
	bpf.createElement();
	strictEqual($("#div1 .item").length, 1)
})