export function artificialDelay(ms: number = 300) {
  const start = performance.now();
  while (performance.now() - start < ms) {
    // Artificial delay
  }
}

export function getRandomBroker() {
  return `Broker ${Math.floor(Math.random() * 9000 + 1000)}`;
}
