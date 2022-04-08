import { useNavigate } from "react-router-dom";
import Counter from '../components/counter';

function Main(){
    const navigate = useNavigate();

    const goToHelloWorld = () => {
        navigate("/helloWorld");
        // window.location.href = '/helloWorld';
    }

    return(
        <>
        <p>This is the Main</p>
        <button onClick={goToHelloWorld}>Go to Hello World</button>
        </>
    );
}

export default Main;