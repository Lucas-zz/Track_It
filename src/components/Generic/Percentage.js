import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export function percentage() {
    const [reset, setReset] = useState([]);
    const { setPercentage, token } = useContext(UserContext);

    useEffect(() => {
        setReset(false)

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise.then(response => {
            setPercentage(integer(response.data));
        });

        promise.then(error => {
            console.log(error.data.message);
        })
    }, [reset]);

    function integer(data) {
        if (isNaN(parseInt(data.filter((element) => element.done === true).length / data.length * 100))) {
            return 0;
        } else {
            return parseInt(data.filter((element) => element.done === true).length / data.length * 100)
        }
    }
}