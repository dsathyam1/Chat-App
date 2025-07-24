const username = localStorage.getItem("username");
if (!username) {
  window.location.href = "login.html";
}

document.getElementById(
  "current-user"
).textContent = `Welcome Back ${username}`;

const chatTargetSelector = document.getElementById("chat-target");
const chatMessages = document.querySelector(".chat-messages");
const chatInputForm = document.querySelector(".chat-input-form");
const chatInput = document.querySelector(".chat-input");
const clearChatBtn = document.querySelector(".clear-chat");
const logoutBtn = document.getElementById("logout-btn");

let currentTarget = "";

chatTargetSelector.addEventListener("change", () => {
  currentTarget = chatTargetSelector.value;
  chatMessages.innerHTML = "";
  if (currentTarget) {
    loadMessages();
  }
});

function getChatKey(user1, user2) {
  return `chat_${[user1, user2].sort().join("_")}`;
}

function loadMessages() {
  const chatKey = getChatKey(username, currentTarget);
  const messages = JSON.parse(localStorage.getItem(chatKey)) || [];

  messages.forEach((msg, index) => {
    renderMessage(msg.text, msg.sender === username, index);
  });
}

function renderMessage(message, isOwn, index) {
  const msgDiv = document.createElement("div");
  msgDiv.className = isOwn
    ? "chat-bubble own message gray-bg"
    : "chat-bubble message blue-bg";

  const textSpan = document.createElement("span");
  textSpan.className = "message-text";
  textSpan.textContent = message;
  msgDiv.appendChild(textSpan);

  if (isOwn) {
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-button";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteMessage(index);
    msgDiv.appendChild(deleteBtn);
  }

  chatMessages.appendChild(msgDiv);
}

function deleteMessage(indexToDelete) {
  const chatKey = getChatKey(username, currentTarget);
  const messages = JSON.parse(localStorage.getItem(chatKey)) || [];

  const newMessages = messages.filter((_, index) => index !== indexToDelete);
  localStorage.setItem(chatKey, JSON.stringify(newMessages));

  chatMessages.innerHTML = "";
  loadMessages();
}

chatInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!currentTarget) {
    alert("Please select a user to chat with.");
    return;
  }

  const message = chatInput.value.trim();
  if (message === "") return;

  const chatKey = getChatKey(username, currentTarget);
  const messages = JSON.parse(localStorage.getItem(chatKey)) || [];
  messages.push({ sender: username, text: message });
  localStorage.setItem(chatKey, JSON.stringify(messages));

  renderMessage(message, true, messages.length - 1);
  chatInput.value = "";
});

clearChatBtn.addEventListener("click", () => {
  if (!currentTarget) {
    alert("Please select a chat to clear.");
    return;
  }

  const confirmClear = confirm("Are you sure you want to clear this chat?");
  if (confirmClear) {
    const chatKey = getChatKey(username, currentTarget);
    localStorage.removeItem(chatKey);
    chatMessages.innerHTML = "";
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "login.html";
});


