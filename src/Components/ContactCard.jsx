const ContactCard = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.address}</p>

            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};

export default ContactCard;