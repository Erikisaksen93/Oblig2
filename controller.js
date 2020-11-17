    // controller

    function selectedBar (barNo) {
        // console.log(barNo)
        chosenBar = barNo === chosenBar ? null : barNo;
        if (chosenBar) {
            enableBar = '';
        } else {
            enableBar = 'disabled';
            chosenBar = 'none selected'
        }
        
        show();

    }

    function addBar() {
        if (inputValue > 10 || inputValue < 1) {
            alert('Select a value between 1-10')
        } else {
            numbers.push(inputValue);
            show();
        }
    }

    function changeBar() {
        bar = chosenBar;
        if (inputValue > 10 || inputValue < 1) {
            alert('Select a value between 1-10')
        } else {
        numbers.splice(chosenBar - 1, 1, parseInt(inputValue));
        show();
        }
    }

    function removeBar() {
        bar = chosenBar;
        numbers.splice(chosenBar - 1, 1)
        show();
    }