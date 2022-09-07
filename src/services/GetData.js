function GetData (){
    const [animalsData, setAnimalsData] = useState([]);
    useEffect (()=>{
        axios.get("https://zoo-animal-api.herokuapp.com")
        .then ((res)=> {
            setBooksApi(res.data)
        })

    },[animalsData])
}