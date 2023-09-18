const chatBody = document.querySelector("#chat-body");
const messageBody = document.querySelector(".chat-content response")
const messageInput = document.querySelector("#message-input");


function addUserMessage(event) {
    event.preventDefault();

    let newMessageContent = messageInput.value;
    const newMessage = document.createElement("div");
    newMessage.classList.add("chat-content", "response");
    newMessage.innerHTML = `
        <h4>Você diz:</h4>
        <div class="message response">
            ${newMessageContent}
        </div>
    `;
    
    chatBody.appendChild(newMessage);
}

const formMessage = document.querySelector("#message-form");
formMessage.addEventListener("submit", addUserMessage);