


angular.module('formlist', [])
    .controller('formlistController', function($scope) {
        //i could change every todoList to $scope, but that's less good
        let todoList = this;
        
        todoList.add = function() {
            let tr = `<tr><td>#0</td><td>#1</td><td>#2</td></tr>`
            document.querySelectorAll('input').forEach( (e,i) => tr = tr.replace('#'+i, e.value) )
            document.querySelector('tbody').innerHTML += tr;
        };

        todoList.noDigits = function noDigits(ev){ return testDigits(ev, false) }
        todoList.onlyDigits = function onlyDigits(ev){ return testDigits(ev, true) }
        function testDigits(e, allow){
            if (
                // Allow: Delete, Backspace, Tab, Escape, Enter
                [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || 
                // Allow: Ctrl + A/C/V/ X
                ( [65, 67, 86, 88].indexOf(e.keyCode) !== -1 && e.ctrlKey ) || 
                // Home, End, Left, Right
                (e.keyCode >= 35 && e.keyCode <= 39) 
            ) {
                return;  // let it happen, don't do anything
            }

            if (/^\d+$/.test(e['key']) != allow) {
                e.preventDefault();
            }
        }
    });

    