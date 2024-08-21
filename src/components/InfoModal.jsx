import { Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function InfoModal({ toggleInfoModal }) {
  return (
    <div className="infoModal">
      <div className="infoModalSection">
        <div className="infoModalHeader">
          <CircleIcon
            sx={{ fill: "var(--bongo-tile)", width: "1rem", height: "1rem" }}
          />
          <h1>SÅHÄR SPELAR DU</h1>
          <CircleIcon
            sx={{ fill: "var(--bongo-tile)", width: "1rem", height: "1rem" }}
          />
        </div>
        <article>
          <p>
            I detta bingospel letar du efter objekt eller platser utspridda på
            Lindholmen. När du hittar objektet eller platsen, klickar du på dess
            tillhörande ruta.
          </p>
          <p>
            Då kan det visas en faktaruta om objektet eller platsen. Klicka ner
            rutan genom att trycka på rutans text och fortsätt spela. Tävla
            själv eller i lag och upptäck Lindholmen!
          </p>
        </article>
      </div>
      <div className="infoModalSection">
        <div className="infoModalHeader">
          <CircleIcon
            sx={{ fill: "var(--bongo-tile)", width: "1rem", height: "1rem" }}
          />
          <h1>GJORD AV</h1>
          <CircleIcon
            sx={{ fill: "var(--bongo-tile)", width: "1rem", height: "1rem" }}
          />
        </div>
        <article>
          <p className="infoNameParagraph">Jakob Tamm: Research & Manus</p>
          <p className="infoNameParagraph">Simon Axelsson: Research & Manus</p>
          <p className="infoNameParagraph">Liv Oschlag: Webb-Dev</p>
          <p className="infoNameParagraph">Henrik Andersen: Webb-Dev</p>
          <p className="infoNameParagraph">John Hamrin: UX-Design</p>
          <p className="infoNameParagraph">Madeleine Ek: UX-Design</p>
          <p className="infoNameParagraph">Vilmer Franzino: UX-Design</p>
        </article>
      </div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--bongo-purple)",
          color: "var(--bongo-yellow)",
          fontFamily: "var(--bongo-font)",
          fontSize: "2.3rem",
          width: "70%",
        }}
        onClick={toggleInfoModal}>
        STÄNG
      </Button>
    </div>
  );
}
