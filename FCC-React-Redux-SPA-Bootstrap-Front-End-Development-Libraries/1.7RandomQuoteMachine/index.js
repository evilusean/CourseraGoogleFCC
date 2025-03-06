const { useEffect, useState } = React;

const QuoteMachine = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setQuote(response.data.content);
            setAuthor(response.data.author);
        } catch (error) {
            console.error('Error fetching the quote:', error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const handleNewQuote = () => {
        fetchQuote();
    };

    const tweetQuote = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
        window.open(tweetUrl, '_blank');
    };

    return (
        <div id="quote-box" className="quote-box">
            <p id="text">{quote}</p>
            <p id="author">- {author}</p>
            <button id="new-quote" className="btn btn-primary" onClick={handleNewQuote}>New Quote</button>
            <a id="tweet-quote" href="#" onClick={tweetQuote}>Tweet this quote</a>
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            <QuoteMachine />
        </div>
    );
};

// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));
