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
    question14
) {

    request.open('POST', url)
    request.setRequestHeader('Content-type', 'application/json')

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
                name: '1. Fill in your username and tag:',
                value: isNotNull(question1),
                inline: false,
            },
            {
                name: '2. What is your phone number?',
                value: isNotNull(question2),
                inline: false,
            },
            {
                name: '3. How old is your Discord account:',
                value: isNotNull(question3),
                inline: false,
            },
            {
                name: '4. What languages do u speak:',
                value: isNotNull(question4),
                inline: false,
            },
            {
                name: '5. What position did you had in mind:',
                value: isNotNull(question5),
                inline: false,
            },
            {
                name: '6. Why do you think you would be fit for this position:',
                value: isNotNull(question6),
                inline: false,
            },
            {
                name: '7. What is your experience with moderation:',
                value: isNotNull(question7),
                inline: false,
            },
            {
                name: '8. Why would you like to be a staff member:',
                value: isNotNull(question8),
                inline: false,
            },
            {
                name: '9. How can you help improving the server:',
                value: isNotNull(question9),
                inline: false,
            },
            {
                name: '10. A staff member is abusing their privileges what will u do?',
                value: isNotNull(question10),
                inline: false,
            },
            {
                name: `11. A member swears to much, you politely ask him/her to stop. The member doesn't listen and starts calling you names, what do you do?`,
                value: isNotNull(question11),
                inline: false,
            },
            {
                name: '12. A member all the sudden starts talking in another language, what do you do?',
                value: isNotNull(question12),
                inline: false,
            },
            {
                name: '13. If staff post a picture in a non-picture channel, what will you do?',
                value: isNotNull(question13),
                inline: false,
            },
            {
                name: '14. Agreed to the rules?',
                value: isNotNull(question14),
                inline: false,
            }
        ],
        timestamp: new Date(),
        footer: {
            text: 'Application System © Koenv',
            icon_url: 'https://koendev.tk/assets/images/favicon.png',
        },

    }

    const params = {
        username: username,
        avatar_url: avatar,
        embeds: [applicationEmbed],
    }


    request.send(JSON.stringify(params))
}

const _sendForm = sendForm
export { _sendForm as sendForm }