import { Component } from "react";
import SpinnerWait from "./SpinnerWait";
import NewBookRate from "./NewBookRate";
import SingleComment from "./SingleComment";


class ClassCommentSection extends Component {
    state = {
        comments: [],
        isLoading: false,
        isError: false
    }

    componentDidMount = async () => {
        this.setState({isError: false})
        this.setState({isLoading: true})
        try {
            const res = await fetch ('https://striveschool-api.herokuapp.com/api/books/' + asin + '/comments', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE',
                },
            })
            if (res.ok) {
                let data = await res.json()
                this.setState({comments: data})
                this.setState({isLoading: false})
            } else {
                console.log('error')
                this.setState({isLoading: false})
                this.setState({isError: true})
            }
        } catch (error) {
            console.log(error)
            this.setState({isLoading: false})
            this.setState({isError: true})
        }
    }

    style = {
        width: '280px', 
        backgroundColor: '##E4E6E7',
        padding: '10px',
        border: '1px solid #ccc',
     }

    render() {
        return (
            <div style={style}  className="rounded mx-auto">
            <h3>Commenti</h3>
            {isLoading && <SpinnerWait />}
            {/* {isError && <ErrorAlert />} */}
            {comments?.length > 0 
                ? comments.map((comment, index) => <SingleComment comment={comment} key={index}/>) 
                : <p>Non ci sono commenti</p>}
                <NewBookRate asin={asin}/>
        </div>
        )
     }

}

export default ClassCommentSection