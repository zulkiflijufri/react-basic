// const Hello = (props) => {
//     return `Hello ${props.name}`;
// };

const Hello = ({ name }) => {
    return `Hello ${name}`;
};

// default props
Hello.defaultProps = {
    name: "Zulkifli",
};

export default Hello;
