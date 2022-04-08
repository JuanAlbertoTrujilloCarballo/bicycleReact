import Footer from '../components/footer';
import Counter from '../components/counter';
import { useNavigate } from "react-router-dom";

function HelloWorld(){

    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/");
        // window.location.href = '/helloWorld';
    }

    return (
        <>
            <p>Hail UWU</p>
            <Counter />
            <Footer />
            <button onClick={goToMain}>Go to Main</button>
        </>
    );
}

export default HelloWorld;