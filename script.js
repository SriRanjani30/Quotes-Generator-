document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "The best way to get started is to quit talking and begin doing.",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        "Don’t let yesterday take up too much of today.",
        "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
        "It’s not whether you get knocked down, it’s whether you get up.",
        "People who are crazy enough to think they can change the world, are the ones who do.",
        "Failure will never overtake me if my determination to succeed is strong enough.",
        "We may encounter many defeats but we must not be defeated.",
        "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
        "We generate fears while we sit. We overcome them by action."
    ];

    const quoteText = document.getElementById("quote");
    const newQuoteButton = document.getElementById("new-quote");

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    newQuoteButton.addEventListener("click", () => {
        quoteText.textContent = getRandomQuote();
    });
});
