var mic=document.getElementById("mic");
        var chatareaM=document.querySelector(".chatarea-main")
        var chatareaouter=document.querySelector(".chatarea-outer")
        var intro=["Hello, I am Chitti","Hi, I am a Robo","Hello,My name is Chitti"];
        var help=["How may I assist you?","Hpw can I help you?","What can I do for you?"]
        var greetings=["I am good you little piece of love","I am fine,what about you?","I am good"]
        var hobbies=["I love to talk with humans","I like to make friends like you"]
        var pizzas=["Which type of pizza do you like?","I can make a pizza for you","I would love to make a pizza for you","Would you like cheese pizza?"]
        var thank=["Most welcome","Not an issue","Its my pleasure","Mention not"]
        var closing =["Ok bye-bye","As you ,bye take care","Bye-bye,see you soon.."]
        var opening=["Hi,thanks for talking to me","Hi how are you?","Hello human"]
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        var Reco=new SpeechRecognition();

        function showusermsg(usermsg){
                 var output=''; 
                 output+=`<div class="chatarea-inner user">${usermsg}</div>`;
                 chatareaouter.innerHTML+=output;
                 return chatareaouter;
                }
        
        function showbotmsg(botmsg){
                 var output=''; 
                 output+=`<div class="chatarea-inner bot">${botmsg}</div>`;
                 chatareaouter.innerHTML+=output;
                 return chatareaouter;
                }
        
        function botvoice(message){
            var speech= new SpeechSynthesisUtterance();
            speech.text="Speak again please";
            if(message.includes("who are you")){
                var final=intro[Math.floor(Math.random()*intro.length)];
                speech.text=final;
            }
            if(message.includes("hello"||"hi")){   
                var final=opening[Math.floor(Math.random()*opening.length)];
                speech.text=final;
            }
            if(message.includes("help")){
                var final=help[Math.floor(Math.random()*help.length)];
                speech.text=final;
            }
            if(message.includes("how are you"||"how are you doing today")){
                var final=greetings[Math.floor(Math.random()*greetings.length)];
                speech.text=final;
            }
            if(message.includes("tell me something about you"||"tell me something about your hobbies")){
                var final=hobbies[Math.floor(Math.random()*hobbies.length)];
                speech.text=final;
            }
            if(message.includes("pizza")){
                var final=pizzas[Math.floor(Math.random()*pizzas.length)];
                speech.text=final;
            }
            if(message.includes("thank you"||"thank you so much")){
                var final=thank[Math.floor(Math.random()*thank.length)];
                speech.text=final;
            }
            if(message.includes("talk"||"bye")){
                var final=closing[Math.floor(Math.random()*closing.length)];
                speech.text=final;
            }
            window.speechSynthesis.speak(speech);
            chatareaM.appendChild(showbotmsg(speech.text))
        }

        Reco.onresult=function(e){
            var resultIndex=e.resultIndex;
            var transcript=e.results[resultIndex][0].transcript;
            chatareaM.appendChild(showusermsg(transcript));

            botvoice(transcript);
           console.log(transcript);
        }
        Reco.onend=function(){
            mic.style.background="#ff3b3b"
        }
        mic.addEventListener('click',function(){
            mic.style.background="#39c81f"
            Reco.start();
            console.log("Active")
        })