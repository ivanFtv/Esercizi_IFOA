import SingleAppointment from "./SingleAppointment"

const List = ({data, removeAppointment}) => {
 return (
    <>
    <ul className="user-list">
        {data.map((item) => (
            <li key={item.id}>
                <SingleAppointment item={item} removeAppointment={removeAppointment} />
            </li>
        ))}
    </ul>
    </>
 )

}


export default List