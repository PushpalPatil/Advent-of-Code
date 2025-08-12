

const emails = ["a@foo.com", "b@har.com", "c@foo.com", "d@baz.org"]
const whitelist = ["foo.com", "baz.com"]

function filterEmails(emails: string[], whitelist:string[]):string[]{
    
    return emails.filter((email)=>{
        const whitelistMatches:boolean[] =
            whitelist.map((whiteList) => email.endsWith(whiteListEntry))
        return
    })
}
