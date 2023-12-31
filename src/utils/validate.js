export const checkValidations = (email, password,Naam) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&^]{4,60}$/.test(password);
    const isNameValid = /[a-zA-Z]+([\s][a-zA-Z]+)*/.test(Naam);





    if (!isEmailValid) return { isValid: false, errorMessage: "Please enter a valid email address or phone number." };
    if (!isPasswordValid) return { isValid: false, errorMessage: "Your password must contain between 4 and 60 characters." };
if(!isNameValid) return {isValid: false, errorMessage: "Please enter a valid name."};
    return { isValid: true };
};


export const isEmailValid = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
};

export const isPasswordValid = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&^]{4,60}$/.test(password);
};

export const isNameValid = (Naam) => {
    return /^[a-zA-Z0-9._-]{4,60}$/.test(Naam);
};