var app = angular.module('webApplication', ['ui.mask']);
app.run(function ($rootScope) { });
app.controller("Controller", function ($scope) {
    $scope.data = [];
    $scope.questionIndex = 1;
    $scope.survey = [
        {"id":1,"question":"What is your current monthly income?","answer":["<RM3,000 per month reply","between RM3,000 to RM4,999 per month","between RM5,000 to RM9,999 per month reply","above RM10,000 per month reply "]},
        {"id":2,"question":"What is your current employment status?","answer":["government sector employment","salaried private sector employment","self-employed","unemployed"]},
        {"id":3,"question":"Would you consider shortening your loan/financing tenure in order to reduce your total interest/financing cost?","answer":["Yes","No"]},
        {"id":4,"question":"Please indicate your preference on the repayment plans?","answer":["increase instalments ","bullet repayment (A lump sum payment of remaining outstanding balance to be paid at the end of the loan/ financing tenure)","self-employed reply","unemployed reply"]},
        {"id":5,"question":"Please provide the reason?","answer":["high financial commitments","prefer to retain current cash flow","uncertainty of future income (e.g., potential loss of job or closure of employer’s company)","individual/household income has been permanently reduced due to COVID-19 pandemic"]},
        {"id":6,"question":"When would you consider shortening your loans/ financing tenure in order to reduce your total interest/financing cost?","answer":["in the next 6-12 months","in the next 12-24 months","after 24 months","despite the higher cost of borrowing, I would like to maintain my current repayment terms for the foreseeable future"]}
    ]
    $scope.next = function(form){
        $scope.sumitted = true;
        if(form.$valid){
            $scope.questionIndex++
        }else{
            alert('Selection is required')
        }
    }
    $scope.prev = function(){
        $scope.questionIndex--
    }

})