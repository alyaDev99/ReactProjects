<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>;
import jjk from "../assets/jjk.jpg";
import hxh from "../assets/hxh.jpg";
import mha from "../assets/mha.jpg";
import hp from "../assets/hells paradise.jpg";
import aot from "../assets/aot.jpg";

function Card() {
  return (
    <>
      <div className="card">
        <img className="card-image" src={jjk} alt="jjk wallpaper"></img>
        <h2 className="card-title">Jujutsu Kaisen</h2>
        <p className="card-description">
          High school student Yuji Itadori joins a secret organization of
          Jujutsu Sorcerers in order to kill a powerful Curse, Ryomen Sukuna, to
          whom Yuji becomes the host.
        </p>
        <a
          className="card-link"
          href="https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Kaisen"
          target="_blank"
        >
          Learn more
        </a>
      </div>

      <div className="card">
        <img className="card-image" src={hxh} alt="hxh wallpaper"></img>
        <h2 className="card-title">HunterxHunter</h2>
        <p className="card-description">
          A young boy, Gon Freecss, discovers his father is a Hunter, an elite
          adventurer, and decides to become one himself.
        </p>
        <a
          className="card-link"
          href="https://hunterxhunter.fandom.com/wiki/Hunter_%C3%97_Hunter"
          target="_blank"
        >
          Learn more
        </a>
      </div>

      <div className="card">
        <img className="card-image" src={mha} alt="mha wallpaper"></img>
        <h2 className="card-title">My Hero Academia</h2>
        <p className="card-description">
          Izuku Midoriya, a boy born without superpowers in a world where most
          people have them. Despite this, he dreams of becoming a hero and is
          chosen by the legendary hero All Might to inherit his power, One For
          All.
        </p>
        <a
          className="card-link"
          href="https://myheroacademia.fandom.com/wiki/Story_Arcs"
          target="_blank"
        >
          Learn more
        </a>
      </div>

      <div className="card">
        <img className="card-image" src={aot} alt="aot wallpaper"></img>
        <h2 className="card-title">Attack On Titan</h2>
        <p className="card-description">
          Follows the adventures of Eren Jaeger and his childhood friends Mikasa
          Ackerman and Armin Arlert, whose lives are changed forever after a
          Colossal Titan breaches the wall of their home town.
        </p>
        <a
          className="card-link"
          href="https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki"
          target="_blank"
        >
          Learn more
        </a>
      </div>

      <div className="card">
        <img className="card-image" src={hp} alt="hp wallpaper"></img>
        <h2 className="card-title">Hell's Paradise</h2>
        <p className="card-description">
          Gabimaru, an elite ninja sentenced to death, is offered a chance
          at pardon if he retrieves the "Elixir of Life" from a mysterious
          island. He's joined by other death row convicts, each paired with a
          samurai executioner.
        </p>
        <a
          className="card-link"
          href="https://jigokuraku.fandom.com/wiki/Jigokuraku_Wiki"
          target="_blank"
        >
          Learn more
        </a>
      </div>
    </>
  );
}

export default Card;
