# 🎬 Movie Explorer

**Movie Explorer** is a responsive React web application that allows users to search for movies and explore detailed information like title, genre, plot, and ratings. The app is clean, fast, and built using modern JavaScript and component-based design.

---

## 📁 Project Structure

```
movie-explorer/
│
├── public/                     # Public assets (favicon, index.html)
│
├── src/                        # Source files
│   ├── components/             # All React components and their styles
│   │   ├── MovieCard.js        # Displays movie poster, title, year
│   │   ├── MovieCard.css       # Styles specific to MovieCard
│   │   ├── MovieGrid.js        # Shows movie cards in grid format
│   │   ├── MovieGrid.css       # Grid layout styling
│   │   ├── MovieModal.js       # Modal popup with movie details
│   │   ├── MovieModal.css      # Modal styling
│   │   ├── SearchBar.js        # Input and button for searching
│   │   └── SearchBar.css       # Search bar styling
│
│   ├── App.js                  # Main component that manages state
│   ├── index.js                # React DOM render entry point
│   └── App.css (optional)      # Global styles if any
│
├── package.json                # Project dependencies and scripts
├── .gitignore                  # Ignored files for Git
└── README.md                   # Project documentation
```

---

## 📜 JavaScript File Descriptions

| File | Description |
|------|-------------|
| `App.js` | Main app logic, holds state for movies and search |
| `index.js` | Entry point that renders App to the DOM |
| `MovieCard.js` | Component to display individual movie cards |
| `MovieGrid.js` | Renders a grid layout of all `MovieCard` components |
| `MovieModal.js` | Shows detailed movie info in a popup |
| `SearchBar.js` | Renders the input box and search button |

---

## 🎨 CSS File Descriptions

All component styles are colocated in the same folder:

| File | Purpose |
|------|---------|
| `MovieCard.css` | Styling for the movie cards including hover effects |
| `MovieGrid.css` | Layout styles using Flexbox to arrange the cards |
| `MovieModal.css` | Styling for the modal backdrop and content |
| `SearchBar.css` | Styling for the search input and button |

---

## 🛠 Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/keyurdevlekar/movie-explorer.git
cd movie-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Run the app in development mode |
| `npm test` | Run the test runner |
| `npm run build` | Create production-ready build |
| `npm run eject` | Eject CRA configs (advanced users only) |

---

## 👨‍💻 Author

**Keyur Devlekar**  
🔗 [GitHub Profile](https://github.com/keyurdevlekar)

---

## 🌟 Contribute or Support

If you like the project, please ⭐ the repo and feel free to fork or contribute!

---

## 🖼 Preview

Here’s a screenshot of the movie search results in action:

<img width="700" height="244" alt="image" src="https://github.com/user-attachments/assets/866c08aa-3805-4c42-b813-1246640be80c" />


> This shows the result for the keyword **"Iron Man"**, listing all relevant movies with their posters and release years in a responsive card layout.

---
