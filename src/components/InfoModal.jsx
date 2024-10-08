import { Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function InfoModal({ toggleInfoModal }) {
  return (
    <div className="infoModal">
      <div className="infoModalSection" id="topInfoSection">
        <div className="infoModalHeader">
          <CircleIcon
            sx={{
              fill: "var(--bongo-bullet-dark)",
              width: "1rem",
              height: "1rem",
            }}
          />
          <h1 className="mediumFontHeader">SÅHÄR SPELAR DU</h1>
          <CircleIcon
            sx={{
              fill: "var(--bongo-bullet-dark)",
              width: "1rem",
              height: "1rem",
            }}
          />
        </div>
        <article className="infoText">
          <p className="twelvePX">
            I detta bingospel letar du efter objekt eller platser utspridda på
            Lindholmen. När du hittar objektet eller platsen, klickar du på dess
            tillhörande ruta.
          </p>
          <p className="twelvePX">
            Du får då lite fakta om objektet eller platsen. Klicka ner rutan
            genom att trycka på rutans text och fortsätt spela. Tävla själv
            eller i lag och upptäck Lindholmen!
          </p>
        </article>
      </div>
      <div className="infoModalSection" id="bottomInfoSection">
        <div className="infoModalHeader">
          <CircleIcon
            sx={{
              fill: "var(--bongo-bullet-light)",
              width: "1rem",
              height: "1rem",
            }}
          />
          <h1 className="mediumFontHeader">GJORD AV</h1>
          <CircleIcon
            sx={{
              fill: "var(--bongo-bullet-light)",
              width: "1rem",
              height: "1rem",
            }}
          />
        </div>
        <article className="infoText">
          <p className="infoNameParagraph twelvePX">
            Jakob Tamm: Research & Manus
          </p>
          <p className="infoNameParagraph twelvePX">
            Simon Axelsson: Research & Manus
          </p>
          <p className="infoNameParagraph twelvePX">Liv Oszlak: Web Dev</p>
          <p className="infoNameParagraph twelvePX">Henrik Andersen: Web Dev</p>
          <p className="infoNameParagraph twelvePX">John Hamrin: UX-Design</p>
          <p className="infoNameParagraph twelvePX">Madeleine Ek: UX-Design</p>
          <p className="infoNameParagraph twelvePX">
            Vilmer Franzino: UX-Design
          </p>
        </article>
      </div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--bongo-purple)",
          color: "var(--bongo-yellow)",
          fontFamily: "var(--bongo-font)",
          fontSize: "24px",
          width: "35%",
        }}
        onClick={toggleInfoModal}>
        STÄNG
      </Button>
    </div>
  );
}
