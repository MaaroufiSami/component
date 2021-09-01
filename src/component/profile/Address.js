const Address = () => {
    let address = [{
        street: "Cité les juges ",
        suite: "Apt. 556",
        city: "Jendouba",
        zipcode: "8100",
        
    }]

    return (
        address.map((addres)  => ( addres.zipcode))
    )


}

export default Address 