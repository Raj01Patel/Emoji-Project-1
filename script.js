const resultContainer = document.querySelector(".results");

function displayEmoji(data = emojiList) {

    resultContainer.innerHTML = "";
    data.forEach(obj => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const emojiImg = document.createElement("div");
        const emojiName = document.createElement("div");

        emojiImg.setAttribute("class", "img");
        emojiName.setAttribute("class", "name");

        emojiImg.innerText = obj.emoji;
        emojiName.innerText = obj.aliases[0].toUpperCase();

        card.appendChild(emojiImg);
        card.appendChild(emojiName);

        resultContainer.appendChild(card);
    })
}


function getData(event) {
    const query = event.target.value;

    const filterData = emojiList.filter((e) => {
        if (e.tags.find((ele) => ele === query)) {
            return true;
        }
        if (e.aliases.find((ele) => ele === query)) {
            return true;
        }
        if (e.description.indexOf(query) !== -1) {
            return true;
        }
    })

    displayEmoji(filterData);
}

const userinput = document.getElementById("user-input").addEventListener("input", getData);
window.onload = () => displayEmoji();