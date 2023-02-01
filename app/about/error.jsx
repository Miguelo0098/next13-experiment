"use client";

export default function Errod({ error, reset }) {
  return (
    <div>
      This is not loading up: {error.message}
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
}
