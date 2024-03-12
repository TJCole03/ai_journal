 
const NewUser = () => {
    return (
        <div>HI</div>
        )
}

export default NewUser

/*

What is a webhook?

Essentially, webhooks are like events. 

TWO SERVERS: GITHUB, YOURS

If you created a webhook on github and wanted to subscribe to the pull request 
comment event- 
    you'd give GitHub a URL to your API; 
    and THEN you'd say: "I want to subscribe to the pull request comment event"
    and THEN GitHub says: "okay. when someone makes a comment pull request, i'll 
    issue a request to the URL that you gave me with the event information 
    and whatever info they want to send"

    and then you can respond to that.  

*/