class Utils{
    validateEmail = (email) => {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }

    validateName = (name) =>{ return name.length>5}
    validatePassword = (password) => {return password.length>=8}
}
export default new Utils();
