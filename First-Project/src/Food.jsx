function Food(){
    const food1 = "Orange";
    const food2 = "BANANA";
    return(
        <ul>
            <li>Apple</li>
            <li>{food2.toLowerCase()}</li>
            <li>{food1.toUpperCase()}</li>
        </ul>
    );
}

export default Food