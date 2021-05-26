var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const wait = require("@trenskow/wait")

function discord_message(webHookURL, message) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", webHookURL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            'content': message,
            'username':'AI',
        }));
}


async function episode_not_working(title) {
    discord_message("https://discord.com/api/webhooks/847020859315060806/ncqr_BPyI--HvSd22fg8jkKN-VoH98hMCeI8cix3aM5dSChpppy-_v--ljgTCTWs4Jln", `hello ${title} is not working <@422611986506055681>`)
    await wait("1s")
    document.getElementById("report-button").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`
    await wait("2s")
    display.hide("#report-button")
}