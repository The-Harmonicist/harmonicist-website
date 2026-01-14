import './NavBar.css'

export default function NavBar (){
    return (
        <nav className='navBar'>
            <ul>
                <li><a href='#home'>Home</a></li>
               <li><a href='#music'>Music</a></li>
               <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Social Media</a></li>
                <li><a href='#store'>Shop</a></li>
                <li><a href='#tabs'>Request [Tabs/Music/Sessions]</a></li>
                
            </ul>
        </nav>
    )
}