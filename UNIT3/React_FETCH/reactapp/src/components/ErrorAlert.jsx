import Alert from 'react-bootstrap/Alert'

const ErrorAlert = () => {
    return (
        <Alert variant='danger'>
          Attenzione, c'è stato un errore! Riprova più tardi.
        </Alert>
    )
}

export default ErrorAlert