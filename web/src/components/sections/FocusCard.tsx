type FocusItem = {
  label: string;
  when: "now" | "later";
};

const items: FocusItem[] = [
  { label: "Your killer feature, built and shipped", when: "now" },
  { label: "Everything else — parked for later", when: "later" },
  { label: "Real users, real feedback, fast", when: "now" },
];

export function FocusCard() {
  return (
    <div className="focus-card">
      <div className="label">Focus, not features</div>
      <div className="focus-list">
        {items.map((item) => (
          <div key={item.label} className={`focus-item ${item.when}`}>
            <span className="dot" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
