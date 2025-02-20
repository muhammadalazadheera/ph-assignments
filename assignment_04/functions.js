function cashOut(money) {
    if (typeof money !== "number") {
        return "Invalid";
    } else if (money < 0) {
        return "Invalid";
    }
    return money * 1.75 / 100;
}

function validEmail(email) {
    if (email.charAt(0) == '.' || email.charAt(0) == '-' || email.charAt(0) == '_' || email.charAt(0) == '+' || email.charAt(0) == '@') {
        return false;
    } else if (email.search("@") == -1) {
        return false;
    } else if (email.search(" ") != -1) {
        return false;
    } else if (!email.endsWith('.com')) {
        return false;
    } else {
        return true;
    }

}


function electionResult(votes) {
    let banana = 0;
    let mango = 0;

    if (!Array.isArray(votes)) {
        return 'Invalid';
    }

    for (let i = 0; i < votes.length; i++) {
        if (votes[i].toLowerCase() === 'banana') {
            banana += 1;
        } else if (votes[i].toLowerCase() === 'mango') {
            mango += 1;
        }
    }


    if (banana == mango) {
        return 'Draw';
    }

    return banana > mango ? 'Banana' : 'Mango';
}

function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object' || typeof f2 !== 'object') {
        return 'Invalid';
    }

    if(f1.bestFriend == f2.roll && f2.bestFriend == f1.roll) {
        return true
    }

    return false;
}

function  calculateWatchTime( times ) {
    let total = 0;
    let hour;
    let minute;
    let second;

    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== 'number') {
            return 'Invalid';
        }
        total += times[i]
    }

    if(total >= 3600) {
        hour = parseInt(total / 3600);
        reminder = total % 3600;
        minute = parseInt(reminder / 60);
        second = reminder % 60;
    }else {
        hour = 0;
        minute = parseInt(total / 60);
        reminder = total % 60;
        second = reminder % 60;
    }

    return {
        hour: `${hour}`,
        minute: `${minute}`,
        second: `${second}`,
    }
}
