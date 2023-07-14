var temp = -1;
function newQ() {
    var num = Math.floor(Math.random() * 10);
    if (temp == num) {
        if (temp != 10) {
            num++;
        } else {
            num--;
        }
    }
    console.log(num);
    switch (num) {
        case 1:
            document.getElementById('quote').innerHTML = '“Be yourself; everyone else is already taken.”';
            document.getElementById('person').innerHTML = '― Oscar Wilde';
            break;
        case 2:
            document.getElementById('quote').innerHTML = '“If you tell the truth, you dont have to remember anything.”';
            document.getElementById('person').innerHTML = '― Mark Twain';
            break;
        case 3:
            document.getElementById('quote').innerHTML = '“A friend is someone who knows all about you and still loves you.”';
            document.getElementById('person').innerHTML = '― Elbert Hubbard';
            break;
        case 4:
            document.getElementById('quote').innerHTML = '“We accept the love we think we deserve.”';
            document.getElementById('person').innerHTML = '― Stephen Chbosky';
            break;
        case 5:
            document.getElementById('quote').innerHTML = '“The only way out of the labyrinth of suffering is to forgive.”';
            document.getElementById('person').innerHTML = '― John Green';
            break;
        case 6:
            document.getElementById('quote').innerHTML = '“There is nothing to writing. All you do is sit down at a typewriter and bleed.”';
            document.getElementById('person').innerHTML = '― Ernest Hemingway';
            break;
        case 7:
            document.getElementById('quote').innerHTML = '“With great power... comes great need to take a nap. Wake me up later.”';
            document.getElementById('person').innerHTML = '― Rick Riordan';
            break;
        case 8:
            document.getElementById('quote').innerHTML = '“All we have to decide is what to do with the time that is given us.”';
            document.getElementById('person').innerHTML = '― J.R.R. Tolkien';
            break;
        case 9:
            document.getElementById('quote').innerHTML = '“Peace begins with a smile..”';
            document.getElementById('person').innerHTML = '― Mother Teresa';
            break;
        case 10:
            document.getElementById('quote').innerHTML = '“Life is a book and there are a thousand pages I have not yet read.”';
            document.getElementById('person').innerHTML = '― Cassandra Clare';
            break;
        default:
            break;
    }
    temp = num;
}

