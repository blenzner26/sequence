import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Button from '@material-ui/core/Button';
import Mirador from './Mirador.js';
import ReactDOM from 'react-dom';
import React from 'react';

const styles = {
    viewBtn: {
        marginTop: "20px",
    },
}

function handleClick(url) {
    ReactDOM.render(
        <Mirador config={{
            id: "mirador", windows: [{
                loadedManifest: url, suggestedSearches: ['NSF'],
            }]
        }} plugins={[]} />,
        document.getElementById("root")
    );
}

function TimelineSubElement(props) {
    return (
        <React.Fragment>
            <VerticalTimelineElement
                className="vertical-timeline-element--work sub-element"
                date={props.date}
                iconStyle={props.iconStyle}
                icon={props.icon}
                position={props.position}
            >
                <h3 className="vertical-timeline-element-title">{props.draft}</h3>
                <h4 className="vertical-timeline-element-subtitle">{props.chapter}</h4>
                <p>{props.description}</p>
                <Button variant="outlined" style={{ ...styles.viewBtn }} onClick={() => handleClick(props.url)}>View document</Button>
            </VerticalTimelineElement>
        </React.Fragment>
    );
}

export default TimelineSubElement;