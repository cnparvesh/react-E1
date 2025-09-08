function Avatar({ name, src }) {
    return (
        <>
            <div>
                <img src={src} alt="Avatar" style={{ width: "100px", height: "100px" }} />
                <h4>{name}</h4>
            </div>


        </>
    )

}

export default Avatar;