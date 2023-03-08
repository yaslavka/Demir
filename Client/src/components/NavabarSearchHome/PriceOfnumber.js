import React from "react";
import {makeStyles} from "@material-ui/core";
import {Slider} from "@mui/material";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    thumb: {
        color: '#000',
    },
    rail: {
        color: `rgba(0, 0, 0, 0.26)`,
    },
    track: {
        color: '#000',
    },
});
function PriceOfnumber({handelc, value}){
    const classes = useStyles();
    return (
        <>
            <fieldset style={{opacity: 1}}>
                <div className="set-header" style={{textAlign: "center"}}>Цена за номер</div>
                <div className="set-content">
                    <div className="checkbox c-checkbox">
                        <label>
                            <div className={classes.root}>
                                <Slider
                                    value={value}
                                    onChange={handelc}
                                    valueLabelDisplay='auto'
                                    min={0}
                                    max={100000}
                                    classes={{
                                        thumb: classes.thumb,
                                        rail: classes.rail,
                                        track: classes.track,
                                    }}
                                />
                            </div>
                        </label>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
export default PriceOfnumber