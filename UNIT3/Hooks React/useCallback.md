// useCallback viene utilizzato per memorizzare una funzione di useCallback
// in modo che possa essere riutilizzata tra renderizzazioni senza doverla ricalcore ogni volta.



const handleSubmit = useCallback(() => {
    console.log('submit');
    }, []);

    return (
        <div>
            <ChildComponent handleSubmit={handleSubmit} />
        </div>
    );