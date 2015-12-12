bpf = {
	callAjax: function(){
		$.ajax({
			url: "teste",
			data: function(){

			},
			success:function(data){
				$('.sandbox').append(data)
			}, error: function(){

			}
		});
	}
}