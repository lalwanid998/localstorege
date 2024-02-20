import React from "react";

function App() {
    const [value, setValue] = React.useState("");

    React.useEffect(() => {
        getData();
    }, []);

    function saveData() {
        var mydata = {
            name : "Divya Lalwani",
            gender : "Female",
            mobile : 9865320147
        }
        var a = JSON.stringify(mydata);
        localStorage.setItem("userData", a);
        setValue("Data Stored");
    }

    function getData() {
        var a = localStorage.getItem("userData");
        if(a){
            var details = JSON.parse(a);
            var msg = `Name is ${details.name} Gender is ${details.gender}`;
            setValue("Detail is :" +msg)
        }else{
            setValue("No Value");
        }
    }

    function removeData(){
        localStorage.removeItem("userData");
        setValue("Data Removed");
    }

    return(
        <>
            <h2>LocalStorage</h2>
            {value} <br />
            <button onClick={saveData}>SaveData</button>
            <button onClick={getData}>GetData</button>
            <button onClick={removeData}>RemoveData</button>
        </>
    );
}
export default App;