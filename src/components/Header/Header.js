import './header.css';

 
const Header =({keyword})=>{
    return(
        <div className='header'>
            <h1>
                NEWS BULLETIN
            </h1>
            <input onChange={keyword}></input>
        </div>

    )
}
   
    
export default Header;