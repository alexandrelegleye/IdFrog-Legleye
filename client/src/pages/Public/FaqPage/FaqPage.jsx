import React, { useEffect } from "react";

import Head from "../../../components/Head/Head";

// Material UI
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import "./faqStyles.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="faq">
      <Head />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Comment participer au projet ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le principe d???IdFrog est de recevoir une contrepartie en ??change de
            votre soutien. Vous devez donc s??lectionner la contrepartie que vous
            souhaitez recevoir en fonction du montant avec lequel vous
            participez (il est possible de faire un don pur sans contrepartie).
            Cliquez sur l???onglet Contreparties pour visualiser la liste des
            contreparties propos??es et s??lectionnez celle que vous int??resse. Il
            vous sera demand?? de vous connecter ?? votre compte IdFrog ou d???en
            cr??er un si vous n?????tes pas d??j?? connect??. Enfin vous acc??derez au
            formulaire de paiement pour soutenir le projet. Pensez ??galement ??
            l???aspect social de la campagne : en la partageant ?? votre r??seau,
            vous aidez le projet ?? se faire conna??tre et augmentez ses chances
            de r??ussite !
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            Que se passe-t-il si le projet n???est pas financ?? ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Les responsables d???un projet ne re??oivent les fonds que si leur
            campagne atteint ou d??passe l???objectif d??fini. Un projet est donc
            d??clar?? non financ?? si sa campagne se termine ?? moins de 100%. Votre
            contribution vous est donc restitu??e : Contribution par carte ?? un
            projet en EUR : vous recevez un remboursement dans les 3 jours
            ouvr??s. Contribution par PayPal ou par carte ?? un projet dans une
            devise autre que EUR : votre pr??l??vement n???a pas lieu.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Quand est-ce que je suis d??bit?? ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Une campagne sur IdFrog fonctionne sur le mode du Tout ou rien, cela
            signifie que les responsables d???un projet ne re??oivent l???argent
            collect?? que si leur objectif de campagne est atteint. Le paiement
            et le d??bit de votre contribution varie selon le mode de paiement et
            la devise d???un projet : Paiement par carte sur une campagne en Euro
            : le pr??l??vement a lieu au moment de la contribution. Si la campagne
            n???atteint pas son objectif, vous aurez un remboursement int??gral
            dans les jours qui suivent la fin de la campagne. Paiement par carte
            sur une campagne dans une autre devise : Le pr??l??vement n???a lieu
            qu????? la fin de la campagne si le projet a r??ussi. Toutefois, une
            empreinte est pr??lev??e au moment de la contribution, pour v??rifier
            que vous disposez bien des fonds. Cette empreinte est rembours??e
            sous 7 jours.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            Quelles informations me concernant seront affich??es ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En cr??ant un profil sur IdFrog, vous indiquez un certain nombre
            d???informations qui pourront appara??tre publiquement sur la
            plateforme IdFrog et en ligne. Les informations publiques sont au
            minimum votre pseudonyme qui s???affichera dans la liste des soutiens
            au projet et dans les commentaires si vous en laissez un.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
