const MAX_OFFSET = -219.99078369140625;

export function SkillCircle({ percent, blue = false }: { percent: number; blue?: boolean }) {
  const dashoffset = ((100 - percent) / 100) * MAX_OFFSET;

  return (
    <svg className={`progress noselect${blue ? " blue" : ""}`} viewBox="0 0 80 80">
      <path className="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
      <path className="fill" style={{ strokeDashoffset: dashoffset }} d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
      <text className="value" x="50%" y="58%">
        {percent}%
      </text>
    </svg>
  );
}
