const validateError = (error) => {
    switch (error.message) {
        case 'Wrong type':
            return 'Review request fields'
            break;
        case 'Missing fields':
            return "Validate fields";
            break;
        case 'Inexistent role':
            return 'Role not registered'
            break;
        case 'Nhoting Found':
            return 'No data found'
            break;
        case 'Password mismatch':
            return 'Credencials mismatch'
            break;
        case 'User disabled':
            return 'User disabled'
            break;

        default:
            return "Review Request";
            break;
    };
};
module.exports = {
    validateError
}