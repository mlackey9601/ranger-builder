import './PlayOrderPage.css';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const Accordion = withStyles({
    root: {
        backgroundColor: 'rgba(241, 230, 211, 1)',
        border: '.25vmin solid rgba(100, 28, 39, 1)',
        boxShadow: 'none',
        '&:not(:last-child)': {
        borderBottom: 0,
        },
        '&:before': {
        display: 'none',
        margin: '10px',
        },
        '&$expanded': {
        margin: '0',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(224, 213, 194, 1)',
        borderBottom: '1px solid rgba(100, 28, 39, .125)',
        marginBottom: -1,
        minHeight: 56,
        color: 'rgba(100, 28, 39, 1)',
        cursor: 'pointer',
        '&$expanded': {
        minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
        margin: '12px 0',
        color: 'rgba(238, 45, 50, 1)',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: 'rgba(216, 205, 187, 1)'
    },
}))(MuiAccordionDetails);

const PlayOrderPage = () => {
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="PlayOrderPage">
        <header className="playorder-heading">Play Order</header>
        &nbsp;&nbsp;&nbsp;
        <div className="playorder-container">
            <div>
                <img className="playorder-img" alt="temple guard" src="https://i.imgur.com/vS1FefD.jpg"></img>
            </div>
            <div className="text-container">
                <p className="playorder-intro">
                    Below is the recommended play order for all of the supplements for Rangers of the Shadow Deep as recommended by Joseph McCullough <a className="link" href="https://www.facebook.com/groups/199819667485240/permalink/665850730882129">here</a>.
                </p>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary >
                        <div className="accordion-summary">
                            <div className="supplement-title">Blood Moon</div>
                            <div className="level">0 - 5 / 6 - 10</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="description">
                            Werewolves have descended on the isolated village of <i>High Rock</i>, leaving death and destruction in their wake. Separated from their usual companions, the rangers must rely on a group of auxiliary soldiers to lead them to the village, help fight the werewolves, and hopefully rescue any survivors. However, as the rangers investigate the scene, it becomes increasingly clear that one of those auxiliaries is hiding a deadly secret...
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary >
                        <div className="accordion-summary">
                            <div className="supplement-title">Blinding Light</div>
                            <div className="level">5 - 15</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="description">
                            The <i>Convent of St. Emilia</i>, once a great house of healing in <i>Lorenthia</i>, has been overrun by the Shadow Deep. The Rangers are sent to investigate the ruins and recover the <i>Decanter of St. Emilia</i>, a powerful magic artifact.  An eighty day journey eastward down the stairs, through the bogs, and across a rocky, barren wasteland with only a few freshwater pools for replenishment lies between the Rangers and the Convent. The ruins stand at the top of a rocky escarpment, visible from miles around, even in the perpetual gloom...
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary >
                        <div className="accordion-summary">
                            <div className="supplement-title">Temple of Madness</div>
                            <div className="level">5 - 15</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="description">
                            For weeks the soldiers of <i>Alladore</i> have lost nearly every battle and skirmish they have fought, and it is clear that some dark sorcery is at work. With the fate of the kingdom at stake, the Rangers are sent into the Shadow Deep to try and locate the source of this magic and end the threat. To accomplish this task, however, they must face the horrors of the <i>Temple of Madness...</i>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary >
                        <div className="accordion-summary">
                            <div className="supplement-title">Ghost Stone</div>
                            <div className="level">0 - 5 / 10 - 15</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="description">
                            Ghastly green specters are flooding out of the Shadow Deep in the North, overrunning the <i>Alladorean</i> army and putting it to flight. Now, two groups of Rangers must work together to launch a daring, and likely deadly, raid into the heart of enemy territory. But with an entire army between them and their target, can the Rangers really hope to destroy the <i>Ghost Stone?</i>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary >
                        <div className="accordion-summary">
                            <div className="supplement-title">Across the Wastes</div>
                            <div className="level">10+</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="description">
                            A desperate mission sends the Rangers deep into the trackless desert north of <i>Alladore.</i> Somewhere in that wasteland is a hidden entrance to the Shadow Deep, an entrance that could prove the only chance for a daring rescue...
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary >
                        <div className="accordion-summary">
                            <div className="supplement-title">Incinerator</div>
                            <div className="level">Any Level</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="description">
                            The Rangers have been captured and thrown into a dark dungeon, but this is no ordinary prison - it's the <i>Incinerator!</i>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary >
                        <div className="accordion-summary">
                            <div className="supplement-title">Menagerie</div>
                            <div className="level">Any Level</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="description">
                            In the midst of a mission into enemy territory, the Rangers are ambushed by a strange assortment of wild beasts, pursued by their Shadow Deep handlers. Can the Rangers survive the onslaught, and then turn the tables on their attackers? And can they discover the secrets of the enemy wagon train before it escapes back into the darkness?
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </div>
  )
}
 
export default PlayOrderPage;
