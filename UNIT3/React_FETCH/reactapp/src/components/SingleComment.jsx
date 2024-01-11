const SingleComment = ({comment}) => {
  
const deleteData = async (asin) => {
    try {
        const res = await fetch ('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE',
            },
        })
        if (res.ok) {
           console.log('ok');
        } else {
            console.log('error')
        }
    } catch (error) {
        console.log(error)
    }
}

    return (
        <div className="d-flex justify-content-between">
            <div>
                <small className="me-2">({comment.rate})</small><small>{comment.comment}</small>
            </div>
            <div>
                <i className="fa-solid fa-trash" onClick={() => deleteData(comment._id)}></i>
            </div>
        </div>
    );
}

export default SingleComment;