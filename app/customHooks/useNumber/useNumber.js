
const useNumber = () => {
    function dosDecimales(n) {
        let t = n.toString();
        let regex = /(\d*.\d{0,3})/;
        return t.match(regex)[0];
    }

    return {
        dosDecimales
    }
}

export default useNumber