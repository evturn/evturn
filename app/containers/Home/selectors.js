
export const sortVideos = items => {
  const firstHalf = shuffle(items.slice(0, 5), [ items[0] ])
  const secondHalf = shuffle(items.slice(6, items.length), [])
  return firstHalf.concat(secondHalf)
}

function shuffle(items, acc) {
  if (acc.length === items.length) {
    return acc
  }
  const randomSelection = items[Math.floor(Math.random() * items.length)]

  if (!acc.includes(randomSelection)) {
    acc.push(randomSelection)
  }
  return shuffle(items, acc)
}
