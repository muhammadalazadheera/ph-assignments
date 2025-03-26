
(() => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => {
            const allLevels = data.data;
            for (const key in allLevels) {
                const lesson_btn = document.getElementById(`lesson_buttons`);
                lesson_btn.innerHTML += `
                    <button class="btn btn-outline btn-primary" onclick="fetchWords(event, ${allLevels[key].level_no})">
                        <i class="fas fa-book-open"></i> ${allLevels[key].lessonName}
                    </button>
                `
            }
        })

})();

const fetchWords = (event, level_no) => {
    event.target.parentNode.querySelectorAll('.btn-active').forEach(btn => {
        btn.classList.remove('btn-active');
    });
    event.target.classList.add('btn-active');

    document.getElementById('loader').classList.remove('hidden');
    const wordsDiv = document.getElementById('words');
    wordsDiv.innerHTML = '';


    fetch(`https://openapi.programming-hero.com/api/level/${level_no}`)
        .then(res => res.json())
        .then(data => {
            const allWords = data.data;

            document.getElementById('loader').classList.add('hidden');
            document.querySelector('.no-info').classList.add('hidden');
            document.querySelector('.null-info').classList.add('hidden');

            wordsDiv.classList.remove('hidden');

            if (!allWords.length) {
                console.log('No words found');
                document.querySelector('.null-info').classList.remove('hidden');
                document.getElementById('words').classList.add('hidden');
                return;
            }

            for (const key in allWords) {
                let bMeaning = allWords[key]['meaning'];
                if (bMeaning === null | bMeaning === undefined) {
                    bMeaning = 'অর্থ নেই';
                }
                wordsDiv.innerHTML += `
                    <div class="card card-border bg-base-100 hover:bg-blue-50 transition-all hover:ease-in-out duration-300">
                        <div class="card-body">
                            <h2 class="text-center text-2xl font-poppins font-semibold">${allWords[key]['word']}</h2>
                            <p class="font-medium font-poppins">Meaning / Pronunciation</p>
                            <p class="text-xl font-semibold my-4 font-mukti">"${bMeaning} / ${allWords[key]['pronunciation']}"</p>
                            <div class="vocabulary-buttons flex justify-between">
                                <button onclick="details_modal.showModal(); showDetails(${allWords[key]['id']});" class="btn"><i class="fas fa-info-circle"></i></button>
                                <button class="btn" onclick="pronounceWord('${allWords[key]['word']}')"><i class="fas fa-volume-down"></i></button>
                            </div>
                        </div>
                    </div>
                `
            }
        })
}

const showDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
        .then(res => res.json())
        .then(data => {
            const wordElement = document.getElementById('d-word');
            const meaningElement = document.getElementById('d-meaning');
            const pronunciationElement = document.getElementById('d-pronunciation');
            const exampleElement = document.getElementById('d-example');
            const synonymsElement = document.getElementById('d-synonims');

            wordElement.innerHTML = data.data.word;
            pronunciationElement.innerHTML = data.data.pronunciation;
            meaningElement.innerHTML = data.data.meaning;
            exampleElement.innerHTML = data.data.sentence;


            for (const synonyms of data.data.synonyms) {
                synonymsElement.innerHTML += `<span class="btn m-1">${synonyms}</span>`;
            }
        })
}

const playSound = (word) => {
    const wordLC = word.toLowerCase();
    const audio = new Audio(`https://api.dictionaryapi.dev/media/pronunciations/en/${wordLC}-us.mp3`);
    audio.play().catch(error => {
        if (error) {
            audio.src = `https://api.dictionaryapi.dev/media/pronunciations/en/${wordLC}-uk.mp3`;
            audio.play().catch(error => {
                if (error) {
                    alert('No sound found for this word');
                }
            });
        }
    });;
}

function pronounceWord(word) {
    console.log(word)
    try {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-EN'; // English
        window.speechSynthesis.speak(utterance);
    } catch (error) {
        console.log('error')
        
    }
}

const loginFunction = (event) => {
    event.preventDefault();
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    if (!username) {
        swal({
            title: 'Warning!',
            text: 'Name is required!',
            icon: 'warning',
            confirmButtonText: 'Cool'
        })
        return;
    }

    if (!password) {
        swal({
            title: 'Warning!',
            text: 'Enter Password!',
            icon: 'warning',
            confirmButtonText: 'Cool'
        })
        return;
    } else if (password !== '123456') {
        swal({
            title: 'Error!',
            text: 'Incorrect Password!',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return;
    } else {
        swal({
            title: 'Success!',
            text: 'Welcome to English জানালা!!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })

        document.getElementById('hero').classList.add('hidden');
        document.querySelector('nav').classList.remove('hidden');
        document.getElementById('faq').classList.remove('hidden');
        document.getElementById('vocabulary').classList.remove('hidden');
    }
}

const logoutFunction = () => {
    document.getElementById('hero').classList.remove('hidden');
    document.querySelector('nav').classList.add('hidden');
    document.getElementById('faq').classList.add('hidden');
    document.getElementById('vocabulary').classList.add('hidden');
}
