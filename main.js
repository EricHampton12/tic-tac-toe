//global variable
//number of clicks
var Counter = 0;
var gridArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var app = document.getElementById('app');

function render_the_page() {
    // find the app element
    //put h2 in app
    var title = document.createElement('div');
    title.innerHTML = 'Tic Tac Toe';
    app.appendChild(title);
    // create a container div
    var myContainer = document.createElement('div');
    myContainer.setAttribute('class', 'container-fluid display-5 bg-dark');
    //placeholder variable for row
    var myRow = ''
    for (var i = 0; i < 9; i++) {
        // console.log(myRow);
        // console.log(i % 3);
        if (i % 3 == 0) {
            // create a row
            myRow = document.createElement('div')
            myRow.setAttribute('class', 'row bg-light');
            // update placeholder
        }
        var myCol = document.createElement('div');
        myCol.setAttribute('class', 'col-4 px-3 py-3 text-center border border-dark');
        //        add a button to the column
        var btn = document.createElement('button');
        btn.innerHTML = ' ';
        btn.id = i;
        btn.addEventListener('click', whos_turn);
        btn.setAttribute('class', 'btn-lg btn-primary btn-tile')
        myCol.appendChild(btn);
        myRow.appendChild(myCol);


        if (i == 2 || i == 5 || i == 8) {
            myContainer.appendChild(myRow);
        }
    }
    // add container to the div that had the id='app'
    app.appendChild(myContainer);
    //put button in app
    var resetButton = document.createElement('button');
    resetButton.innerHTML = "Reset";
    resetButton.addEventListener('click', reset);
    resetButton.setAttribute('class', 'btn-primary')
    app.appendChild(resetButton);

    var h1 = document.createElement('div');
    h1.innerHTML = "Player X's Turn";
    h1.id = "Turn";
    app.appendChild(h1);
}


function whos_turn() {
    console.log(this);
    /* step one */
    // console.log(Counter);
    // find where to update the name
    console.log(gridArray);
    document.getElementById('h1');
    if (gridArray[this.id] == 0) {
        if (Counter % 2) {
            Turn.innerHTML = "Player X's Turn";
            gridArray[this.id] = 2;
            this.innerHTML = "O";

        } else {
            Turn.innerHTML = "Player O's Turn";
            gridArray[this.id] = 1;
            this.innerHTML = "X";

        }
        Counter++;
        checkWin();
        this.removeEventListener('click', whos_turn);

    }



    /* step two */
    // make sure you can only click on button once

}

function checkWin() {
    // console.log(this);
    var options = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]]
    // console.log(options);


    var finishedGame = false;

    for (var i in options) {
        // console.log({Counter})
        // console.log(options[i]);
        if (gridArray[options[i][0]] != 0 && gridArray[options[i][1]] != 0 && gridArray[options[i][2]] != 0) {

            if (gridArray[options[i][0]] + gridArray[options[i][1]] + gridArray[options[i][2]] == 3) {
                Turn.innerHTML = "X is the winner";
                finishedGame = true;
                // this.removeEventListener('click',whos_turn);
            } else if (gridArray[options[i][0]] + gridArray[options[i][1]] + gridArray[options[i][2]] == 6) {
                Turn.innerHTML = "O is the winner";
                finishedGame = true;

            } else if (Counter == 9 && finishedGame == false) {
                Turn.innerHTML = "It's a tie!";
                finishedGame = true;
            }
        }
    }

    if (finishedGame) {
        for (var i = 0; i < 9; i++) {
            document.getElementById(i).removeEventListener('click', whos_turn)
        }
    }
}
function end_game() { console.log('finished game') }

function reset() {
    app.innerHTML = "";
    gridArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    Counter = 0;
    init();
}



function init() {
    // console.log('init');
    render_the_page();
}