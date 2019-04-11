var newCustomerNumber = 0
var takeANumber = function(katzDeli){
  
  newCustomerNumber ++;
  katzDeli.push(newCustomerNumber);
  var welcomeMessage = `Welcome. You are number ${newCustomerNumber}.`;
  return welcomeMessage;
};
let line = []
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))
  
var nowServing = function(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
    return 'There is nobody waiting to be served!';
  }
};

var currentLine = function(katzDeliLine){
  var message = "The line is currently";
  var customerArr = [];
  
  if(katzDeliLine.length > 0){
    katzDeliLine.forEach(function(element, index, array){
     customerArr.push(`${index + 1}. ${element}`);
    
    });
     var customerArrToo = customerArr.join(', ');
    return `${message}: ${customerArrToo}`;
  }else{
    return `${message} empty.`;
  }
};
