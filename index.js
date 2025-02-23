const getTime = () => {
    const time = new Date().toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'})
    return time
}

const getDate = () => {
    const newdate = new Date().toLocaleDateString("en-US", {year: 'numeric', month: '2-digit', day: '2-digit'})    
    return newdate
}

module.exports = {getTime, getDate}