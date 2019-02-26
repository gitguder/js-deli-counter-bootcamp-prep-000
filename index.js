function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(`${person}`);
  return `Welcome. You are ticket number ${katzDeliLine.length}.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  const line = [];

  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${line.join(', ')}`
}
