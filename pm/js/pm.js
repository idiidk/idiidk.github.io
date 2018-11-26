const parser = math.parser()

$(() => {
  $("#math-input").on("keyup", () => {
    const input = $("#math-input").val()

    if (input.toLowerCase().includes("cls")) {
      clearAll()
    } else {
      let parsed = parseExpressions(input.split("\n"))
      parsed = parsed.filter(line => line.expression.length > 0)
      clearOutput()
      displayParsed(parsed)
    }
  })

  $("#math-input").on("click focus blur", () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 200)
  })
})

function displayParsed(parsed) {
  for (exp of parsed) {
    appendOutput(`${colorExpression(exp.expression)} = ${colorExpression(exp.answer)}`)
  }
}

function colorExpression(exp) {
  if (exp) {
    let final = ""

    const chars = exp.toString().split("")
    for (char of chars) {
      switch (char) {
        case "*":
        case "+":
        case "/":
        case "-":
          final += genColor(char, "yellow")
          break
        case "(":
        case ")":
          final += genColor(char, "blue")
          break
        default:
          final += char
          break
      }
    }

    return final
  } else {
    return ""
  }
}

function genColor(data, color) {
  return `<span style="color: ${color}">${data}</span>`
}

function parseExpressions(expressions) {
  const parsed = []

  for (expression of expressions) {
    let answer

    try {
      const ans = parser.eval(expression)
      if (typeof ans !== "function") {
        answer = ans
      } else {
        throw 1
      }
    } catch (e) {
      answer = "Error"
    }

    parsed.push({
      expression,
      answer
    })
  }

  return parsed
}

function appendOutput(data) {
  $("#math-output").append(`${data}<br>`)
}

function clearInput() {
  $("#math-input").val("")
}

function clearOutput() {
  $("#math-output").html("")
}

function clearAll() {
  clearInput()
  clearOutput()
}