

function List(props){
    const items= props.items;

    // items.sort((a,b)=>a.name.localeCompare(b.name));//THis is for alphibitical order.
    // items.sort((a,b)=>b.name.localeCompare(a.name));//THis is for reverse alphibitical order.
    // items.sort((a,b)=>a.calories-b.calories);//THis is for sorting by calories.
    // items.sort((a,b)=>b.calories-a.calories);//THis is for reverse sorting by calories.


    const lowcalitems = items.filter((fruit)=>fruit.calories<200);//This is for filtering the items by lowcalories.
    const highcalitems = items.filter((fruit)=>fruit.calories>200);//This is for filtering the items by highcalories.
    
    
    const listItems1=lowcalitems.map((lowcalitems)=> <li key={lowcalitems.id}>{lowcalitems.name} calories :{lowcalitems.calories}</li>);
    const listItems2=highcalitems.map((highcalitems)=> <li key={highcalitems.id}>{highcalitems.name} calories :{highcalitems.calories}</li>);





    return(
       <div>
        <h1>All items</h1>
        <ul>{listItems}</ul>
        <h1>Low Calories items</h1>
        <ul>{listItems1}</ul>
        <h1>High Calories items</h1>
        <ul>{listItems2}</ul>
       </div>
    );
}

export default List;