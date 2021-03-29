var request = new XMLHttpRequest()
import { hexToDecimal, isNotNull, code } from './utils.js'

const sendForm = function (
    url,
    color,
    username,
    avatar,
    author,
    author_icon,
    author_url,
    title,
    body,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15
) {
    request.open('POST', url)
    request.setRequestHeader('Content-type', 'application/json')

    console.log(username)

    var applicationEmbed = {
        author: {
            name: author,
            icon_url: author_icon,
            url: author_url,
        },
        title: author,
        color: color,
        fields: [
            {
                name: '**1. Fill in your username and tag:**',
                value: isNotNull(question1) + '\n\u200B'
            },
            {
                name: '**2. How old is your Discord account:**',
                value: isNotNull(question2) + '\n\u200B'
            },
            {
                name: '**3. What languages do u speak:**',
                value: isNotNull(question3) + '\n\u200B'
            },
            {
                name: '**4. What position did you had in mind:**',
                value: isNotNull(question4) + '\n\u200B'
            },
            {
                name: '**5. Why do you think you would be fit for this position:**',
                value: isNotNull(question5) + '\n\u200B'
            },
            {
                name: '**6. What is your experience with moderation:**',
                value: isNotNull(question6) + '\n\u200B'
            },
            {
                name: '**7. Why would you like to be a staff member:**',
                value: isNotNull(question7) + '\n\u200B'
            },
            {
                name: '**8. How can you help improving the server:**',
                value: isNotNull(question8) + '\n\u200B'
            }
        ],
        timestamp: new Date(),
        footer: {
            text: 'Made By Koen',
            icon_url: 'https://koendev.tk/assets/images/favicon.png',
            url: 'https://koendev.tk'
        },

    }

    var params = {
        username: username,
        avatar_url: avatar,
        embeds: [applicationEmbed],
    }


    request.send(JSON.stringify(params))
}

const _sendForm = sendForm
export { _sendForm as sendForm }
