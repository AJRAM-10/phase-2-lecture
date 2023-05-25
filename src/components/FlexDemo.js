import FlexItem from "./FlexItem";

function FlexDemo() {
    const names = ["Morgan", "Tyler", "Eleanor", "Macolister"]

    const boxes = names.map(name => <FlexItem name={name} />)

    return (
        <div className="flex-demo">{boxes}</div>
    )
}

export default FlexDemo;