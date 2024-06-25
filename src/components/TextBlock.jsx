import './Home.css';
import gengar from '../assets/images/wamp.gif'

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-content-container">
                <div id="textblock-container">
                    <h1 id="textblock-title">Your Ultimate Pokédex Adventure!</h1>
                    <p id="textblock-content">
                        Discover the fascinating world of Pokémon. Learn about their unique abilities, habitats, and evolutionary paths. Unleash your inner Pokémon Master and explore the endless possibilities!
                    </p>


                </div>
                <div id="textblock-container">
                    <img
                        id="textblock-gif"
                        src={gengar}
                        alt="Pokemon gengar GIF"
                    />
                </div>
            </div>
        </div>
    );
}

export default TextBlock;

