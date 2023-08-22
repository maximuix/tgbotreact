import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
    const {onToggleButton, tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    })
    return (

        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path="/form" element={<Form/>}/>
            </Routes>
            <button onClick={onToggleButton}>Toggle</button>
        </div>
    );
}

export default App;
