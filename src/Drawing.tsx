

const HEAD = (
    <div 
        style={{
            width: "50px",
            height: "10px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: "-30px"
        }}
    />
)

const BODY = (
    <div 
        style={{
            width: "50px",
            height: "10px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: "-30px"
        }}
    />
)

const RIGHT_ARM = (
    <div 
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            borderRadius: "100%",
            position: "absolute",
            top: "150px",
            right: "10px",
            rotate: "30deg",
            msTransformOrigin: "right bottom"
        }}
    />
)


const RIGHT_LEG = (
    <div 
        style={{
            width: "50px",
            height: "px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: "-30px"
        }}
    />
)




export function Drawing() {
    return <div style = {{position: "relative"}}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        <div style = {{ 
            height: "50px", 
            width: "10px", 
            background: "black",
            position: "absolute",
            top: 0,
            right: 0
            }}
        />
        <div style = {{ 
            height: "10px", 
            width: "200px", 
            background: "black",
            marginLeft: "120px" 
            }}
        />
        <div style = {{ 
            height: "400px", 
            width: "10px", 
            background: "black",
            marginLeft: "120px" 
            }}
        />
        <div style = {{ height: "10px", width: "250px", background: "black" }}/>
    </div>
}