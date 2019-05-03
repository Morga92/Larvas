$(document).ready(function()
	{
		$("#mezcla1").focus();
		$("#mezcla1").select();

		$("#mezcla1").change(function() {
	 	$("#mezcla2").focus();
 		$("#mezcla2").select();
 		});

 		$("#mezcla2").change(function() {
	 	$("#mezcla3").focus();
 		$("#mezcla3").select();
 		});

 		$("#mezcla3").change(function() {
	 	$("#mezcla4").focus();
 		$("#mezcla4").select();
 		});

		$("#calcular").click(function() {
		
		var mez1 = $("#mezcla1").val();
		var mez2 = $("#mezcla2").val();
		var mez3 = $("#mezcla3").val();
		var mez4 = $("#mezcla4").val();

		var xmez1 = mez1 * 200;
		var ymez1 = String(1000000/xmez1);
		var ymez1x = ymez1.substring(0,5);

		var xmez2 = mez2 * 200;
		var ymez2 = String(1000000/xmez2);
		var ymez2x = ymez2.substring(0,5);

		var xmez3 = mez3 * 200;
		var ymez3 = String(1000000/xmez3);
		var ymez3x = ymez3.substring(0,5);

		var xmez4 = mez4 * 200;
		var ymez4 = String(1000000/xmez4);
		var ymez4x = ymez4.substring(0,5);

		var text1 = "====LARVAS/KG===="+"<br/>MZ #1: "+ xmez1 + "<br/> MZ #2: "+xmez2
		+ "<br/> MZ #3: "+xmez3+"<br/> MZ #4: "+xmez4;
		
		var text2 = "====PESO/LARVA===="+"<br/>MZ #1: "+ ymez1x + "<br/> MZ #2: "+ymez2x
		+ "<br/> MZ #3: "+ymez3x+"<br/> MZ #4: "+ymez4x;
		

		$("#res1").append(text1);
		$("#res2").append(text2);
		});

		$("#nuevo").click(function() {
		$("#res1").empty();
		$("#res2").empty();
		$(":input").val("");
		$("#mezcla1").focus();
		});
	});