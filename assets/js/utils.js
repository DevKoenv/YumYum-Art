const hexToDecimal = function (string) {
    return parseInt(string.replace('#', ''), 16)
}

const isNotNull = function (string) {
    if (string) {
        return  '\n\u200B' + string + '\n\u200B'
    } else {
        return '\n\u200B' + 'No data has been given.' + '\n\u200B'
    }
}

const code = function (type, string) {
    switch (type) {
        case 'encode':
            return btoa(string)
        case 'decode':
            return atob(string)
        default:
            return 'No valid type has been given.'
    }
}

const urlParams = function (question, param) {
    var queryParams = window.location.search
    var urlParam = new URLSearchParams(queryParams)
    switch (question) {
        case 'contains': {
            if (param != null) {
                return urlParam.has(param)
            } else {
                return queryParams
            }
        }
        case 'get': {
            if (param != null) {
                return urlParam.get(param)
            } else {
                return queryParams
            }
        }
        case 'null': {
            return 'Please use the following syntax: urlParams(method, parameter)'
             + '\n'
             + 'Available methods: contains, get'
        }
        default: {
            return 'Please use the following syntax: urlParams(method, parameter)'
             + '\n'
             + 'Available methods: contains, get'
        }
    }
}

const _urlParams = urlParams
export { _urlParams as urlParams }
const _hexToDecimal = hexToDecimal
export { _hexToDecimal as hexToDecimal }
const _isNotNull = isNotNull
export { _isNotNull as isNotNull }
const _code = code
export { _code as code }
