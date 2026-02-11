# MovieDB - Cinematic Discovery Platform

A modern, responsive movie discovery web application built with **React** and **Tailwind CSS**. Integrated with the **OMDb API**, it features real-time search, infinite scrolling, and a premium user interface.

## 🚀 Key Features

*   **Real-time Search**: instantly find movies and series.
*   **Infinite Scroll**: Seamless browsing of movie lists without pagination clicks.
*   **Adaptive Design**: Fully responsive layout optimized for Desktop (2x2 Grid) and Mobile (1x2 Grid).
*   **Premium UI**: Glassmorphism effects, smooth animations, and a cinematic dark theme.
*   **Performance**: Implements Skeleton loading and Lazy Image strategies for optimal speed.
*   **SEO Optimized**: Dynamic OpenGraph tags for social sharing.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) (Vite)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **State Management**: React Hooks (Custom `useOmdb` hook)
*   **Routing**: React Router DOM
*   **Icons**: Lucide React
*   **HTTP Client**: Axios

## 📂 Project Structure

Verified **Clean Architecture** implementation:

```
src/
├── components/
│   ├── common/         # Reusable UI (SearchBar, LazyImage, Skeletons)
│   ├── features/       # Feature-specific components
│   │   ├── movie/      # MovieGrid, MovieCard
│   │   └── series/     # SeriesSlider
├── hooks/              # Custom hooks (useOmdb)
├── pages/              # Page views (Home, Detail)
├── services/           # API services
└── utils/              # Helper functions
```

## 📦 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/movie-search-app.git
    cd movie-search-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env` file in the root directory:
    ```env
    VITE_OMDB_API_KEY=a143c6cf
    VITE_OMDB_API_URL=http://www.omdbapi.com/
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## 📝 License

This project is licensed under the MIT License.
