window.onload = () => {
    let chat = document.querySelector("#divMessages")
    const input = document.querySelector("#inputMessage");
    const btnSubmit = document.querySelector("#btnSend");
    const keyWords = ['Hi!', 'I', 'university', 'man', ')'];
    const rndAnswer = ['Yes!', 'Cool!', 'Interesting', 'Goergous']

    btnSubmit.addEventListener('click', ()=>{
        let message = input.value;
        chat.innerHTML += '<div class="msg" style="color: red">' + 'You: ' + message +'</div>';
        message.split(' ').forEach(elem => {
            for(const word of keyWords){
                if(elem === word){
                    let index = Math.floor(Math.random() * rndAnswer.length);
                    chat.innerHTML += '<div class="msg">' + 'MyBot: '+ rndAnswer[index]+ '</div>';
                }
            }
        });
        input.value = "";
    });
};