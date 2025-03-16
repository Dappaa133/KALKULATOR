function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function calculateResult() {
    try {
        let display = document.getElementById('display');
        let result = eval(display.value);
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (e) {
        alert('Kesalahan perhitungan!');
    }
}

function addToHistory(entry) {
    let historyList = document.getElementById('history');
    let listItem = document.createElement('li');
    listItem.className = 'history-item';
    listItem.textContent = entry;
    historyList.prepend(listItem);
}

function clearHistory() {
    document.getElementById('history').innerHTML = '';
}