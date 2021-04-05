export async function loginAttempt(email, password) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ token: 'TEST_TOKEN' })
        }, 2000)
    })
}
