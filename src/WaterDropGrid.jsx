import anime from "animejs";

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

export default function WaterDropGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <DotGrid />
    </div>
  );
}

const DotGrid = () => {
  const dots = [];
  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div key={`${i}-${j}`} className="dot-container">
          <div className="dot-point w-2 h-2 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-200 opacity-60"></div>
        </div>
      );
    }
  }

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    anime({
      targets: ".dot-point",
      scale: (el) => {
        const rect = el.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - x;
        const dy = rect.top + rect.height / 2 - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < 100 ? 1.5 - dist / 150 : 1;
      },
      translateY: (el) => {
        const rect = el.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - x;
        const dy = rect.top + rect.height / 2 - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < 100 ? -20 + dist / 5 : 0;
      },
      opacity: (el) => {
        const rect = el.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - x;
        const dy = rect.top + rect.height / 2 - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < 100 ? 1 : 0.5;
      },
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <div
      className="grid w-fit"
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      onMouseMove={handleMouseMove}
    >
      {dots}
    </div>
  );
};
