var deposit;
var name;

$(".newDeposit").click(function() {
    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    deposit = parseInt(deposit);
    $(".ledger").append("<p>" + name + "</p><p>" + "$" +deposit + "</p>");
});

var depositarr=[];
var namearr=[];
var number;

$(".newDeposit").click(function(){
    depositarr.push(deposit);
    number = depositarr.length;
        $(".number").text("交易数量:" + number);
    console.log(depositarr);
    var total = 0;
    depositarr.forEach(function(price) {
        total=total+price;
    });
    $(".total").text("存款总额: "+total);
});

$(".update").click(function(){
    alert("Your last depsoit amount was " + deposit + " " + "by" + " " + name);
});
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   