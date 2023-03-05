



export function CatWord() {
    const word = "Cookie"
    return <div
        style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        }}
    >
        {word}
      </div>
}