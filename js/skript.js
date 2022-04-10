$(document).ready(function() {
					
    $("#edit").click(function(){
			$('.summernote').summernote();
			$("#edit").hide();
			$("#save").show();
			$('.summernote').summernote('code', $("#opis").html());
	});
		
	$("#save").click(function(){
		bootbox.confirm({
			size: "small",
			message: "Da li ste sigurni da zelite da sacuvate promene?",
			callback: function(result) { 
				if(result)
				{
					var markupStr = $('.summernote').summernote('code');
					$("#opis").html(markupStr);
				}
				$("#edit").show();
				$("#save").hide();
				$('.summernote').summernote('destroy');
				$('.summernote').hide();
			}
		})
	});
	
	$("#save").hide();
});
