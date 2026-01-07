import "./IndiaMap.css";

const locations = [
  { name: "Chomu", x: 305, y: 235 },
  { name: "Sanchore", x: 215, y: 350 },
  { name: "Pipar", x: 295, y: 320 },
  { name: "Nagaur", x: 290, y: 285 },
  { name: "Govindgarh", x: 315, y: 245 },
  { name: "Khajroli", x: 325, y: 300 },
  { name: "Hanumangarh", x: 255, y: 205 },
  { name: "Pilibanga", x: 245, y: 215 },
  { name: "Rawla Mandi", x: 225, y: 195 },
  { name: "Anupgarh", x: 210, y: 185 },
  { name: "Abohar", x: 265, y: 200 },
  { name: "Fazilka", x: 255, y: 190 }
];

export default function IndiaMap() {
  return (
    <div className="map-container">
      <svg viewBox="0 0 600 600" className="india-map">

        {/* India outline */}
        <image
          href="https://upload.wikimedia.org/wikipedia/commons/9/9a/India_outline_map.svg"
          x="0"
          y="0"
          width="600"
          height="600"
        />

        {/* Markers */}
        {locations.map((loc) => (
          <g
            key={loc.name}
            onClick={() => console.log(loc.name)}
            className="marker-group"
          >
            <circle
              cx={loc.x}
              cy={loc.y}
              r="6"
              className="marker"
            />
            <text
              x={loc.x + 8}
              y={loc.y - 8}
              className="label"
            >
              {loc.name}
            </text>
          </g>
        ))}

      </svg>
    </div>
  );
}
