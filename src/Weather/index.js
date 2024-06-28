import './index.css'
const Weather = () => {
    return(
        <div>
            <div className="searchplace">
                <div>
            <h2>Ryan</h2>
            </div>
            <div>
            <input type="text" placeholder="Search place"/>
            </div>
            <button>search</button>
            </div>
        <img src='./images/blue-sky.jpeg' alt='sky image'/>
        </div>
    )
}
export default Weather;