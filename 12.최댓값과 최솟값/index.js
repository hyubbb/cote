function solution(n) {
  const num = n.split(" ");
  return `${Math.min(...num)} ${Math.max(...num)}`;
}

solution("1 2 3 4"); // "1 4"
