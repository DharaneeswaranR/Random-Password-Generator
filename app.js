function generatePassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~\\`|}{[]:;?><,./-="
    let password = ""

    for (let i = 0; i < 16; i++) {
        let char = chars[Math.floor(Math.random() * 92)]
        password += char
    }

    console.log(password)
}
