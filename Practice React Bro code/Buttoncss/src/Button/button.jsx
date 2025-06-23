import './button.css';

function Button() {
    const btn2 = {
        backgroundColor: 'hsl(0, 98.10%, 58.60%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
    };
    return (
        <div>
            <button className="button">Click me</button>
            <button style={btn2}>Click me</button>
        </div>
    );
}

export default Button;