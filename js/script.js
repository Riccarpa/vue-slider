/*
Descrizione:
Rifare l'esercizio dello slider come fatto assieme in classe.
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine 
automaticamente.
IMPORTANTE: Non perdete troppo tempo sui dettagli grafici,
 l'importante sono le funzionalit√† , non riterremo  errori se la grafica
 non rispecchia in maniera identica quello che abbiamo fatto in classe
*/





Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        images: [
            "./images/image1.jpg",
            "./images/image2.jpg",
            "./images/image3.jpg",
            "./images/image4.jpg"
        ],
        currentIndex: 0,

    },
    methods: {
        isActive(index) {
            return this.currentIndex === index ? 'active' : '';
        },
        increaseIndex() {
            this.currentIndex++;
            if (this.currentIndex === this.images.length) {
                this.currentIndex = 0;
            };
            this.autoPlay();

        },
        decreaseIndex() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.images.length - 1;
            };
            this.autoPlay();
        },
        dotColour(index) {
            return this.currentIndex === index ? 'blu-dot' : ''
        },
        setNewIndex(newIndex) {
            this.currentIndex = newIndex;
            this.autoPlay();

        },
        autoPlay() {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(() => { this.increaseIndex() }, 2000);
        }



    },
    created() {
        this.intervalId = setInterval(() => { this.increaseIndex() }, 2000);
    }



})