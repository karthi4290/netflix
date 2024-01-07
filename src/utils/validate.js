export const checkValidData = ({email, password, fullName}) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})$/.test(fullName);

    if (!isEmailValid) return "Email is not valid"
    if (!isPasswordValid) return "Password is not valid"
    if (!isFullName) return "FullName is not valid"

    return null;
}








