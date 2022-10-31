// const MyComponent = (props)=> {
//     return (
//         <div>
//             저의 이름은 {props.name} <br />
//             children 값은 {props.children}입니다.
//         </div>
//     )
// }

// const MyComponent = (props)=> {
//     const { name , children } = props
//     return (
//         <div>
//             저의 이름은 {props.name} <br />
//             children 값은 {props.children}입니다.
//         </div>
//     )
// }

const MyComponent = ({ name , children })=> {
    return (
        <div>
            저의 이름은 {name} <br />
            children 값은 {children}입니다.
        </div>
    )
}


export default MyComponent;