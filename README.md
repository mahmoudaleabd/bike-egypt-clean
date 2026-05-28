# Bike Egypt - Web App for Bike Enthusiasts

A comprehensive web application for bike enthusiasts in Egypt, featuring:
- **Shops Directory**: Find nearby bike shops for spare parts and maintenance services
- **Marketplace**: Buy and sell bikes with fellow enthusiasts
- **Transport Services**: Request professional bike transport across Egypt

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## Installation

1. Navigate to the project directory:
```bash
cd bike-egypt
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Features

### Home Page
- Hero section with call-to-action buttons
- Feature highlights for each service
- Statistics section
- Call-to-action section

### Shops Page
- Search functionality for shops and locations
- Filter by service type (Maintenance, Spare Parts)
- Shop cards with:
  - Location and distance
  - Rating and reviews
  - Operating hours
  - Service tags
  - Contact buttons (Call, Directions)

### Marketplace Page
- Search and filter bikes by type (Road, Mountain, Hybrid)
- Bike listings with:
  - Images
  - Price
  - Location
  - Listing date
  - Condition tags
  - Seller contact information
- "Sell Your Bike" modal form to list new bikes

### Transport Page
- Service options with pricing
- Features list
- Transport request form with:
  - Contact information
  - Pickup and drop-off locations
  - Date and time preferences
  - Bike type and quantity
  - Special instructions
- Contact information for support

## Project Structure

```
bike-egypt/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Navigation component
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Shops.jsx           # Shops directory
│   │   ├── Marketplace.jsx     # Buy/sell bikes
│   │   └── Transport.jsx       # Transport services
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.js           # PostCSS configuration
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Colors
The primary color is green (Tailwind's emerald palette). You can modify the colors in `tailwind.config.js`.

### Data
The shop and bike data are currently hardcoded in the respective page components. In a production app, these would come from a backend API.

## Future Enhancements

- User authentication
- Backend API integration
- Real-time chat with sellers
- Payment processing
- Order tracking for transport services
- User reviews and ratings
- Advanced search and filtering
- Location-based services using GPS

## License

This project is open source and available for personal and commercial use.
