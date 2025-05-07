export default function knightMoves(start, end) {
    // All 8 possible knight moves
    const directions = [
      [2, 1], [1, 2], [-1, 2], [-2, 1],
      [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Helper function to check if position is on the board
    function isValid([x, y]) {
      return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    // Initialize queue for BFS with the starting position and path
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString()); // store as string "x,y"

    while (queue.length > 0) {
      const path = queue.shift(); // get the current path
      const current = path[path.length - 1]; // last position in the path

      // If we've reached the end, print and return the path
      if (current[0] === end[0] && current[1] === end[1]) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        for (let step of path) {
          console.log(step);
        }
        return path;
      }

      // Generate all valid next moves
      for (let [dx, dy] of directions) {
        const next = [current[0] + dx, current[1] + dy];
        const key = next.toString(); // use as visited key

        if (isValid(next) && !visited.has(key)) {
          visited.add(key); // mark as visited
          queue.push([...path, next]); // add new path to the queue
        }
      }
    }
  }

