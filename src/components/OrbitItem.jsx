export default function OrbitItem({
  label,
  className
}) {
  return (
    <button className={`orbit-item ${className}`}>
      {label}
    </button>
  )
}