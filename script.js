document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
        { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
        { text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
        { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
        { text: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
        { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
        { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
        { text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", author: "Johann Wolfgang von Goethe" },
        { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" }
    ];

    const quoteText = document.getElementById("quote");
    const quoteAuthor = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote");
    const tweetQuoteButton = document.getElementById("tweet-quote");

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const quote = getRandomQuote();
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
        tweetQuoteButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote.text + '" - ' + quote.author)}`;
    }

    newQuoteButton.addEventListener("click", () => {
        quoteText.parentNode.classList.remove("fade-in");
        void quoteText.parentNode.offsetWidth;
        quoteText.parentNode.classList.add("fade-in");
        displayQuote();
    });

    displayQuote();
});
