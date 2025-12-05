# Pranav Deo - Academic Portfolio Website

This is a React-based personal portfolio website designed for a Robotics Research Engineer. It features a clean, professional, and dark-mode-ready interface built with React, TypeScript, and Tailwind CSS.

## 📂 Project Structure

- **`index.html`**: The entry point. Contains the global CSS variables for the color palette and the Tailwind CSS configuration.
- **`App.tsx`**: The main layout component that assembles all the sections (Hero, About, Experience, etc.).
- **`constants.tsx`**: **[IMPORTANT]** This is the "database" of the website. All text, links, image paths, and data live here. You will mostly edit this file.
- **`components/`**: Contains the individual UI sections (Hero.tsx, About.tsx, Experience.tsx, etc.) and reusable UI elements (Icons.tsx, Navbar.tsx).
- **`types.ts`**: TypeScript definitions to ensure data consistency.

---

## 💻 Running Locally

Because this project uses **React** and **TypeScript** (files ending in `.tsx`), you cannot simply open `index.html` in your browser. Browsers do not understand TypeScript directly; the code must be "built" or "transpiled" first.

To run this on your local machine, you need **Node.js** installed.

### Quick Start (Using Vite)

1.  **Initialize a project:**
    Open your terminal in the project folder and run:
    ```bash
    npm create vite@latest . -- --template react-ts
    ```
    *(Note: If asked to overwrite files, be careful not to lose your `constants.tsx`. It is safer to create a new folder, run the command, and then copy these source files into the `src` folder).*

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    npm run dev
    ```
    This will give you a local URL (e.g., `http://localhost:5173`) where you can view your site.

---

## 🛠 How to Customize

### 1. Changing Text and Data
Go to **`constants.tsx`**. This file exports objects like `BIO`, `CAREER_TIMELINE`, `PROJECTS`, and `SOCIAL_LINKS`.
- **Update Name/Bio**: Edit the `BIO` object.
- **Update Links**: Edit `SOCIAL_LINKS`.
- **Update Experience**: Modify the `CAREER_TIMELINE` array.
- **Update Skills**: Modify the `SKILLS` array.

### 2. Replacing Images
Currently, the website uses online placeholders (e.g., `placehold.co`). To use your own images:

1.  Create a folder named `images` in your project root (same level as `index.html`).
2.  Place your image files there (e.g., `profile.jpg`, `honda-logo.png`, `project1.jpg`).
3.  Open `constants.tsx`.
4.  Replace the placeholder URLs with the relative path to your image.

**Example Change in `constants.tsx`:**

**Before:**
```typescript
export const BIO = {
  // ...
  image: "https://placehold.co/500x500/1e293b/FFFFFF?text=Me" 
};
```

**After:**
```typescript
export const BIO = {
  // ...
  image: "images/profile.jpg" 
};
```

### 3. Adding a New Section
To add a completely new section (e.g., "Blog"):

1.  **Create Component**: Create a new file `components/Blog.tsx`.
2.  **Define Structure**: Use the existing components (like `About.tsx`) as a template.
    ```tsx
    const Blog = () => {
      return (
        <section id="blog" className="py-6 bg-main">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-2xl font-display font-bold text-txt-main">My Blog</h2>
            {/* Your content here */}
          </div>
        </section>
      );
    };
    export default Blog;
    ```
3.  **Import**: Go to `App.tsx`, import your new component:
    ```tsx
    import Blog from './components/Blog';
    ```
4.  **Render**: Add `<Blog />` inside the `<main>` tag in `App.tsx` where you want it to appear.
5.  **Update Navbar**: Go to `components/Navbar.tsx` and add `{ name: 'Blog', href: '#blog' }` to the `navLinks` array.

---

## 🎨 Changing the Theme

The color palette is defined in `index.html` within the `<style>` tag using CSS variables.

- **Light Mode Colors**: Edit variables under `:root`.
- **Dark Mode Colors**: Edit variables under `.dark`.

**Key Variables:**
- `--primary`: Main brand color (Purples).
- `--secondary`: Interactive elements/links (Teals).
- `--accent`: Highlights and badges (Corals).
- `--bg-main`: Page background.
- `--bg-card`: Card/Container background.
