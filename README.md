# DIGICODE

A location encoding system that assigns three unique words to pinpoint any location on the Indian map with 3-meter grid accuracy. This project combines the concepts of what3words and DIGIPIN to provide exact addresses using just 3 words.

## 🎯 Project Overview

DIGICODE converts geographical coordinates to three unique words and vice versa, enabling users to:
- Share precise locations using memorable three-word combinations
- Navigate to locations using word-based addresses
- Achieve reproducible results across different devices
- Maintain 3×3 meter grid accuracy throughout India

## ✨ Features

- **Interactive Map Interface**: Click anywhere on the map to generate three words
- **Bidirectional Conversion**: Convert coordinates ↔ three words seamlessly
- **Real-time Synchronization**: Map clicks update input fields automatically
- **Copy/Paste Functionality**: Easy sharing of coordinates and word combinations
- **3-Meter Accuracy**: Precise location encoding with 3×3 meter grid resolution
- **India-Focused**: Optimized for Indian geographical boundaries
- **Algorithmic Generation**: Words generated on-the-go, no pre-stored database

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - Beautiful and accessible React components
- **Sonner** - Toast notifications for user feedback

### Mapping & Location
- **Google Maps API** - Interactive map functionality
- **@react-google-maps/api** - React wrapper for Google Maps

### Core Algorithm
- **Custom Word Encoding System** - Proprietary algorithm for coordinate-to-word conversion
- **10,000+ Word Dictionary** - Extensive wordlist for unique combinations
- **Grid-based Positioning** - Mathematical grid system for precise location mapping

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DIGICODE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### Using the Interface

1. **Generate Words from Map**:
   - Click anywhere on the map
   - Three unique words will be generated and displayed
   - Copy the words using the "Copy" button

2. **Navigate Using Words**:
   - Paste three words in the format: `word1.word2.word3`
   - Click "Locate" to navigate to that position

3. **Coordinate Input**:
   - Enter coordinates in format: `latitude, longitude`
   - Click "Locate" to navigate and see corresponding three words

4. **Copy Functions**:
   - Copy coordinates: `22.288783, 70.775314`
   - Copy three words: `example.words.here`

### Example Usage

```
Input Coordinates: 22.3215616, 70.7657728
Generated Words: abolish.aback.abacus

Input Words: abolish.aback.abacus
Generated Coordinates: 22.321500, 70.765700
```

## 🔧 Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Map.tsx       # Interactive map component
│   ├── LeftPanel.tsx # Input/output panel
│   └── GridLayer.tsx # Map grid overlay
├── lib/
│   ├── wordEncoding.ts # Core encoding/decoding logic
│   ├── wordlist.ts     # 10k+ words dictionary
│   └── utils.ts        # Utility functions
└── App.tsx             # Main application component
```

## 🧮 Algorithm Details

The encoding system uses a mathematical approach:
1. Converts lat/lng to grid coordinates
2. Creates a unique index from grid position
3. Maps index to three words using modular arithmetic
4. Ensures reproducible and reversible encoding

**Grid Resolution**: 0.000027 degrees (~3 meters)
**Coverage Area**: India (6.5°N to 37.1°N, 68.1°E to 97.4°E)
**Unique Combinations**: 10,000³ = 1 trillion possible locations

## 🎯 Assignment Requirements Met

✅ **Three words for exact addresses**: Implemented with 3-meter accuracy
✅ **Reproducibility**: Same coordinates always generate same words
✅ **Easy pronunciation**: Uses common English words
✅ **Algorithmic generation**: No pre-stored coordinate-word database
✅ **Bidirectional conversion**: Works both ways seamlessly

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📄 License

This project is part of an internship assignment demonstrating location encoding concepts.

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment with different encoding algorithms or UI improvements.

---

**Made with ❤️ for precise location sharing in India**
```
