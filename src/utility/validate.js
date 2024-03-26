export const checkValidDetails = (email, password) => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let isValid = emailRegex.test(email);
    if (!isValid) return "Email ID is not valid";

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    isValid = passwordRegex.test(password);
    if (!isValid) return "Password is not valid";

    return null;
}