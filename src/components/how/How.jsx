import { Button, Grid, Typography } from '@mui/material';
import Step from '../how/Step';
import classNames from "classnames";
import styles from "../how/How.module.scss";

export default function How ({ description, title, items = [], link }) {
return (
<Grid container className={classNames(styles.containerHow)}>
    <div className={classNames(styles.back)}></div>
    <Grid item xs={5} className={classNames(styles.containerHowItWorks)}>
        <div className={classNames(styles.containerHowDiv)}>
            <div className={classNames(styles.titleHow)}>{title}</div>
            <div className={classNames(styles.descriptionHow)}>{description}</div>
            <Button className={classNames(styles.btn)} href={link}>LEARN MORE</Button>
        </div>
    </Grid>
    <Grid item xs={5} className={classNames(styles.containerStepHow)}>
        <Grid container className={classNames(styles.steps)}>
        {items.map((item, index) => (
        <Step key={index} number={index + 1} title={item.title} description={item.description} />
        ))}
        </Grid>
    </Grid>
</Grid>
);
};


/*
export default HowComponent;

To use these components, you can import the How component and pass in the required props:

import HowComponent from './components/how/How';

const items = [
{
title: "Step 1",
description: "Description for step 1"
},
{
title: "Step 2",
description: "Description for step 2"
},
{
title: "Step 3",
description: "Description for step 3"
}
];

const link = "https://example.com";

const howProps = {
title: "How to Use This Platform",
description: "Instructions on how to use this platform",
items: items,
link: link
};

<HowComponent {...howProps} />

Make sure to import the necessary dependencies (such as the Grid, Step, and Button components from Material UI) in the appropriate files. Also, don't forget to implement this on the dev branch, as specified in the requirements.



*/