    // hjelpevariable for både view og controller
    var contentDiv = document.getElementById('content');

    // model
    let numbers = [3, 4, 5, 6, 2];
    let chosenBar = 'none selected'; // Variabel for hvilken stolpe som er valgt
    let inputValue; // Variabel for hva som er skrevet i input-feltet
    let enableBar = 'disabled';
    let stroke = ''
    let bar;
    // view
    show();
    function show() {
        let svgInnerHtml = '';
        for (let i = 0; i < numbers.length; i++) {
            svgInnerHtml += createBar(numbers[i], i + 1);
        }
        contentDiv.innerHTML = `
            <svg id="chart" width="500" viewBox="0 0 80 60">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i>${chosenBar}</i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" />
            <button onclick="addBar()">Legg til stolpe</button>
            <button ${enableBar} onclick="changeBar()">Endre valgt stolpe</button><br />
            <button ${enableBar} onclick="removeBar()">Fjerne valgt stolpe</button>
            `;
    }

    function createBar(number, barNo) {
        const width = 8;
        const spacing = 2;
        let x = (barNo - 1) * (width + spacing);
        let height = number * 10;
        let y = 60 - height;
        let color = calcColor(1, 10, barNo);
        let stroke = chosenBar === barNo ? `stroke: black` : '';
        return `<rect id="${barNo}" width="${width}" height="${height}"
                            x="${x}" y="${y}" fill="${color}" style="${stroke}" onclick="selectedBar(${barNo})"></rect>`;              

    }

    function calcColor(min, max, val) {
        var minHue = 240, maxHue = 0;
        var curPercent = (val - min) / (max - min);
        var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
        return colString;
    }

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