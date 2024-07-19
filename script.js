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
    const favoriteQuoteButton = document.getElementById("favorite-quote");
    const tweetQuoteButton = document.getElementById("tweet-quote");
    const favoritesList = document.getElementById("favorites-list");
    const toggleModeButton = document.getElementById("toggle-mode");
    const searchInput = document.getElementById("search");
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote(quote) {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
        tweetQuoteButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote.text + '" - ' + quote.author)}`;
    }

    function addFavorite(quote) {
        if (!favorites.some(fav => fav.text === quote.text)) {
            favorites.push(quote);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            displayFavorites();
        }
    }

    function displayFavorites() {
        favoritesList.innerHTML = "";
        favorites.forEach(fav => {
            const li = document.createElement("li");
            li.textContent = `"${fav.text}" - ${fav.author}`;
            favoritesList.appendChild(li);
        });
    }

    function filterQuotes() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredQuotes = quotes.filter(quote =>
            quote.text.toLowerCase().includes(searchTerm) || quote.author.toLowerCase().includes(searchTerm)
        );
        if (filteredQuotes.length > 0) {
            displayQuote(filteredQuotes[0]);
        } else {
            quoteText.textContent = "No quotes found.";
            quoteAuthor.textContent = "";
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        toggleModeButton.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    }

    newQuoteButton.addEventListener("click", () => {
        quoteText.parentNode.classList.remove("fade-in");
        void quoteText.parentNode.offsetWidth;
        quoteText.parentNode.classList.add("fade-in");
        displayQuote(getRandomQuote());
    });

    favoriteQuoteButton.addEventListener("click", () => {
        const currentQuote = { text: quoteText.textContent, author: quoteAuthor.textContent.slice(2) };
        addFavorite(currentQuote);
    });

    toggleModeButton.addEventListener("click", toggleDarkMode);
    searchInput.addEventListener("input", filterQuotes);

    displayQuote(getRandomQuote());
    displayFavorites();
});
