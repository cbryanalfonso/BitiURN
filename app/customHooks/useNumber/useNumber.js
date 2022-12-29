
const useNumber = () => {
    /**
     * It takes a number and returns a string with two decimal places
     * @param n - The number to be formatted.
     * @returns the first three decimal places of a number.
     */
    function dosDecimales(n) {
        let t = n.toString();
        let regex = /(\d*.\d{0,3})/;
        return t.match(regex)[0];
    }

    /* Returning the function dosDecimales. */
    return {
        dosDecimales
    }
}

export default useNumber